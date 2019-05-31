import Invitation from './model';
import Guest from '../guest/model';

export default {
    Query: {
        invitation: (_, { id }) => Invitation.findById(id),
        invitations: () => Invitation.find()
    },
    Mutation: {
        invitation: async (_, { guests, additionalGuests }) => {
            if (!Array.isArray(guests)) throw new Error('No guests to add');
            const promises = await Guest.insertMany(guests);
            const ids = (await Promise.all(promises)).map(({ _id }) => _id);
            return Invitation.create({
                guests: ids,
                additionalGuests
            });
        }
    },
    Invitation: {
        guestCount: ({ guests = [], additionalGuests }) =>
            guests.length + (additionalGuests || 0),
        guests: ({ guests }) => Guest.find({ _id: { $in: guests } })
    }
};

import Invitation from './model';
import Guest from '../guest/model';

export default {
    Query: {
        invitation: (_, { id, guestId }) => {
            if (id) return Invitation.findById(id);
            return Invitation.findOne({ guests: guestId });
        },
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
        },
        addGuest: async (_, { invitationId, guest, removeAdditional }) => {
            const invitation = await Invitation.findById(invitationId);
            if (removeAdditional && invitation.additionalGuests <= 0)
                throw new Error('No space left on invitation');
            const newGuest = await Guest.create(guest);
            invitation.guests.push(newGuest._id);
            if (removeAdditional) invitation.additionalGuests -= 1;
            newGuest.save();
            invitation.save();
            console.log(invitation);
            return invitation;
        }
    },
    Invitation: {
        guestCount: ({ guests = [], additionalGuests }) =>
            guests.length + (additionalGuests || 0),
        guests: ({ guests }) => Guest.find({ _id: { $in: guests } })
    }
};

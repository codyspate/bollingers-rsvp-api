import Guest from './model';

export default {
    Query: {
        guest: (_, { id }) => Guest.findById(id),
        guests: (_, { firstName, lastName }) =>
            Guest.findByName({ firstName, lastName })
    },
    Mutation: {
        guest: async (_, { id, updateFields }) => {
            await Guest.updateOne({ _id: id }, updateFields);
            return Guest.findById(id);
        }
    }
};

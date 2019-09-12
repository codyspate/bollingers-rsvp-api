import Guest from './model';

export default {
    Query: {
        guest: (_, { id }) => Guest.findById(id),
        guests: (_, { firstName, lastName }) =>
            Guest.findByName({ firstName, lastName })
    },
    Mutation: {
        guest: async (_, { id, updateFields }) => {
            console.log(updateFields);
            await Guest.updateOne({ _id: id }, updateFields);
            const g = await Guest.findById(id);
            console.log(g);
            return g;
        }
    }
};

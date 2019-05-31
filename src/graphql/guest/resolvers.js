import Guest from './model';

export default {
    Query: {
        guest: (_, { id }) => Guest.findById(id)
    }
};

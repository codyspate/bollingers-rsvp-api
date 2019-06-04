import MealOption from './model';

export default {
    Query: {
        mealOptions: () => MealOption.find()
    },
    Mutation: {
        mealOption: (_, { name }) => MealOption.create({ name }),
        mealOptions: async (_, { names = [] }) => {
            await MealOption.deleteMany();
            return MealOption.insertMany(names.map(name => ({ name })));
        },
        removeMealOption: async (_, { id }) => {
            await MealOption.findOneAndRemove({ _id: id });
            return true;
        }
    }
};

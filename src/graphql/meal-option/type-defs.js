import { gql } from 'apollo-server-cloud-functions';

const typeDefs = gql`
    type MealOption {
        _id: ID
        name: String
    }

    type Query {
        mealOptions: [MealOption]
    }

    type Mutation {
        mealOptions(names: [String]): [MealOption]
        mealOption(name: String): MealOption
        removeMealOption(id: String): Boolean
    }
`;

export default typeDefs;

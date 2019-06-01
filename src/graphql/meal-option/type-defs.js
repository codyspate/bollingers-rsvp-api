import { gql } from 'apollo-server-cloud-functions';

const typeDefs = gql`
    type MealOption {
        _id: ID
        name: String
    }
`;

export default typeDefs;

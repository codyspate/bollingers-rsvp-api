import { gql } from 'apollo-server-cloud-functions';

const typeDefs = gql`
    type Guest {
        _id: String
        firstName: String
        lastName: String
        mealOption: String
        songRecommendation: String
        status: String
    }

    type Query {
        guest(id: String): Guest
    }
`;

export default typeDefs;

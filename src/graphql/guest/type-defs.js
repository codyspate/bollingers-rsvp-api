import { gql } from 'apollo-server-cloud-functions';

const typeDefs = gql`
    type Guest {
        firstName: String
        lastName: String
        mealOption: String
        songRecommendation: String
    }

    type Query {
        guest(id: String): Guest
    }
`;

export default typeDefs;

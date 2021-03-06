import { gql } from 'apollo-server-cloud-functions';

const typeDefs = gql`
    type Guest {
        _id: String
        firstName: String
        lastName: String
        mealChoice: String
        songRecommendation: String
        attending: Boolean
    }

    input InputGuest2 {
        firstName: String
        lastName: String
        mealChoice: String
        songRecommendation: String
        attending: Boolean
    }

    type Query {
        guest(id: String, firstName: String, lastName: String): Guest
        guests(firstName: String, lastName: String): [Guest]
    }

    type Mutation {
        guest(id: String!, updateFields: InputGuest2): Guest
    }
`;

export default typeDefs;

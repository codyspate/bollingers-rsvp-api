import { gql } from 'apollo-server-cloud-functions';

export default gql`
    type Invitation {
        _id: ID
        guests: [Guest]
        guestCount: Int
        additionalGuests: Int
    }

    type Guest {
        _id: ID
        firstName: String
        lastName: String
        mealOption: String
        songRecommendation: String
        attending: Boolean
    }

    input InputGuest {
        firstName: String
        lastName: String
        attending: Boolean
    }

    type Query {
        invitation(id: String): Invitation
        invitations: [Invitation]
    }

    type Mutation {
        invitation(guests: [InputGuest]!, additionalGuests: Int): Invitation
    }
`;

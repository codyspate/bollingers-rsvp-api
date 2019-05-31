import { gql } from 'apollo-server-cloud-functions';

export default gql`
    type Invitation {
        _id: String
        guests: [Guest]
        guestCount: Int
        additionalGuests: Int
    }

    type Guest {
        _id: String
        firstName: String
        lastName: String
        mealOption: String
        songRecommendation: String
    }

    input InputGuest {
        firstName: String
        lastName: String
    }

    type Query {
        invitation(id: String): Invitation
        invitations: [Invitation]
    }

    type Mutation {
        invitation(guests: [InputGuest]!, additionalGuests: Int): Invitation
    }
`;

import { gql } from 'apollo-server-cloud-functions';

export default gql`
    type Invitation {
        guests: [Guest]
        guestCount: Int
        additionalGuests: Int
    }

    type Guest {
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

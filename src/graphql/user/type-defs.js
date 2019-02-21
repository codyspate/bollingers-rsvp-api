import { gql } from 'apollo-server-cloud-functions';

export default gql`
    type AuthResponse {
        token: String
        exp: Int
        iat: Int
    }
	extend type Query
`;

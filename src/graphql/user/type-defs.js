import { gql } from 'apollo-server-cloud-functions';

export default gql`
    type Name {
        first: String
        last: String
    }
    type User {
        email: String
        name: Name
    }
    type AuthResponse {
        token: String
        exp: Int
        iat: Int
        user: User
    }
    type Mutation {
        signUp(
            firstName: String
            lastName: String
            password: String
            email: String
        ): AuthResponse
        signIn(email: String, password: String): AuthResponse
    }
    type Query {
        health: Boolean
    }
`;

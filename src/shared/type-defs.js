import { gql } from 'apollo-server-cloud-functions';

export default gql`
  type Query {
    hello: String
  }
`;

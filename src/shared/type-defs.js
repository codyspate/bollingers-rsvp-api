import { gql } from 'apollo-server-cloud-functions';

export default gql`
  type HelloObj {
    message: String
    obj: HelloObj
    messages: [String]
    num: Int
  }
  type Query {
    hello(name: String): HelloObj
  }
`;

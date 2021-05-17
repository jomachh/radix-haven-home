import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  concat,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://radix-haven-client-stripe-demo.herokuapp.com/graphql",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbmZvIjoiYWx0UTIxQUttQ042dUNFTGN6UEF6b3FKNG5sOEZrN2RXbHkza1gwS1VvcVp3eDdjYkVoYmRoTXNqVU5PK3lCTEpvNnhXblc5RzBVRkMraWQwQ1JWZ2huQ3VvVCtpdzIyYzNKbkU5N0RIeCs3MjRQQzEyWkdVSzM2MXZKK0dsSDZLTFlUOVpEblY4cXpCU0U4aHhVM0E3cGxHZGlMdHQwRU5yM2VESmx0VDc0NjlzNHhTaGZYUDZWZytVbjZMSituUUN4M3NGdkZZeFlJMWN6WmYvOU1OVHNYS0l6VzhMV0hOdnR0cWkrM0ZBaTR6Wkd5SkFYM2VVY3QydkNvUDJTWEt1bkt3TUJ6YW1BdGJoc2o3M3RuYzNIemZyS3VuWENSKzZGd0RqM1dLNU9Hb2lOZytqR25JdWtqME9rcnRmM0NsR01ORUlHTTNEUHUxM1Y0UGpuYWZ4L3hpZms2cDhOd1RCdTdPdHdrTDYxQXVlUUJ2NHk5eHptY1JNaERzMXBid1VCcGtFYkV3ZnlqbDQvdkk5ME5lcjQ0M1VnYU5sQm5OUVlXVzg2TnFUUTZPd1ZkdjAvSHF6amJEN3FCMEhVVGFwb044TWFGWmgxM2Y3NzNPWmhHTHAvK0EyUzZ5NDFGQTJMSVl0M3l4QT09IiwiaWF0IjoxNjIwNzg4NzQ4LCJleHAiOjE2MjEzMDcxNDh9.lmgAT98fHyx7WluVLTYBI9mcQ-l7tXXxWQyu-kESTrA",
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

export default client;

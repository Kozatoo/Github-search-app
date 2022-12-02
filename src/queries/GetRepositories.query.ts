import { gql } from "graphql-request";
const GET_REPOS = gql`
query GetRepos($queryString: String!, $number_of_repos: Int!) {
  search(query: $queryString, type: REPOSITORY, first: $number_of_repos) {
    repositoryCount
    edges {
      node {
        ... on Repository {
          nameWithOwner
          url
          description
          repositoryTopics(first: 5) {
            nodes {
              topic {
                name
              }
            }
          }
          primaryLanguage {
            name
          }
          languages(first: 3) {
            nodes {
              name
            }
          }
          forkCount
          stargazers {
            totalCount
          }
          updatedAt
        }
      }
    }
  }
}
`;
export default GET_REPOS;
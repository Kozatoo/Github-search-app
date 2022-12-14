import { gql } from "graphql-request";
import { gqlDataFetcher } from "./GithubApiProvider";
import { RepositoryResponse } from "../models/IRepository";
/**
 * 
 * @param query - The inserted search text
 * @param itemsCount - The number of items returned by the function
 * @remarks - Since this method is the only one fetching from the graphql server, the instantiation of GraphQLClient is done here.
 * If the number of queries increases, we might think of refactoring the code in a way where we only create the request and variables and call another function that takes care of the fetch
 * @returns - A list of Repositories in the RepositoryResponse format
 */
export async function getRepos(query: string, itemsCount: number=10): Promise<RepositoryResponse> {
  const GET_REPO = gql`
    query GetRepos($queryString: String!, $number_of_repos: Int!) {
      search(query: $queryString, type: REPOSITORY, first: $number_of_repos) {
        repositoryCount
        edges {
          node {
            ... on Repository {
              nameWithOwner
              url
              description
              repositoryTopics(first: 3) {
                nodes {
                  topic {
                    name
                  }
                }
              }
              primaryLanguage {
                name
                color
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
try{
  const variables = {
    queryString: query,
    number_of_repos: itemsCount,
  }
  const data = await gqlDataFetcher(GET_REPO, variables);
  return data as RepositoryResponse;
}
catch(e)
{
  console.log(e)  
  throw(e);
}


}

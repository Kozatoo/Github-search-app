import { GraphQLClient, gql } from "graphql-request";
import { IRepository,RepositoryResponse } from "../models/IRepository";
export async function getRepos(query: string, itemsCount: number): Promise<RepositoryResponse> {
  const endpoint = "https://api.github.com/graphql";
  const graphQLClient = new GraphQLClient(endpoint,{method : 'POST'});
  graphQLClient.setHeader('authorization', 'Bearer '.concat(import.meta.env.VITE_GITHUB_ACCESS_TOKEN));

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
              repositoryTopics(first: 5) {
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
  const data = await graphQLClient.request(GET_REPO, variables);
  return data as RepositoryResponse;
}
catch(e)
{
  console.log(e)  
  throw(e);
}


}

import { GraphQLClient, gql } from "graphql-request";
import { ProfileResponse } from "src/models/IProfile";
import { gqlDataFetcher } from "./GithubApiProvider";
/**
 * 
 * @param login - The user login
 * @remarks - Since this method is the only one fetching from the graphql server, the instantiation of GraphQLClient is done here.
 * If the number of queries increases, we might think of refactoring the code in a way where we only create the request and variables and call another function that takes care of the fetch
 * @returns - A list of Repositories in the RepositoryResponse format
 */
export async function getProfiles(query?: string , itemsCount: number=10): Promise<ProfileResponse> {
  /**
   * Linking the 
   */
  if(!query){
    query ="";
  }
  const GET_PROFILES = gql`
  query GetProfiles($queryString: String!, $number_of_users: Int!) {
    search(query: $queryString, type: USER, first: $number_of_users) {
      userCount
      edges {
        node {
          ... on User {
            avatarUrl
            bio
            name
            url
            login
            followers {
              totalCount
            }
            following{
              totalCount
            }
            starredRepositories{
              totalCount
            }
            repositories{
              totalCount
            }
          }
        }
      }
    }
  }
  `;
try{
  const variables = {
    queryString: query,
    number_of_users: itemsCount,
  }
  const data = await await gqlDataFetcher(GET_PROFILES, variables)
  return data as ProfileResponse;
}
catch(e)
{
  console.log(e)  
  throw(e);
}


}

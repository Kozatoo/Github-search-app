import { GraphQLClient, gql } from "graphql-request";
import { DetailedProfileResponse } from "src/models/IProfile";
import { gqlDataFetcher } from "./GithubApiProvider";
/**
 * 
 * @param query - The inserted search text
 * @param itemsCount - The number of items returned by the function
 * @remarks - Since this method is the only one fetching from the graphql server, the instantiation of GraphQLClient is done here.
 * If the number of queries increases, we might think of refactoring the code in a way where we only create the request and variables and call another function that takes care of the fetch
 * @returns - A list of Repositories in the RepositoryResponse format
 */
export async function getUserDetails(login?: string , itemsCount: number=10): Promise<DetailedProfileResponse> {
  /**
   * Linking the 
   */
  if(!login){
    login ="Kozatoo";
  }
  const GET_PROFILES = gql`
    query GetUserDetails($queryString: String!) {
        user(login: $queryString) {
        name
        avatarUrl
        bio
        login
        url
        followers {
            totalCount
          }
          following{
            totalCount
          }
          starredRepositories{
            totalCount
          }
        repositories(
            orderBy: {field: STARGAZERS, direction: ASC}
            last: 100
            privacy: PUBLIC
        ) {
            totalCount
            edges {
            node {
                description
                name
                nameWithOwner
                forkCount
                primaryLanguage {
                color
                name
                }
                stargazers {
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
        queryString: login
    }
    const data = await await gqlDataFetcher(GET_PROFILES, variables)
    return data as DetailedProfileResponse;
    }
    catch(e)
    {
    console.log(e)  
    throw(e);
    }
}

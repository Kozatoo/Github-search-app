import { GraphQLClient, gql } from "graphql-request";
/**
 * 
 * @param gqlQuery   - the GraphQL Query we're going to use to fetch the data 
 * @param variables  - The variables that are sent as input in the GraphQL Query
 * @returns the response from Github's API as a raw json object
 */
const gqlDataFetcher = async (
                            gqlQuery : string  ,
                            variables : { 
                                queryString: string,
                                number_of_repos?: number,
                                number_of_users?:number
                            }
                        ) => 
    {
        const endpoint = "https://api.github.com/graphql";
        const graphQLClient = new GraphQLClient(endpoint,{method : 'POST'});
        graphQLClient.setHeader('authorization', 'Bearer '.concat(import.meta.env.VITE_GITHUB_ACCESS_TOKEN));


        const data = await graphQLClient.request(gqlQuery, variables);
        return data;
    }
export { gqlDataFetcher };
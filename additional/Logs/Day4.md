# Day 4
I started by completing the components linking and passing data from one component to another.  
Moreover, I also started on using the Github GraphQL API, I managed to write out queries that are responding to our needs.  
The main difficulties encountered here were implementing graphql-request and finding a solution to use environment variables without security worries.  
However, it seems that it's not  actually possible for react to do that since React environment variables are embedded in the build and are publicly accessible.

So for now we're going for a dotenv approach to not loose more time on that. We don't seem to have another option since the Access Token is required for Github API. 

Working on the GraphQL API was a little bit hard but I started on writing the query and structuring how it would work
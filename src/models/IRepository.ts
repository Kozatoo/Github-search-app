interface IRepository {
    /** 
     * This is the main object format we are going to pass from component to another
     * @param - primaryLanguage means the most used language in the project
     * @remarks - All other params speak for themselves.
     */
    nameWithOwner: string;
    url: string;
    forkCount: number;
    updatedAt: string;
    description: string;
    primaryLanguage:{
        name : string;
        color: string;
    }   
    stargazers :{
        totalCount: number;
    }
};

interface RepositoryWrapper{
    /**
     * Since the response is in a very nested json object, we're applying multiple couches of wrapping for multiple purposes
     */
    node : IRepository;
}interface RepositoriesData {
    /**
     * This interface represents the basic response containing a list of wrapped repositories and a variable representing the number of edges
     */
        edges : Array<RepositoryWrapper>;
        repositoryCount: number;
}
interface RepositoryResponse{
    /**
     * This is the basic response sent back with the Github API
     */
    search:  RepositoriesData;
    
}
export type {IRepository, RepositoriesData, RepositoryWrapper, RepositoryResponse }
export interface IRepository {
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

export interface RepositoryWrapper{
    node : IRepository;
}
export interface RepositoriesData {
        edges : Array<RepositoryWrapper>;
        repositoryCount: number;
}
export interface RepositoryResponse{
    search:  RepositoriesData;
    
}
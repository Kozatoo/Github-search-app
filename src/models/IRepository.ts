export interface IRepository {
    name: string;
    url: string;
    forkCount: number;
    updatedAt: string;
    description: string;
    primaryLanguage:{
        name : string;
    } 
    stargazers :{
        totalCount: number;
    }
};

export interface RepositoryWrapper{
    node : IRepository
}
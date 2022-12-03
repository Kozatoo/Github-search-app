interface IProfile {
    /** 
     * This is the main object format we are going to pass from component to another
     * @remarks - All params speak for themselves.
     */
    avatarUrl: string;
    bio: string;
    name: number;
    url:string;
    repositories:{
        totalCount: number
    }
    followers:{
        totalCount : number;
    } 
    following:{
        totalCount: number;
    }
    starredRepositories:{
        totalCount:number;
    }   
};

interface ProfileWrapper{
    /**
     * Since the response is in a very nested json object, we're applying multiple couches of wrapping for multiple purposes
     */
    node : IProfile;
}interface ProfilesData {
    /**
     * This interface represents the basic response containing a list of wrapped profiles and a variable representing the number of edges
     */
        edges : Array<ProfileWrapper>;
        userCount: number;
}
interface ProfileResponse{
    /**
     * This is the basic response sent back with the Github API
     */
    search:  ProfilesData;
    
}
export type {IProfile, ProfilesData, ProfileWrapper, ProfileResponse }
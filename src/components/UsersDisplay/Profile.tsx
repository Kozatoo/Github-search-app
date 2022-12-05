import React from 'react';
import styled from 'styled-components';
import { IProfile } from '../../models/IProfile';
import { useNavigate } from 'react-router-dom';
/**
 * The name speaks for itself
 * @param repository it's an object containing every details passed from users List list 
 * @returns a fully rendered User profile
 */
const Profile = ({profile} : {profile : IProfile}) => {
    let navigate = useNavigate();
    const  getUSerProfile = () => {
        console.log("test")
        navigate(`/user/${profile.login}`);
      }
  return  <Wrapper>
            <Image src={profile.avatarUrl ?? "https://avatars.githubusercontent.com/u/80064114?v=4"} onClick={getUSerProfile}></Image>
            <UserDetails>
                <MainDetails>
                    <h1 onClick={getUSerProfile}>{profile.login}</h1>
                    <h3>{profile.bio}</h3>
                </MainDetails>
                <UserStats>
                    <div className="repos">
                        <h3>{profile.repositories?.totalCount}</h3>
                        <h5>Repositories</h5>
                        <img src="/repos.svg" alt="" />
                    </div>
                    <div className="followers">
                        <h3>{profile.followers?.totalCount}</h3>
                        <h5>Followers</h5>
                        <img src="/followers.svg" alt="" />
                    </div>
                    <div className="following">
                        <h3>{profile.following?.totalCount}</h3>
                        <h5>Following</h5>
                        <img src="/following.svg" alt="" />
                    </div>
                    <div className="stars">
                        <h3>{profile?.starredRepositories?.totalCount}</h3>
                        <h5>Stars</h5>
                        <img src="/star.svg" alt="" />
                    </div>

                </UserStats>
            </UserDetails>
          </Wrapper>; 
};
const Wrapper = styled.div `
    min-height:100px;
    padding:2% 5%;
    border-bottom: solid black 1px;
    display: flex;
    justify-content: space-between;
    flex-direction: horizontal;
`
const Image = styled.img`
    border-radius :50%;
    object-fit:contain;
    margin:auto;
    width:30%;
    height: max-content;
    cursor:pointer;
`
const UserDetails = styled.div`
    width:68%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    h1{
        margin-top:0;
        font-size:3em;
    }
`
const MainDetails = styled.div`
    h1{
        cursor:pointer;
    }
`
const UserStats = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    div{
        margin-left:auto;
        margin-right:0;
        display: flex;
        flex-direction: column;
    }
    div *{
        margin:0;
        text-align:right;
    }
    div h3{
        font-size:1.5em;
    }
    div h5{
        font-size: 1em;
    }
    div img{
        min-height:60px;
    }
`
export default Profile;
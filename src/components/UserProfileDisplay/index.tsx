import React , { useState } from "react";
import { useParams } from "react-router-dom";
import { IProfile, ProfilesData } from "src/models/IProfile";
import styled from "styled-components";
import Profile from '../UsersDisplay/Profile';
import Warning from '../Warning';
import { getUserDetails } from './../../../src/queries/GetUserDetails';
import { useEffect } from 'react';
import RepositoryList from "@components/RepositoriesDisplay/RepositoryList";

/**
 * This component is responsible for rendering the user profile 
 * @returns The whole user profile with his list of repositories
 */
const UserProfileDisplay = () => {
  
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [userDetails, setUserDetails] = useState< IProfile|null>(null); 
  let {userLogin} = useParams();
  if(!userLogin)
    userLogin="";
  async function getData(userLogin: string): Promise<void> {
    setIsLoading(true);
    try {
      const response = await getUserDetails(userLogin);
      if (!response){
        setErrorMessage("Error happened here");
      }
      setUserDetails(response.user);
    } catch (e) {
      setErrorMessage("Exception happened while loading data");
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(()=>{
    getData(userLogin ?? "");
  },[userLogin])
  return (
    <Wrapper>
      {isLoading ? 
        <Warning message='Loading ...' ></Warning>: 
          (errorMessage || !userDetails ?
            <Warning message="There was a problem, please retry later!"></Warning> :
            (
            <>
              <Profile profile={userDetails}></Profile>
              <RepositoryList repositories={userDetails.repositories}></RepositoryList>
            </>
            )
          )
      }
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: auto;
  margin-top: 20px;
  width: 45%;
`;
export default UserProfileDisplay;

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
  const [filterText, setFilterText] = useState<string> ("");
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
              <FilterBar>
              <input placeholder="Find a repository" value ={filterText} onChange={(e)=>setFilterText(e.target.value)}></input>

              </FilterBar>
              <RepositoryList repositories={userDetails.repositories} filter={filterText}></RepositoryList>
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
const FilterBar = styled.div`
 position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  height: 0.7rem;
  padding: 2rem;
  border-radius: 1rem;
  background-color: white;
  input{

    font-size: 22px;
    line-height: 1;
    background-color: transparent;
    width: 100%;
    margin-left: "1rem";
    border: none;
    &:focus{
      outline: none;
    }
  }
`
export default UserProfileDisplay;

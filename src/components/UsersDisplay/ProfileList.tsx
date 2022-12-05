import React, {useState} from 'react';
import styled from 'styled-components';
import { ProfilesData, ProfileWrapper } from 'src/models/IProfile';
import { useParams } from 'react-router-dom';
import { getProfiles } from './../../../src/queries/GetProfiles';
import Warning from '../Warning';
import Profile from './Profile';
import HomeBtn from '@components/HomeButton';
/**
 * This is the main component rendering the list of repositories. It's basically calling the Repository component with different variables to render them and then render the final list 
 * @param repositories - Its the list of repositories passed by the index
 * @returns the repositories' list rendered
 */
const ProfilesList = () => {
  
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lastSearch,setLastSearch] = useState<string | null>(null);
  const [profilesList,setProfilesList] = useState<ProfilesData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  let {searchKey} = useParams();
  if(!searchKey)
    searchKey="";
  async function getData(searchText: string): Promise<void> {
    setIsLoading(true);
    setLastSearch(searchText);
    try {
      const response = await getProfiles(searchText);
      if (!response){
        setErrorMessage("Error happened here");
      }
      setProfilesList(response.search);
    } catch (e) {
      setErrorMessage("Exception happened while loading data");
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }
  if(lastSearch==null || lastSearch != searchKey)
    getData(searchKey);
  return  <Wrapper>
            {isLoading ? 
              <Warning message='Loading ...' ></Warning>: 
              (errorMessage || !profilesList ?
                <Warning message="There was a problem, please retry later!"></Warning> :
                (profilesList.userCount >0 ?
                  profilesList?.edges.filter(edge => Object.keys(edge.node).length !== 0 ).map((element: ProfileWrapper, index: number)=> 
                  <Profile profile={element.node} key={index}  ></Profile>):
                  (
                    <div>
                      <Warning message="No User found"></Warning>
                      <HomeBtn></HomeBtn>
                    </div>
                  )
                )
              )
            }
          </Wrapper>;
};
const Wrapper = styled.div `
    width: 100%;
    margin-top: 20px;
    background-color: white;
    border-radius:0 0 1em 1em;
    margin-bottom: 50px;
`
export default ProfilesList;
import React , { useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import RepositoryList from "./RepositoryList";
import Warning from "./../Warning";
import Tips from "./Tips";
import { RepositoriesData } from "../../models/IRepository";
import { getRepos } from "../../queries/GetRepositories";

/**
 * This component is responsible for rendering the main page 
 * @returns The whole main page
 */
const RepositoriesDisplay = () => {
  const [repositoryList, setRepositoryList] = useState<RepositoriesData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  /**
   * this function is used to make the api call and change the components based on its response
   * @param searchText - the text written in the search bar to be searched
   */
  async function getData(searchText: string): Promise<void> {
    try {
      setIsLoading(true);
      const response = await getRepos(searchText);
      if (!response){
        setErrorMessage("Error happened here");
      }
      setRepositoryList(response.search);

    } catch (e) {
      setErrorMessage("Exception happened while loading data");
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Wrapper>
      <SearchBar getData={getData}></SearchBar>
        {repositoryList &&  !isLoading ? 
          (isLoading ? 
            <Warning message="Loading ..."></Warning>:
            (errorMessage?
              <Warning message="There was a problem, please retry later!"></Warning>:
              (repositoryList.repositoryCount>0?
                <RepositoryList repositories={repositoryList} filter=""></RepositoryList> :
                <Warning message="No repositories were found"></Warning>  
                )
              )
          ):
            (isLoading ? 
              <Warning message="Loading ..."></Warning>:
              <Tips></Tips>
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
export default RepositoriesDisplay;

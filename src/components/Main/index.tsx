import React , { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import RepositoryList from "./RepositoryList";
import Loading from "./Loading";
import ErrorMessage from "./ErrorMessage";
import Tips from "./Tips";
import { RepositoriesData } from "../../models/IRepository";
import { mockData } from "../../Mock/queryResultExample";
import { getRepos } from "../../queries/GetRepositories";
import NoRepository from "./NoRepositories";

const Main = () => {
  const [repositoryList, setRepositoryList] = useState<RepositoriesData | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  async function getData(searchText: string): Promise<void> {
    try {
      setIsLoading(true);
      const response = await getRepos(searchText, 10);
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
        {!repositoryList ? 
          <Tips></Tips>:
          (isLoading ? 
            <Loading></Loading>:
            (errorMessage?
              <ErrorMessage></ErrorMessage>:
              (repositoryList.repositoryCount>0?
                <RepositoryList repositories={repositoryList}></RepositoryList> :
                <NoRepository></NoRepository>  
                )
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
export default Main;

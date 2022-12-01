
import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import RepositoryList from './RepositoryList';
import NoRepository from './NoRepositories';
import Tips from './Tips';
import {mockData} from '../../Mock/queryResultExample';
const Main = () => {
  const [search, setSearch] = useState(()=>mockData.data.search);
    return (
      <Wrapper>
        <SearchBar></SearchBar>
        {search ? (search.repositoryCount>0 ? <RepositoryList repositories= {search.edges}></RepositoryList> : <NoRepository></NoRepository>) : <Tips></Tips> }
      </Wrapper>
    );
  };
const Wrapper = styled.div`
  margin: auto;
  margin-top: 20px;
  width: 45%;
`
export default Main ;

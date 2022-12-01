
import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import RepositoryList from './RepositoryList';
const Main = () => {
    return (
      <Wrapper>
        <SearchBar></SearchBar>
        <RepositoryList></RepositoryList>
      </Wrapper>
    );
  };
const Wrapper = styled.div`
  margin: auto;
  margin-top: 20px;
  width: 45%;
`
export default Main ;

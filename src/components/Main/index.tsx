
import SearchBar from './SearchBar';
import styled from 'styled-components';
import React from 'react';
const Main = () => {
    return (
      <Wrapper>
        <SearchBar></SearchBar>
      </Wrapper>
    );
  };
const Wrapper = styled.div`
    margin-top: 20px;
`
export default Main ;

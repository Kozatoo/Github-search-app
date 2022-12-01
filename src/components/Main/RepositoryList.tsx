import React from 'react';
import styled from 'styled-components';
import Repository from './Repository';

const RepositoryList = () => {
  return  <Wrapper>
            <Repository></Repository>
            <Repository></Repository>
            <Repository></Repository>
          </Wrapper>;
};
const Wrapper = styled.div `
    width: 100%;
    margin-top: 20px;
    background-color: white;
    border-radius:0 0 1em 1em;
`
export default RepositoryList;
import React from 'react';
import styled from 'styled-components';
import { RepositoriesData, RepositoryWrapper } from 'src/models/IRepository';
import Profile from './Profile';
/**
 * This is the main component rendering the list of repositories. It's basically calling the Repository component with different variables to render them and then render the final list 
 * @param repositories - Its the list of repositories passed by the index
 * @returns the repositories' list rendered
 */
const RepositoryList = ({repositories} :{ repositories : RepositoriesData | null}) => {
  return  <Wrapper>
            {repositories?.edges.map((element: RepositoryWrapper, index: number)=> <Profile profile={element.node} key={index}  ></Profile>
            )}
          </Wrapper>;
};
const Wrapper = styled.div `
    width: 100%;
    margin-top: 20px;
    background-color: white;
    border-radius:0 0 1em 1em;
`
export default RepositoryList;
import React from 'react';
import styled from 'styled-components';
import Repository from './Repository';
import { RepositoriesData, RepositoryWrapper } from 'src/models/IRepository';
/**
 * This is the main component rendering the list of repositories. It's basically calling the Repository component with different variables to render them and then render the final list 
 * @param repositories - Its the list of repositories passed by the index
 * @returns the repositories' list rendered
 */
const RepositoryList = ({repositories, filter} :{ repositories : RepositoriesData | null, filter:string}) => {
  return  <Wrapper>
            {repositories?.edges.filter(element=>filter == "" || element.node?.name?.toLowerCase().includes(filter.trim().toLowerCase())).map((element: RepositoryWrapper, index: number)=> <Repository repository={element.node} key={index}  ></Repository>
            )}
          </Wrapper>;
};
const Wrapper = styled.div `
    width: 100%;
    margin-top: 20px;
    background-color: white;
    border-radius:0 0 1em 1em;
    margin-bottom: 50px;
`
export default RepositoryList;
import React from 'react';
import styled from 'styled-components';
import Repository from './Repository';
import {Props} from '../../models/repositories'
import { IRepository, RepositoryWrapper } from 'src/models/IRepository';
const RepositoryList : React.FC<Props>= ({repositories}) => {
  return  <Wrapper>
            {repositories.map((element: RepositoryWrapper, index: number)=> <Repository repository={element.node} key={index}  ></Repository>
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
import React , { useState } from "react";
import styled from "styled-components";
import { RepositoriesData } from "../../models/IRepository";
import { getRepos } from "../../queries/GetRepositories";

/**
 * This component is responsible for rendering the page listing the users lists 
 * @returns The whole users list page
 */
const UsersDisplay = () => {
  
    return (
    <Wrapper>
      <h1>UsersDisplay</h1>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: auto;
  margin-top: 20px;
  width: 45%;
`;
export default UsersDisplay;

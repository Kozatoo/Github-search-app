import React , { useState } from "react";
import styled from "styled-components";

/**
 * This component is responsible for rendering the user profile 
 * @returns The whole user profile with his list of repositories
 */
const UserProfileDisplay = () => {
  return (
    <Wrapper>
     <h1>User Profile</h1>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: auto;
  margin-top: 20px;
  width: 45%;
`;
export default UserProfileDisplay;

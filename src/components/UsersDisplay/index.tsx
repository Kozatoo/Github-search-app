import React , { useState } from "react";
import styled from "styled-components";
import ProfilesList from './ProfileList';
import { ProfilesData } from 'src/models/IProfile';
import { getProfiles } from "src/queries/GetProfiles";
/**
 * This component is responsible for rendering the page listing the users lists 
 * @returns The whole users list page
 */
const UsersDisplay = () => {

    return (
    <Wrapper>
      <ProfilesList></ProfilesList>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  margin: auto;
  margin-top: 20px;
  width: 45%;
`;
export default UsersDisplay;

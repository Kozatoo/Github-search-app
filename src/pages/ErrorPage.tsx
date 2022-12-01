import React from "react";
import {  Error, Header } from '../components';
import styled from "styled-components";
const ErrorPage = () => {
    return (
      <Wrapper>
        <Header></Header>
        <Error></Error>
      </Wrapper>
    );
  };
  
const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #F8F8F8;
`
  export default ErrorPage;
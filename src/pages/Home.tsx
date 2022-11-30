import React from "react";
import { Info, User, Header,Main } from '../components';
import styled from "styled-components";
const Home = () => {
    return (
      <Wrapper>
        <Header></Header>
        <Main></Main>
        <Info></Info>
        <User></User>
      </Wrapper>
    );
  };
  
const Wrapper = styled.div`
  min-height: 100vh;
  background-color: #F8F8F8;
`
  export default Home;
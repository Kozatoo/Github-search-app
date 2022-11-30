import React from "react";
import { Info, User, Search, Header } from '../components';
import styled from "styled-components";
const Home = () => {
    return (
      <Wrapper>
        <Header></Header>
        <Search></Search>
        <Info></Info>
        <User></User>
      </Wrapper>
    );
  };
  
const Wrapper = styled.div`
  min-height: 100vw;
  background-color: #F8F8F8;
`
  export default Home;
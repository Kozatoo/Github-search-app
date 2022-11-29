import React from "react";
import { Info, User, Search, Navbar, Header } from '../components';
import styled from "styled-components";
const Home = () => {
    return (
      <Wrapper>
        <Header></Header>
        <Navbar></Navbar>
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
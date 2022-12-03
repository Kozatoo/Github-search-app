import React from "react";
import { Header, RepositoriesDisplay, Footer } from '../components';
import styled from "styled-components";
const Home = () => {
    return (
      <Wrapper>
        <Header></Header>
        <RepositoriesDisplay></RepositoriesDisplay>
        <Footer></Footer>
      </Wrapper>
    );
  };
  
const Wrapper = styled.div`
  min-height: 100vh;
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  flex: 1 auto 1;
  background-color: #F8F8F8;
`
  export default Home;
import React from 'react';
import styled from 'styled-components';
const Repository = () => {
  return  <Wrapper>
            <MainInformation>
                <h1><a href="#">UserName/RepoName</a></h1>
                <p>this is some cool project made by the best dev in the world</p>    
            </MainInformation>
            <DetailedInformation>
                <h1 className="stars">30 <img src="/star.svg"></img></h1>
                <div className="forks">48<img src="/fork.svg"></img></div>
                <div className="main-language">Typescript</div>
                <div className="lastUpdate">Updated 48s ago</div>
            </DetailedInformation>
          </Wrapper>;
};
const Wrapper = styled.div `
    min-height:100px;
    padding:2% 5%;
    border-bottom: solid black 1px;
    display: flex;
    justify-content: space-between;
    flex-direction: horizontal;
`
const MainInformation = styled.div`
    width: 65%;
    a{
        color: black;
        text-decoration: none;
    }

`
const DetailedInformation = styled.div `
    width: 25%;
    text-align: right;
`
export default Repository;
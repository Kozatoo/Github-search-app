import React from 'react';
import styled from 'styled-components';
import { IRepository } from '../../models/IRepository';
/**
 * The name speaks for itself
 * @param repository it's an object containing every details passed from repositories list 
 * @returns a fully rendered repository
 */
const Repository = ({repository} : {repository : IRepository}) => {
  return  <Wrapper>
            <MainInformation>
                <h1><a href={repository.url}>{repository.nameWithOwner}</a></h1>
                <p>{repository.description}</p>    
            </MainInformation>
            <DetailedInformation>
                <h1 className="stars">{repository?.stargazers?.totalCount} <img src="/star.svg"></img></h1>
                <div className="forks">{repository?.forkCount} <img src="/fork.svg"></img></div>
                <div className="main-language" color="#f1F1F1" >{repository?.primaryLanguage?.name}</div>
                <div className="lastUpdate">{ repository?.updatedAt}</div>
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
    a:hover{
        cursor: pointer;
    }

`
const DetailedInformation = styled.div`
    width: 25%;
    text-align: right;
    .stars>img{
        width:1.5rem;
    }
    .main-language{
        color: ${props => props.color ? props.color : "black"};
    }
    .forks{
        font-size:20px
    }
    .forks>img{
        margin-top:auto;
        width:0.7rem;
    }
`
export default Repository;
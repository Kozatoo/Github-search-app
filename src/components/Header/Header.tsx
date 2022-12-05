import React from "react";
import Search from "./UserSearch";
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Header = () =>{
    let navigate = useNavigate();
    const goHome = ()=>{
        let path = `/`; 
        navigate(path);
    }
    const  searchUsers = (usersQuery: string) => {
        navigate(`/users/${usersQuery}`);
      }
    return <Wrapper>
        <h1 onClick={goHome}>Github Repos Search</h1>
        <Search searchUsers={searchUsers}></Search>
    </Wrapper>
}
const Wrapper = styled.section`
    width:100%;
    height: 120px;
    display: flex;
    flex-direction: horizontal;
    justify-content: space-between;
    background-color: white;
    h1{
        text-align: center;
        margin: auto 1rem;
        font-size:40px;
        cursor:pointer;
    }
`
export default Header;
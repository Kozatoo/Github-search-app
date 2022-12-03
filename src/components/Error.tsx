import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import HomeBtn from "./HomeButton";
const Error = () =>{
    let navigate = useNavigate(); 
    /**
     * A function used to change the root page to return to the home page
     */
    const routeChange = () =>{ 
        let path = `/`; 
        navigate(path);
    }
    return <Wrapper>
        <h1>Sorry, the requested page is no where to be found!</h1>
        <p className="statusCode">404</p>
        <HomeBtn></HomeBtn>
    </Wrapper>
}
const Wrapper = styled.section`
    width:100%;
    height: auto;  
    margin-top:50px;
    margin-bottom: 50px;
    text-align: center;
    h1{
        margin: auto 1rem;
        font-size:40px;
    }
    .statusCode{
        margin: 0;
        font-size: 200px;
    }
`


export default Error;
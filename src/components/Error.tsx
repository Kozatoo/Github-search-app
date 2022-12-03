import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
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
        <HomeButton><button  onClick={routeChange}>Go back home</button></HomeButton>
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
const HomeButton = styled.div`
    margin:auto;    
    display: flex;
    justify-content:center;
    button{
        background-color: #eeeeee;
        border: none;
        outline: none;
        min-height: 50px;
        min-width:150px;
        font-size: 16px;
        border-radius: 0.4rem;    
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }

`
export default Error;
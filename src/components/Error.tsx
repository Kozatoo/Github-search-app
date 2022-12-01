import React from "react";
import styled from "styled-components";

const Error = () =>{
    return <Wrapper>
        <h1>Sorry, the requested page is not found!</h1>
        <p className="statusCode">404</p>
        <HomeButton><button>Go back home</button></HomeButton>
    </Wrapper>
}
const Wrapper = styled.section`
    width:100%;
    height: 120px;  
    margin-top:50px;
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
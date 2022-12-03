import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"
const HomeBtn = () =>{
    let navigate = useNavigate(); 
    /**
     * A function used to change the root page to return to the home page
     */
    const routeChange = () =>{ 
        let path = `/`; 
        navigate(path);
    }
    return  <HomeButton><button  onClick={routeChange}>Go back home</button></HomeButton>
        
}
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
export default HomeBtn;
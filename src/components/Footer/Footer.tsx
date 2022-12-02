import styled from "styled-components";
import React from "react";
const Footer = () =>{
    return <Wrapper>
        <h1>Made with Love by Mohamed Aziz Bouaouina</h1>
    </Wrapper>
}
const Wrapper = styled.footer`
    width:auto;
    background-color: #EEEEEE;
    display:flex;
    justify-content:end;
    padding : 0 3%;
    h1{
        font-size: 20px;
    }
`
export default Footer;
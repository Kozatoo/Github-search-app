import React from 'react';
import styled from 'styled-components';
const SearchBar = () => {
  return  <Form>
            <Icon> <Img src="/search-icon.svg" alt="" /> </Icon> 
            <Input placeholder="Search Github repositories"></Input>
            <Button>Search</Button>
            
          </Form>;
};

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  width: 45%;
  height: 0.7rem;
  padding: 2rem;
  margin: auto;
  border-radius: 1rem;
  background-color: white;
`;
const Input = styled.input`
  font-size: 22px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: "1rem";
  border: none;
  &:focus{
    outline: none;
  }
` 
const Button = styled.button`
    background-color: #eeeeee;
    border: none;
    outline: none;
    min-height: 40px;
    min-width:100px;
    font-size: 16px;
    border-radius: 0.4rem;    
`
const Img = styled.img`
  line-height: 1;
  width:1.5rem;
`
const Icon = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`
export default SearchBar;

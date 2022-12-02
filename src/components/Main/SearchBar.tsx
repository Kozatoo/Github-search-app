import React, { useState } from 'react';
import styled from 'styled-components';

/**
 * the main search bar component
 * @param getData the function to be called when inserting the data 
 * @returns 
 */
const SearchBar = ({ getData } : { getData: (value: string) => void } ) => {
  const [searchText,setSearchText] = useState<string>("");
  function searchRepos() {
    if(!searchText || !searchText.trim())
        return;

     getData(searchText);   
  }

  /**
   * this function is used to handle the form submit 
   * @param e - event passed by triggers
   */
  function handleSubmit (e :  React.FormEvent<HTMLFormElement> |  React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault();
    searchRepos();
  }
  return  <Form onSubmit={(e)=>handleSubmit(e)}>
            <Icon> <Img src="/search-icon.svg" alt="" /> </Icon> 
            <Input placeholder="Search Github repositories" value ={searchText} onChange={(e)=>setSearchText(e.target.value)}></Input>
            <Button onClick={(e)=>handleSubmit(e)}>Search</Button>
          </Form>;
};

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  height: 0.7rem;
  padding: 2rem;
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

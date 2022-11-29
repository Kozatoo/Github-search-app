import React from 'react';
import styled from 'styled-components';
const UserSearch = () => {
  return  <Form>
            <Input placeholder="Search Users"></Input>
            <Button> <Img src="/search-icon.svg" alt="" /> </Button> 
          </Form>;
};

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 13rem;
  height: 0.7rem;
  padding: 2rem;
  margin: auto 3rem;
  border-radius: 1rem;
`;
const Input = styled.input`
  font-size: 20px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: "1rem";
  border: none;
  &:focus{
    outline: none;
  }
` 
const Img = styled.img`
  line-height: 1;
  width:1.5rem;
`
const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`
export default UserSearch;

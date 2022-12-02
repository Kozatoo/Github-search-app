import React from 'react';
import styled from 'styled-components';
const Warning= ({message}:{message: string }) => {
  return (  
    <WarningDiv>
        <h1>{message}</h1>
    </WarningDiv>
  )
};
const WarningDiv = styled.div`
    h1{
    margin: auto 1rem;
    font-size:40px;
}
`
export default Warning;
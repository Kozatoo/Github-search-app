import React from 'react';
import styled from 'styled-components';
const Tips= () => {
  return (  
  <TipsBox>

    <h1>Some tips</h1>
    <div className="tips"></div>
  </TipsBox>
  )
};
const TipsBox  =styled.div`
  width:100%;
`
export default Tips;
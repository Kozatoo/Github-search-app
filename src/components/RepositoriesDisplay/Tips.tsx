import React from 'react';
import styled from 'styled-components';
const Tips= () => {
  return (  
  <TipsBox>

    <h1>Some tips</h1>
    <div className="tips">
      <h2>Use these words to further customize your search:</h2>
      <div className="tip">
        <h3>stars:     followed by &lt; or &gt; and a number indicates the number of stars to filter by </h3>
        <p><strong>Example: </strong> <em>Tests stars:&#60;	 100</em> searches for repositories containing Tests keyword with less than 100stars</p>
      </div>
      
      <div className="tip">
        <h3>user:     followed by a word would only get repositories from this user </h3>
        <p><strong>Example: </strong> <em>Tests user:Kozatoo</em> searches for repositories containing Tests keyword owned by the user Kozatoo</p>
      </div>
      
      <div className="tip">
        <h3>pushed:     followed by &lt; or &gt; and a date indicates the repositories pushed to since or from that date </h3>
        <p><strong>Example: </strong> <em>Tests pushed:&gt; 2013-01-28</em> searches for Pugs repositories pushed to since Jan 28, 2013.</p>
      </div>
      
      <div className="tip">
        <h3>size:     followed by "number1..number2" indicates the repositories with size between the two values(in kiloBytes) </h3>
        <p><strong>Example: </strong> <em>Tests stars:&60; 100</em> searches for repos containing Tests keyword with less than 100stars</p>
      </div>
    </div>
  </TipsBox>
  )
};
const TipsBox  =styled.div`
  width:100%;
  margin-bottom: 20px;
  .tips{
    background-color: white;
    border-radius: 5px;
    padding: 5%;
  }

`
export default Tips;
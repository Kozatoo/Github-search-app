import React from "react";
import { Info, User, Search } from '../components';

const Dashboard = () => {
    return (
      <div>
        <h1> Dashboard page</h1>
        <Search></Search>
        <Info></Info>
        <User></User>
      </div>
    );
  };
  
  export default Dashboard;
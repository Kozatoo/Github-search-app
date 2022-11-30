import React from "react";
import { Info, User, Search } from '../components';

const Dashboard = () => {
    return (
      <main>
        <h1> Dashboard page</h1>
        <Search></Search>
        <Info></Info>
        <User></User>
      </main>
    );
  };
  
  export default Dashboard;
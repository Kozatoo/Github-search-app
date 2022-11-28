import React from "react";
import { Info, User, Search, Navbar } from '../components';

const Dashboard = () => {
    return (
      <main>
        <h1> Dashboard page</h1>
        <Navbar></Navbar>
        <Search></Search>
        <Info></Info>
        <User></User>
      </main>
    );
  };
  
  export default Dashboard;
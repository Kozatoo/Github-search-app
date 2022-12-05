import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  Home, ErrorPage, UsersPage, UserProfile } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/users/:searchKey' element={<UsersPage></UsersPage>}></Route>
          <Route path='/user/:userLogin' element={<UserProfile></UserProfile>}></Route>
          <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

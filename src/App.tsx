import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  Login, Home } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

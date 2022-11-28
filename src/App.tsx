import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Dashboard, Login } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Dashboard></Dashboard>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Home from './components/Home';

function App() {
  return (<div>
     <BrowserRouter>
      < Routes>
        <Route path="/" exact element={<LoginPage/>} />
        <Route path="/signup" element={<RegisterPage/>} />
        <Route path="/homepage" element={<Home/>} />
      </ Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

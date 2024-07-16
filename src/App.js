import React from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage';
import CreatePost from './components/CreatePost';
import ProgressWork from './components/ProgressWork';

function App() {
  return (<div>
     <BrowserRouter>
      < Routes>
        <Route path="/" exact element={<div>
          <Header/>
          <Home/>
          <Footer/>
          </div>} />
        <Route path="/profilepage" element={<div>
          <Header/>
          <ProfilePage/>
          <Footer/>
          </div>} />
        <Route path="/createpost" element={<div>
          <Header/>
          <CreatePost/>
          <Footer/>
          </div>} />
        <Route path='/workinprogress' element={<div>
          <Header/>
          <ProgressWork/>
          <Footer/>
          </div>} />
        <Route path="/signup" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage/>} />
      </ Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

import React from 'react';

import { Route , Routes } from 'react-router-dom';

import UserDetail from './components/UserDetail/UserDetail';

import UserPage from './components/UserPage/UserPage';

import Header from './components/Header/Header';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<UserPage></UserPage>}></Route>
        <Route exact path="/home" element={<UserPage></UserPage>}></Route>
        <Route path="/user/:id" element={<UserDetail></UserDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;

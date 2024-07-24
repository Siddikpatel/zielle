import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './layouts/Navbar';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './layouts/HomePage';
import { Footer } from './layouts/Footer';

export const App = () => {


  return (
    <div>
      <Navbar/>
      <div className={`main`}>
        <Routes>

          <Route path='/' element={<HomePage/>}/>
          <Route path='/home' element={<HomePage/>}/>

        </Routes>
      </div>
      <Footer/>
    </div>
  );


}
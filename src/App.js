import './App.css';
import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Create from './components/create';
import Design from './components/design';
import Home from './components/home';
import LandingPage from './components/landingpage';
import AboutUs from './components/aboutus';
import Settings from './components/settings';
import PageNotFound from './components/pagenotfound';
import RoutesDeclared from './components/routesDeclared';


function App() {

  return (
    <div>
      <RoutesDeclared />
    </div>
  );
}

export default App;

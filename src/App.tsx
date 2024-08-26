import React from 'react';
import './App.css';
import RoutesDeclared from './components/routesDeclared';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <RoutesDeclared />
    </BrowserRouter>
  );
}

export default App;

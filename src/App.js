import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import styled from 'styled-components';
import Home from './pages/Home';
import { handleRightClick } from './AppUtility.js';

function App() {
  document.addEventListener('contextmenu', handleRightClick);
  return (
    <Router>
        <Home/>
    </Router>
  );
}

export default App;

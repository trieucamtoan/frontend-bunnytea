import React, {useState} from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import styled from 'styled-components';
import Home from './pages/Home'

function App() {
  
  return (
    <Router>
        <Home/>
    </Router>
  );
}

export default App;

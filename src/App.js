import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import styled from 'styled-components';
import Home from './pages/Home';
import { handleRightClick } from './AppUtility.js';
import {
  topDrinks, 
  freshFruitDrinks,
  milkTea,
  freshMilkDrinks,
  teaSlushy,
  smoothies,
  coffee
}  from '../src/components/DrinksSection/data';
import ScrollToTop from '../src/components/ScrollToTop.js'
import ViewingItem from './pages/ViewingItem';

function App() {
  // document.addEventListener('contextmenu', handleRightClick);
  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/drinks/:id" component={ViewingItem}/>
      </Switch>
    </Router>
  );
}

export default App;

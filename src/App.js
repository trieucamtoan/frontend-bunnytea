import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import ScrollToTop from '../src/components/ScrollToTop.js'
import ViewingItem from './pages/ViewingItem';

function App() {
  // document.addEventListener('contextmenu', handleRightClick);
  return (
    <Router>
      <ScrollToTop/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/drinks/:path" component={ViewingItem}/>
      </Switch>
    </Router>
  );
}

export default App;

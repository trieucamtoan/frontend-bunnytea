import React,{useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import ScrollToTop from '../src/components/ScrollToTop.js'
import ViewingItem from './pages/ViewingItem';
import ReactGa from 'react-ga';
function App() {

  useEffect(() => {
    ReactGa.initialize('G-64E8LDHVY2');

    //to report page view
    ReactGa.pageview('/');
  }, [])

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

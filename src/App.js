import React,{useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom'
import Home from './pages/Home';
import ScrollToTop from '../src/components/ScrollToTop.js'
import ViewingItem from './pages/ViewingItem';
import ReactGa from 'react-ga';

ReactGa.initialize('UA-200273670-1');

function App() {

  useEffect(() => {
    //to report page view
    ReactGa.pageview(window.location.pathname + window.location.search);
  },[])

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

export default withRouter(App);

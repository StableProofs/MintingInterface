import React from 'react';
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import './App.css';

import LandingView from './views/LandingView/LandingView.jsx';
import BurnView from './views/BurnView/BurnView.jsx'

function App() {
  const hist = createBrowserHistory();
  return (
    <div className="app-container">
      <Router history={hist}>
        <Switch>
          <Route exact path="/" render={(props) => <LandingView {...props} />} />
          <Route path="/burn" render={(props) => <BurnView {...props} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

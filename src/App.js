import React from 'react';
import './App.css';
import Home from './pages/Home.js';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

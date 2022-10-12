import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import TestList from './Components/TestList/TestList';
import LabList from './Components/LabList/LabList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/lablist">
            <LabList />
          </Route>
          <Route path="/testlist">
            <TestList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

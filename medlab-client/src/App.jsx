import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import TestList from './Components/TestList/TestList';
import LabList from './Components/LabList/LabList';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Cart from './Components/Cart/Cart';
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
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
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

import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Calendar from "./components/viewComponents/Calendar";
import Day from "./components/viewComponents/Day";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <div>
        <h1>Smile Dental Clinic</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/calendar">Calendar view</Link>
            </li>
            <li>
              <Link to="/day">Day view</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Switch>
            <Route path="/menu">
              <Menu />
            </Route>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route path="/day">
              <Day />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;

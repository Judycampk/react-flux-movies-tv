import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home"
import Demo from "./views/Demo"
import Details from "./views/Details"
import CardMovies from "./components/CardMovies";



function App() {

  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/demo">
            <Demo/>
          </Route>
          <Route exact path="/Movies">
            <CardMovies/>
          </Route>
          <Route exact path="/demo/:id">
            <Details/>
          </Route>
          <Route to="*">
            <h2>Not found - 404</h2>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;

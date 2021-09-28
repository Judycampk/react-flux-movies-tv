import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home"
import Movies from "./views/Movies";
import Shows from "./views/Shows";
import People from "./views/People";
import MoviesDetails from "./views/MoviesDetails";
import TvDetails from "./views/TvDetails";
import PeopleDetails from "./views/PeopleDetails";



function App() {

  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/movies">
            <Movies/>
          </Route>
          <Route exact path="/movies/:id">
            <MoviesDetails/>
          </Route>
          <Route exact path="/shows">
            <Shows/>
          </Route>
          <Route exact path="/shows/:id">
            <TvDetails/>
          </Route>
          <Route exact path="/people">
            <People/>
          </Route>
          <Route exact path="/people/:id">
            <PeopleDetails/>
          </Route>
          <Route to="*">
            <h2>Not found - 404</h2>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;

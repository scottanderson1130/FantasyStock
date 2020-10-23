import React from 'react';
import './css/App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScoreBoard from "./views/ScoreBoard.jsx";
import YourStocks from "./views/YourStocks.jsx";
import Waivers from "./views/Waivers.jsx";
import Home from "./views/Home.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/scoreboard" component={ScoreBoard} />
          <Route path="/yourstocks" component={YourStocks} />
          <Route path="/waivers" component={Waivers} />
        </Switch>
      </div>
    </Router>
  )
}

export default App

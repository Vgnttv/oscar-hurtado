import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import LandingPage from "./components/LandingPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <main className="main">
            <Route exact path="/" component={LandingPage} />
            {/* <Route exact path="/jokes" component={LandingPage} />
            <Route exact path="/randomjokes" component={RandomLandingPage} /> */}
          </main>
        </div>
      </Router>
    );
  }
}
export default App;

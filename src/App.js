import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";
import { Header, LandingPage } from "./components";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <main className="main">
            <img
              src="oscar-hurtado.jpg"
              alt="Oscar Hurtado"
              className="image"
            />
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

import React, { Component } from "react";
import { Education } from "../Education";
import { WorkExperience } from "../WorkExperience";
// import { Header } from "../Header";

// import { Link } from "react-router-dom";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landingWrapper">
        {/* <Header /> */}
        <div className="name">Oscar Hurtado Martinez</div>
        <WorkExperience />
        <Education />
        {/* <Link to={`/jokes`}>
          <button> Wanna laugh?</button>
        </Link> */}
      </div>
    );
  }
}

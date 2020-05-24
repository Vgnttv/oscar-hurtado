import React, { Component } from "react";
import Education from "./Education";
import EmploymentHistory from "./EmploymentHistory";

// import { Link } from "react-router-dom";
import "./LandingPage.css";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="name">Oscar Hurtado Martinez</div>
        <EmploymentHistory />
        <Education />
        {/* <div className="Container">
          <div className="Title">Education</div>
          <div className="Topic">
            Master of Science in Management in Global Strategies and
            Sustainability
          </div>
          <div className="University">Nyenrode Business University</div>
          <div className="Location">Amsterdam, Netherlands</div>
          <div className="Date">August 2018 – February 2020</div>
          <div className="Topic">Bachelor’s in International Business, </div>
          <div className="University">
            Universidad Autonoma del Estado de Mexico
          </div>
          <div className="Location">Toluca, Mexico</div>
          <div className="Date">August 2011 – June 2016</div>
        </div> */}
        {/* <Link to={`/jokes`}>
          <button> Wanna laugh?</button>
        </Link> */}
      </div>
    );
  }
}

import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="headerWrapper">
        <Link className="headerTitle" to={`/about`}>
          <div>About</div>
        </Link>
        <Link className="headerTitle" to={`/education`}>
          <div>Education</div>
        </Link>
        <Link className="headerTitle" to={`/work`}>
          <div>Work Experience</div>
        </Link>
        <Link className="headerTitle" to={`/scholarships`}>
          <div>Scholarships</div>
        </Link>
      </div>
    );
  }
}

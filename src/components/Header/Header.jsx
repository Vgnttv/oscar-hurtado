import React from "react";
import { Link } from "react-router-dom";
import { educationElRef } from "../Education";
import "./Header.css";

export default function Header(props) {
  const FancyButton = React.forwardRef((props, ref) => (
    <div ref={ref} className="headerTitle">
      {props.children}
    </div>
  ));

  // You can now get a ref directly to the DOM button:
  // const ref = React.createRef();

  return (
    <div className="headerWrapper">
      <Link className="headerTitle" to={`/about`}>
        <div>About</div>
      </Link>
      {/* <Link className="headerTitle" to={`/education`}> */}
      <FancyButton ref={educationElRef}>Education</FancyButton>
      {/* <button className="headerTitle" onClick={scrollToRef(educationElRef)}>
        Education
      </button> */}
      {/* </Link> */}
      <Link className="headerTitle" to={`/work`}>
        <div>Work Experience</div>
      </Link>
      <Link className="headerTitle" to={`/scholarships`}>
        <div>Scholarships</div>
      </Link>
    </div>
  );
}

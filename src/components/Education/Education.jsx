import React from "react";
import { info } from "../../info";
import "./Education.css";

export const educationElRef = React.createRef();
export default function Education() {
  const { education } = info;

  return (
    <div className="Container">
      <div className="Title" ref={educationElRef}>
        Education
      </div>
      {education.map(edu => {
        const { topic, university, location, date } = edu;
        return (
          <>
            <div className="Topic">{topic}</div>
            <div className="University">{university}</div>
            <div className="Date">{date}</div>
            <div className="Location">{location}</div>
          </>
        );
      })}
    </div>
  );
}

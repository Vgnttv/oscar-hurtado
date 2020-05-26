import React from "react";
import { info } from "../../info";
import "./WorkExperience.css";

export default function WorkExperience() {
  const { jobs } = info;
  return (
    <div className="jobWrapper">
      <div className="sectionTitle">Work Experience</div>
      {jobs.map(job => {
        const { title, link, companyName, location, date, tasks } = job;
        return (
          <>
            <div className="jobTitle">
              {title}
              <a href={link} rel="noopener noreferrer" target="_blank">
                {companyName}
              </a>
            </div>
            <div className="jobDate">{date}</div>
            <div className="jobLocation">{location}</div>
            <>
              {tasks.map(task => {
                return (
                  <div className="task">
                    <span>{task}</span>
                  </div>
                );
              })}
            </>
          </>
        );
      })}
    </div>
  );
}

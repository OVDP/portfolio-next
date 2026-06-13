import React from "react";
import { Project } from "../project.types";

export default function project_content({ project }: { project: Project }) {
  return (
    <>
      <div>
        <span className="text-danger me-2">const</span>
        <span className="project-text-primary me-2">project</span>
        <span className="text-danger me-2">=</span>
        <span className="text-secondary">{"{"}</span>
      </div>
      <div className="ms-4 ms-lg-8">
        <span className="project-text-primary me-2">name:</span>
        <span className="text-warning">{`'`}</span>
        <span className="text-warning">{project.name}</span>
        <span className="text-secondary">{`',`}</span>
      </div>
      <div className="ms-4 ms-lg-8">
        <span className="project-text-primary">tools:</span>
        
        {project.tools.map((tag, i) => (
          <React.Fragment key={i}>
            <span className="text-secondary">{` ['`}</span>
            <span className="text-warning">{tag}</span>
            <span className="text-secondary">{`'],`}</span>
            
          </React.Fragment>
        ))}
        
      </div>
      <div className="ms-4 ms-lg-8">
        <span className="project-text-primary">startdate: </span>
        <span className="text-warning">{project.startdate}</span>
        <span className="text-secondary">,</span>
      </div>
      <div className="ms-4 ms-lg-8">
        <span className="project-text-primary">endate: </span>
        <span className="text-warning">{project.enddate}</span>
        <span className="text-secondary">,</span>
      </div>
      <div className="ms-4 ms-lg-8">
        <span className="project-text-primary">Description:</span>
        <span className="text-info">{" " + project.description}</span>
        <span className="text-secondary">,</span>
      </div>
      <div>
        <span className="text-secondary">{`};`}</span>
      </div>
    </>
  );
}

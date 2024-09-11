import React from "react";

export default function project_content({ project }) {
  return (
    <>
      <div>
        <span className="text-danger me-2">const</span>
        <span className="text-white me-2">project</span>
        <span className="text-danger me-2">=</span>
        <span className="text-secondary">{"{"}</span>
      </div>
      <div className="ms-4 ms-lg-8">
        <span className="text-white me-2">name:</span>
        <span className="text-warning">{`'`}</span>
        <span className="text-warning">{project.name}</span>
        <span className="text-secondary">{`',`}</span>
      </div>
      <div className="ms-4 ms-lg-8">
        <span className="text-white">tools:</span>
        <span className="text-secondary">{` ['`}</span>
        {project.tools.map((tag, i) => (
          <React.Fragment key={i}>
            <span className="text-warning">{tag}</span>
            {project.tools.length - 1 !== i && (
              <span className="text-secondary">{`', '`}</span>
            )}
          </React.Fragment>
        ))}
        <span className="text-secondary">{`],`}</span>
      </div>
      <div className="ms-4 ms-lg-8">
        <span className="text-white">myRole:</span>
        <span className="text-warning">{project.role}</span>
        <span className="text-secondary">,</span>
      </div>
      <div className="ms-4 ms-lg-8">
        <span className="text-white">Description:</span>
        <span className="text-info">{" " + project.description}</span>
        <span className="text-secondary">,</span>
      </div>
      <div>
        <span className="text-secondary">{`};`}</span>
      </div>
    </>
  );
}

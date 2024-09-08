import * as React from "react";

function ProjectCard({ project }) {
  return (
    <div className="bg-gradient border border-primary position-relative rounded w-100">
      <div className="d-flex flex-row">
        <div className="w-100 bg-gradient"></div>
        <div className="w-100 bg-gradient"></div>
      </div>
      <div className="px-4 px-lg-8 py-3 py-lg-5 position-relative">
        <div className="d-flex flex-row gap-1 gap-lg-2 position-absolute top-50 translate-middle-y">
          <div
            className="rounded-circle bg-danger"
            style={{ width: "0.75rem", height: "0.75rem" }}
          ></div>
          <div
            className="rounded-circle bg-warning"
            style={{ width: "0.75rem", height: "0.75rem" }}
          ></div>
          <div
            className="rounded-circle bg-success"
            style={{ width: "0.75rem", height: "0.75rem" }}
          ></div>
        </div>
        <p className="text-center ms-3 text-success fs-6 fs-lg-4">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-top border-2 border-primary px-4 px-lg-8 py-4 py-lg-8">
        <code className="font-monospace">
          <div className="blink">
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
        </code>
      </div>
    </div>
  );
}

export default ProjectCard;

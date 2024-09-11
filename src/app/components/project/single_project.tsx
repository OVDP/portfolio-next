"use client";
import * as React from "react";
import Content from "./content/project_content";
import LoadingContent from "./content/project_loading_content";
import "./button_anim.css";

function single_project({ project }) {
  const [viewMoreContent, setViewMoreContent] = React.useState("Read more");
  const [projectContent, setContent] = React.useState(
    <Content project={project} />
  );
  const [loadingDots, setLoadingDots] = React.useState(1);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setLoadingDots((prevDots) => (prevDots % 3) + 1);
    }, 500);

    return () => clearInterval(interval);
  }, []);
  React.useEffect(() => {
    if (viewMoreContent.startsWith("Loading")) {
      setViewMoreContent("Loading" + ".".repeat(loadingDots));
    }
  }, [loadingDots]);
  function loading() {
    setViewMoreContent("Loading.");
    setContent(<LoadingContent project={project} />);
  }
  return (
    <div
      id={`commandprompt${project.id}`}
      className="border border-danger position-relative rounded w-100"
      style={{ backgroundColor: "#1f1d1d" }}
    >
      <div className="d-flex flex-row">
        <div className="w-100 bg-gradient"></div>
        <div className="w-100 bg-gradient"></div>
      </div>
      <div className="px-4 px-lg-8 py-3 py-lg-4 position-relative">
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
        <p className="text-center ms-3 mt-3 text-white fs-6 fs-lg-4">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-top border-2 border-danger px-4 px-lg-8 py-4 py-lg-8">
        <code className="font-monospace">{projectContent}</code>
        <div className="d-flex flex-row">
          <button className="ms-auto p-1 view-more" onClick={loading}>
            {viewMoreContent}
          </button>
        </div>
      </div>
    </div>
  );
}

export default single_project;

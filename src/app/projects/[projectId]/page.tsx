"use client";
import React from "react";
import Carousel from "../../components/carousel/carousel";
import SingleProject from "../../components/project/advanced_single_project";
import { projectsData } from "../../../../utils/data/project_data";

interface Params {
  projectId: string;
}

interface ProjectIdProps {
  params: Params;
}

const ProjectId: React.FC<ProjectIdProps> = ({ params }) => {
  const id = parseInt(params.projectId) - 1;
  const data = projectsData[id];
  const SLIDES = Array.from(Array(1, 2, 3, 4, 5, 6).keys());

  // check screen size
  const getResponsiveMinHeight = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 576) {
        return "50vh";
      } else if (window.innerWidth >= 576 && window.innerWidth < 768) {
        return "60vh";
      } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
        return "70vh";
      } else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
        return "75vh";
      } else {
        return "86vh";
      }
    }
    return "75vh";
  };

  return (
    <div
      style={{ minHeight: getResponsiveMinHeight() }}
      className="my-4 d-flex flex-column align-items-center justify-content-center"
    >
      <div className="row w-100 align-items-center justify-content-center">
        <div className="col-12 col-md-6 col-lg-4">
          <SingleProject project={data} />
          <div
            className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon"
            style={{ background: "#cb1a2c" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-github"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
            </svg>
          </div>
          <div className="px-2">
            <h6 className="mb-0">Github</h6>
            <p className="mb-0">OVDP</p>
          </div>
          <div
            className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon"
            style={{ background: "#cb1a2c" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-github"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
            </svg>
          </div>
          <div className="px-2">
            <h6 className="mb-0">Github</h6>
            <p className="mb-0">OVDP</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Carousel slides={data.image} />
        </div>
      </div>
    </div>
  );
};

export default ProjectId;

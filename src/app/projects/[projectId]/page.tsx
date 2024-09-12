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
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <Carousel slides={data.image} />
        </div>
      </div>
    </div>
  );
};

export default ProjectId;

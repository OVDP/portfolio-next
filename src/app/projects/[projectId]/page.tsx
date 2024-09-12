"use client";
import React from "react";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
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

  return (
    <div
      style={{ minHeight: "75vh" }}
      className="my-4 d-flex flex-column align-items-center justify-content-center"
    >
      <div className="row w-100 align-items-center justify-content-center">
        <div className="col">
          <SingleProject project={data} />
        </div>
        <div className="col">
          <Carousel slides={SLIDES} />
        </div>
      </div>
    </div>
  );
};

export default ProjectId;

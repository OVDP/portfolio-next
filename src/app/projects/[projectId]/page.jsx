"use client";
import React, { useEffect, useState } from "react";
import Carousel from "../../components/carousel/carousel";
import SingleProject from "../../components/project/advanced_single_project";
import { projectsData } from "../../../../utils/data/project_data";
import Repo from "../../components/buttons/repo";
import Demo from "../../components/buttons/demo";

const ProjectId = ({ params }) => {
  const id = parseInt(params.projectId) - 1;
  const data = projectsData[id];

  const [showRepo, setRepo] = useState(null);
  const [showDemo, setDemo] = useState(null);
  const [minHeight, setMinHeight] = useState("75vh");

  // Update Repo and Demo state
  useEffect(() => {
    setRepo(data.repo ? <Repo link={data.repo} /> : null);
    setDemo(data.demo ? <Demo link={data.demo} /> : null);
  }, [data.repo, data.demo]);

  // Update minHeight on window resize
  useEffect(() => {
    const updateMinHeight = () => {
      if (window.innerWidth < 576) {
        setMinHeight("50vh");
      } else if (window.innerWidth >= 576 && window.innerWidth < 768) {
        setMinHeight("60vh");
      } else if (window.innerWidth >= 768 && window.innerWidth < 992) {
        setMinHeight("70vh");
      } else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
        setMinHeight("75vh");
      } else {
        setMinHeight("86vh");
      }
    };

    // Set initial height
    updateMinHeight();

    // Add window resize listener
    window.addEventListener("resize", updateMinHeight);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("resize", updateMinHeight);
    };
  }, []);

  // Ensure the project exists
  if (!data) {
    return <div>Project not found</div>;
  }

  return (
    <div
      style={{ minHeight }}
      className="my-4 d-flex flex-column align-items-center justify-content-center"
    >
      <div className="row w-100 align-items-center justify-content-center">
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <SingleProject project={data} />
          <div className="d-flex flex-row justify-content-center mt-4">
            {showRepo}
            {showDemo}
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

"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

interface Params {
  projectId: string;
}

interface ProjectIdProps {
  params: Params;
}

const ProjectId: React.FC<ProjectIdProps> = ({ params }) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <>
      <h1>{params.projectId}</h1>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">Slide 1</div>
          <div className="embla__slide">Slide 2</div>
          <div className="embla__slide">Slide 3</div>
        </div>
      </div>
    </>
  );
};

export default ProjectId;

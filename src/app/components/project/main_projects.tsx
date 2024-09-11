import { projectsData } from "../../../../utils/data/project_data";
import ProjectCard from "./single_project";

const Projects = () => {
  return (
    <div id="projects" className="position-relative z-50 my-4 my-lg-5">
      <div className="sticky-top" style={{ top: "10px" }}>
        <h1 style={{ textAlign: "center", margin: "4rem 0px 3rem 0px" }}>
          P
          <span style={{ borderBottom: "6px solid #ef5868" }}>
            rojects&nbsp;
          </span>
        </h1>
      </div>
      <div className="pt-5">
        <div className="d-flex flex-column gap-3">
          {projectsData.slice(0, 3).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky top-50 mx-auto w-100"
              style={{ maxWidth: "600px" }}
            >
              <div
                className="d-flex align-items-center justify-content-center rounded shadow"
                style={{
                  boxShadow: "0 0 30px rgba(0, 0, 0, 0.3)",
                  transition: "all 0.5s",
                }}
              >
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

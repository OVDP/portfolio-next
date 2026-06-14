import { projectsData } from "../../../../utils/data/project_data";
import SingleProject from "./single_project";

const main_project = () => {
  return (
    <div id="projects" className="position-relative z-50 mx-2 mx-lg-0 my-4 my-lg-5">
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
          {projectsData.slice(0, 9).map((project, index) => (
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
                <SingleProject project={project} />
              </div>
            </div>
          ))}
        </div>
        <p className="text-center mt-5" style={{ opacity: 0.6 }}>
          More projects are on the way — curious? Check out my{" "}
          <a
            href="https://github.com/OVDP"
            target="_blank"
            style={{ color: "#ef5868", textDecoration: "underline" }}
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default main_project;

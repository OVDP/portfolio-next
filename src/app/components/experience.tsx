const entryStyle = { marginBottom: "2.5rem" };
const linkStyle: React.CSSProperties = {
  display: "block",
  cursor: "pointer",
  textDecoration: "none",
  color: "inherit",
  borderRadius: "8px",
  transition: "opacity 0.2s",
};

import React from "react";

export default function experience() {
  return (
    <div
      className="container py-4 py-xl-5"
      style={{ position: "relative", zIndex: 10 }}
    >
      <div data-component="experience" id="experience">
        <h1 style={{ textAlign: "center", margin: "4rem 0px 3rem 0px" }}>
          E
          <span style={{ borderBottom: "6px solid #ef5868" }}>
            xperiences&nbsp;
          </span>
        </h1>

        <div style={entryStyle}>
          <a href="https://www.hu.nl/voltijd-opleidingen/hbo-ict" target="_blank" style={linkStyle}>
            <h1 style={{ fontSize: "18px", margin: "0px 10px 0px 10px" }}>
              Embedded software engineer - Hogeschool Utrecht
            </h1>
            <sub style={{ margin: "0px 10px 0px 10px" }}>09/2025 - present</sub>
            <div className="d-lg-flex d-xxl-flex justify-content-lg-center align-items-lg-center align-items-xxl-start">
              <div>
                <p style={{ margin: "0px 10px 0px 10px" }}>
                  After completing my MBO diploma, I continued my studies at Hogeschool Utrecht in Technische Informatica.
                  This programme focuses on designing and developing software for technical systems that interact with the physical world —
                  combining software engineering with hardware knowledge. I am deepening my expertise in embedded systems,
                  C++, Python, and system design for environments with constrained resources such as limited ROM, RAM and CPU speed.
                </p>
                <ul>
                  <li>Programmed in C++ and Python.</li>
                  <li>Learned to design with: Fritzing &amp; PlantUML.</li>
                  <li>Planned with: GitHub &amp; Trello.</li>
                  <li>Hosted websites and databases using the Azure cloud.</li>
                </ul>
              </div>
              <div className="d-flex d-md-flex d-lg-flex justify-content-center justify-content-md-center justify-content-lg-center">
                <img
                  className="float-lg-end"
                  src="/assets/img/hu.png"
                  alt="Hogeschool Utrecht"
                  style={{ width: "250px", position: "relative", backgroundColor: "white", padding: "20px", borderRadius: "10px" }}
                />
              </div>
            </div>
          </a>
        </div>

        <div style={entryStyle}>
          <a href="https://www.kw1c.nl/opleidingen/software-developer-bol/" target="_blank" style={linkStyle}>
            <h1 style={{ fontSize: "18px", margin: "0px 10px 0px 10px" }}>
              Study software developer - KW1C
            </h1>
            <sub style={{ margin: "0px 10px 0px 10px" }}>08/2022 - 06/2025</sub>
            <div className="d-lg-flex d-xxl-flex justify-content-lg-center align-items-lg-center align-items-xxl-start">
              <div>
                <p style={{ margin: "0px 10px 0px 10px" }}>
                  At KW1C, I dedicated myself to becoming a skilled full-stack developer
                  capable of creating powerful applications for web, mobile, and
                  desktop platforms. Here is a summary of what I learned.
                </p>
                <ul>
                  <li>
                    Gained proficiency in programming languages and frameworks
                    including HTML, CSS, JavaScript, PHP, C#, .NET, MAUI, MySQL, Tailwind
                    CSS, Node.js, Vue.js and Python.
                  </li>
                  <li>Learned to design with: Figma &amp; Visio</li>
                  <li>
                    Enhanced my project management skills using tools such as Trello
                    and Azure DevOps.
                  </li>
                  <li>
                    Hosted websites and databases using VMware, Windows Server,
                    Linux Ubuntu, SSMS, and Azure.
                  </li>
                  <li>
                    Learned to plan, develop, test, debug, and deliver software as a
                    standalone developer or as part of a team.
                  </li>
                </ul>
              </div>
              <div className="d-flex d-md-flex d-lg-flex justify-content-center justify-content-md-center justify-content-lg-center">
                <img
                  className="float-lg-end"
                  src="/assets/img/kw1c.png"
                  alt="KW1C"
                  style={{ width: "250px", position: "relative", marginRight: "0", marginLeft: "0", borderRadius: "10px" }}
                />
              </div>
            </div>
          </a>
        </div>

        <div style={entryStyle}>
          <a href="https://kopdigitaal.nl" target="_blank" style={linkStyle}>
            <h1 style={{ fontSize: "18px", margin: "0px 10px 0px 10px" }}>
              Internship at Kop Digitaal
            </h1>
            <sub style={{ margin: "0px 10px 0px 10px" }}>02/2025 - 06/2025</sub>
            <div className="d-lg-flex d-xxl-flex justify-content-lg-center align-items-lg-center align-items-xxl-start">
              <div>
                <p style={{ margin: "0px 10px 0px 10px" }}>
                  During my studies at KW1C,
                  I completed a graduation internship where I focused on developing back-end-heavy websites and applications,
                  working on projects commissioned by Kop Digitaal&apos;s clients.
                </p>
                <ul>
                  <li>
                    Further techniques used: Laravel, HTML, Tailwind CSS, JavaScript,
                    Node.js, ReactJS, PHP, Wordpress &amp; Woocommerce.
                  </li>
                  <li>Design with: Adobe XD.</li>
                  <li>Planned with: Jira.</li>
                  <li>
                    Hosted websites and databases using Herd, Wordpress, TablePlus &amp; DBngin.
                  </li>
                </ul>
              </div>
              <div className="d-flex d-md-flex justify-content-center justify-content-md-center">
                <img
                  className="float-lg-end"
                  src="/assets/img/kop.png"
                  alt="Kop Digitaal"
                  style={{ width: "250px", position: "relative", backgroundColor: "white", padding: "20px", borderRadius: "10px" }}
                />
              </div>
            </div>
          </a>
        </div>

        <div style={entryStyle}>
          <a href="https://www.holdingthedrones.com" target="_blank" style={linkStyle}>
            <h1 style={{ fontSize: "18px", margin: "0px 10px 0px 10px" }}>
              Parttime Junior software developer at Holding the Drones
            </h1>
            <sub style={{ margin: "0px 10px 0px 10px" }}>02/2024 - 05/2025</sub>
            <div className="d-lg-flex d-xxl-flex justify-content-lg-center align-items-lg-center align-items-xxl-start">
              <div>
                <p style={{ margin: "0px 10px 0px 10px" }}>
                  After completing my internship, I received an offer to continue
                  developing applications for Holding the Drones to support their
                  software environment.
                </p>
                <ul>
                  <li>
                    Further programmed with: PHP, HTML, CSS, JavaScript, MySQL,
                    Node.js, ReactJS, ExpressJS &amp; Tailwind CSS.
                  </li>
                  <li>Design with: Figma.</li>
                  <li>Planned with: Trello &amp; Excel.</li>
                  <li>
                    Hosted websites and databases using Linux, Docker, Apache,
                    FileZilla, Nginx &amp; Putty.
                  </li>
                </ul>
              </div>
              <div className="d-flex d-md-flex justify-content-center justify-content-md-center">
                <img
                  className="float-lg-end"
                  src="/assets/img/Logohtd.jpg"
                  alt="Holding the Drones"
                  style={{ width: "250px", position: "relative", borderRadius: "10px" }}
                />
              </div>
            </div>
          </a>
        </div>

        <div style={entryStyle}>
          <a href="https://www.holdingthedrones.com" target="_blank" style={linkStyle}>
            <h1 style={{ fontSize: "18px", margin: "0px 10px 0px 10px" }}>
              Internship at Holding the Drones
            </h1>
            <sub style={{ margin: "0px 10px 0px 10px" }}>09/2023 - 02/2024</sub>
            <div className="d-lg-flex d-xxl-flex justify-content-lg-center align-items-lg-center align-items-xxl-start">
              <div>
                <p style={{ margin: "0px 10px 0px 10px" }}>
                  During my internship at Holding the Drones, I focused on coding
                  multiple full-stack websites and applications, supporting their
                  software environment for drones.
                </p>
                <ul>
                  <li>
                    Further programmed with: PHP, HTML, CSS, JavaScript, MySQL,
                    Node.js &amp; ReactJS.
                  </li>
                  <li>Design with: Figma.</li>
                  <li>Planned with: Trello &amp; Excel.</li>
                  <li>
                    Hosted websites and databases using Linux, Docker, Apache,
                    FileZilla, Nginx &amp; Putty.
                  </li>
                </ul>
              </div>
              <div className="d-flex d-md-flex d-lg-flex justify-content-center justify-content-md-center justify-content-lg-center">
                <img
                  className="float-lg-end"
                  src="/assets/img/Logohtd.jpg"
                  alt="Holding the Drones"
                  style={{ width: "250px", position: "relative", borderRadius: "10px" }}
                />
              </div>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
}

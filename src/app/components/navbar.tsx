"use client";
import Link from "next/link";

export default function navbar() {
  if (typeof window !== "undefined") {
    localStorage.setItem("theme", "dark");
  }
  const setDark = () => {
    const mainBackground = document.getElementById("main-background");
    const lightButton = document.getElementById("light-button");
    const darkButton = document.getElementById("dark-button");
    if (mainBackground && lightButton && darkButton) {
      mainBackground.style.color = "#DEE2E6";
      lightButton.style.display = "none";
      darkButton.style.display = "block";
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", "dark");
    }
  };
  const setLight = () => {
    const mainBackground = document.getElementById("main-background");
    const lightButton = document.getElementById("light-button");
    const darkButton = document.getElementById("dark-button");
    if (mainBackground && darkButton && lightButton) {
      mainBackground.style.color = "#212529";
      darkButton.style.display = "none";
      lightButton.style.display = "block";
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", "light");
    }
  };
  const toggleTheme = () => {
    const theme = localStorage.getItem("theme");

    if (theme !== "dark") {
      setDark();
    } else if (theme === "dark") {
      setLight();
    }
  };
  return (
    <nav
      data-component="navbar"
      className="navbar navbar-expand-md py-3"
      style={{
        borderColor: "#cb1a2c",
        borderBottom: "solid",
        borderBottomColor: "#cb1a2c",
      }}
    >
      <div className="container">
        <button
          data-bs-toggle="collapse"
          className="navbar-toggler"
          data-bs-target="#navcol-4"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-grow-0 order-md-first"
          id="navcol-4"
        >
          <ul className="navbar-nav me-auto">
            <li>
              <Link href="/" className="text-decoration-none">
                Home
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-none d-md-block">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link href="/" className="text-decoration-none">
                About
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link href="/" className="text-decoration-none">
                Project
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/" className="text-decoration-none">
                Experience
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <a
            onClick={toggleTheme}
            className="dropdown-item d-flex align-items-center text-white"
            href="#"
          >
            <svg
              style={{ display: "none" }}
              id="light-button"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-sun-fill opacity-50 me-2"
            >
              <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
            </svg>
            <svg
              id="dark-button"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-moon-stars-fill opacity-50 me-2"
            >
              <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278"></path>
              <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
}

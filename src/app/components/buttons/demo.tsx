import React from "react";

export default function Demo({ link }) {
  const openMinimizedWindow = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
    window.open(
      link, // URL to open
      "_blank", // Open in a new window
      "width=800,height=800,left=100,top=100" // Customize window size and position (adjust as needed)
    );
  };

  return (
    <a href={link} onClick={openMinimizedWindow} className="p-3 z-1">
      <div className="d-flex align-items-center ml-4 row">
        <div
          className="bs-icon-md bs-icon-rounded rounded bs-icon-primary d-flex justify-content-center align-items-center"
          style={{ background: "#cb1a2c", width: "40px", height: "40px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-joystick text-white"
            viewBox="0 0 16 16"
          >
            <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2" />
            <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23" />
          </svg>
        </div>
        <div className="px-2 col align-middle">
          <h6 className="mb-0">Live demo</h6>
        </div>
      </div>
    </a>
  );
}

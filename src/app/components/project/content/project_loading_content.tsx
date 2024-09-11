import React from "react";

export default function ProjectLoadingContent({ project }) {
  return (
    <>
      <style>
        {`
@keyframes blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.blink {
  animation: blink 1s step-start infinite;
}
        `}
      </style>
      <div className="my-1">
        <span className="text-white me-2">
          <span id="typewriter" className="text-info">C:\Users\othniel&gt;</span>
          cls
        </span>
      </div>
      <div className="my-1">
        <span className="text-white me-2">
          <span className="text-info">C:\Users\othniel&gt;</span>start project{project.id}.exe
        </span>
      </div>
      <div className="my-1">
        <span className="me-2 text-info">
          C:\Users\othniel&gt;
          <span>
            <span className="blink text-white">▍</span>
          </span>
        </span>
      </div>
    </>
  );
}


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
        <span className="text-white me-2">C:\Users\othniel&gt;cls</span>
      </div>
      <div className="my-1">
        <span className="text-white me-2">
          C:\Users\othniel&gt;start project{project.id}.exe
        </span>
      </div>
      <div className="my-1">
        <span className="text-white me-2">
          C:\Users\othniel&gt;
          <span>
            <span className="blink">▍</span>
          </span>
        </span>
      </div>
    </>
  );
}

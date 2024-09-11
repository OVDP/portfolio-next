import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useRouter } from "next/navigation";

export default function ProjectLoadingContent({ project }) {
  const router = useRouter();
  // time between showing each line in the command prompt
  const [show2, set2] = useState(false);
  const [show3, set3] = useState(false);
  useEffect(() => {
    const delay1 = "cls".length * 180;
    setTimeout(() => set2(true), delay1);
    const delay2 = delay1 + ("start project" + project.id + ".exe").length * 90;
    setTimeout(() => set3(true), delay2);
    const delay3 = delay2 + 500;
    setTimeout(() => router.push(`/projects`), delay3);
  }, [project.id]);

  return (
    // blink effect for the cursor
    <>
      <style>
        {`
@keyframes blink {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.blink {
  animation: blink 1s step-start infinite;
}
        `}
      </style>
      <div className="my-1">
        <span className="text-white me-2">
          <span id="typewriter" className="text-info">
            C:\Users\othniel&gt;
          </span>
          <Typewriter words={["cls"]} cursor cursorStyle="" typeSpeed={70} />
        </span>
      </div>
      {show2 && (
        <div className="my-1">
          <span className="text-white me-2">
            <span className="text-info">C:\Users\othniel&gt;</span>
            <Typewriter
              words={["start project" + project.id + ".exe"]}
              cursor
              cursorStyle=""
              typeSpeed={70}
            />
          </span>
        </div>
      )}
      {show3 && (
        <div className="my-1">
          <span className="me-2 text-info">
            C:\Users\othniel&gt;
            <span>
              <span className="blink text-white">▍</span>
            </span>
          </span>
        </div>
      )}
    </>
  );
}

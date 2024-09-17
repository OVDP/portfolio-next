import React, { useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useRouter } from "next/navigation";

interface Project {
  id: string;
}

export default function ProjectLoadingContent({
  project,
}: {
  project: Project;
}) {
  const router = useRouter();
  // time between showing each line in the command prompt
  const [show2, set2] = useState(false);
  const [show3, set3] = useState(false);
  useEffect(() => {
    const delay1 = "cls".length * 180;
    setTimeout(() => set2(true), delay1);
    const delay2 = delay1 + ("start project" + project.id + ".exe").length * 90;
    setTimeout(() => set3(true), delay2);
    const delay3 = delay2 + 400;
    setTimeout(() => router.push(`/projects/${project.id}`), delay3);
  }, [project.id]);

  return (
    <>
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

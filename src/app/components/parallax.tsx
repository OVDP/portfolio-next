import React from "react";
import Script from "next/script";

export default function parallax() {
  return (
    <>
      <div id="scene" className="scene position-fixed d-none d-lg-block">
        <div data-depth="0.50" style={{ width: "100vw" }}>
          <img src="assets/img/parallax/glow.png" style={{ width: "100%" }} />
        </div>
        <div data-depth="0.60" style={{ width: "100vw" }}>
          <img src="assets/img/parallax/zon.png" style={{ width: "100%" }} />
        </div>
        <div data-depth="0.00" style={{ width: "100vw" }}>
          <img
            id="parallax-foreground"
            src="assets/img/parallax/foreground_dark.png"
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <Script src="scripts/parallax.js" />
      <Script src="scripts/run_parallax.js" />
    </>
  );
}

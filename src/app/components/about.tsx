"use client";
import { useState } from "react";

export default function About() {
  const [showSecond, setShowSecond] = useState(false);

  return (
    <>
      <div data-component="about" className="container" id="about">
        <div className="row align-items-center my-0 my-md-5">
          <div
            className="col"
            style={{
              display: "block",
              margin: "20px",
              paddingLeft: "0px",
              marginLeft: "6px",
            }}
          >
            <div className="d-flex d-sm-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-xxl-center">
              <div
                onClick={() => setShowSecond((v) => !v)}
                className="profile-picture-hint"
                style={{
                  cursor: "pointer",
                  position: "relative",
                  width: "19rem",
                  height: "19rem",
                  flexShrink: 0,
                }}
              >
                <img
                  alt="Me"
                  src="/assets/img/ktmduke.jpg"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    clipPath: "circle(50% at 50% 50%)",
                    opacity: 1,
                  }}
                />
                <img
                  alt="Me"
                  src="/assets/img/sappigeman.jpg"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    clipPath: "circle(50% at 50% 50%)",
                    opacity: showSecond ? 1 : 0,
                    transition: "opacity 0.5s ease",
                    filter: "contrast(1.12) saturate(1.1) brightness(0.97)",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="col z-1">
            <h1
              style={{
                textAlign: "center",
              }}
              className="font-weight-bold display-6 bevan-regular-italic"
              id="aboutname"
            >
              OvdP
            </h1>
            <h2
              style={{ textAlign: "center" }}
              className="h4 bevan-regular"
              id="abouttitle"
            >
              E
              <span
                style={{
                  borderBottom: "6px solid #ef5868",
                  width: "fit-content",
                  margin: "auto",
                }}
              >
                mbedded software engineer&nbsp;
              </span>
            </h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 style={{ textAlign: "center", margin: "4rem 0px 3rem 0px" }}>
              A
              <span style={{ borderBottom: "6px solid #ef5868" }}>
                bout&nbsp;
              </span>
            </h1>
            <div className="row d-md-flex justify-content-lg-center align-items-lg-center">
              <div className="col d-xl-flex d-xxl-flex align-items-xl-center align-items-xxl-center">
                <p>
                  Ever since I was little, I&apos;ve loved playing with
                  computers. This included playing video games, which eventually
                  led me into the world of scripting and modding. This made me
                  obsessed with creating programs to solve problems or enhance
                  the experience. My passion led me to enroll in a software
                  development study to further learn the various aspects, both
                  in my education and in my spare time.
                  <br />
                  <br />
                  The unending cycle of new languages, methods, and skills in
                  the IT world makes me enthusiastic about giving myself a small
                  challenge every day. Besides this, I still love playing video
                  games, keeping fit, and producing music.
                </p>
              </div>
              <br />
              <div className="col d-flex justify-content-center align-items-center">
                <img
                  className="z-1"
                  alt="code"
                  src="/assets/img/code.jpg"
                  style={{ borderRadius: "20px", width: "40rem" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

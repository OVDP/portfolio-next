export default function About() {
  return (
    <>
      <div data-component="about" className="container">
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
              <img
                alt="Me"
                src="assets/img/sappigeman.jpg"
                style={{
                  borderRadius: "100%",
                  width: "19rem",
                  borderRight: "6px solid #1f1d1d",
                  borderBottom: "6px solid #1f1d1d",
                }}
              />
            </div>
          </div>
          <div className="col z-1">
            <h1
              style={{
                color: "#f2f2f2",
                textAlign: "center",
              }}
              className="font-weight-bold display-6 bevan-regular-italic"
              id="aboutname"
            >
              OvdP
            </h1>
            <h2
              style={{ color: "#f2f2f2", textAlign: "center",  }}
              className="h4 bevan-regular"
              id="abouttitle"
            >
              F<span style={{borderBottom: "6px solid #ef5868", width: "fit-content", margin: "auto"}}>ullstack developer&nbsp;</span>
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
                  src="assets/img/code.jpg"
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

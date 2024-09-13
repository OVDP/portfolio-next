export default function About() {
    return (
        <>
            <div data-component="about" className="container">
                <div className="row">
                    <div className="col-md-12" style={{ display: 'block', margin: '20px', paddingLeft: '0px', marginLeft: '6px' }}>
                        <div className="d-flex d-sm-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-xxl-center">
                            <img className="img-fluid d-xxl-flex justify-content-xxl-center" src="assets/img/logo.png" />
                        </div>
                        <h1 style={{ textAlign: 'center' }}>Othniel van de Pol</h1>
                        <p style={{ textAlign: 'center' }}>Fullstack software developer</p>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 style={{ textAlign: 'center', margin: '4rem 0px 3rem 0px' }}>
                            A<span style={{ borderBottom: '6px solid #ef5868' }}>bout&nbsp;</span>
                        </h1>
                        <div className="row d-md-flex justify-content-lg-center align-items-lg-center">
                            <div className="col d-xl-flex d-xxl-flex align-items-xl-center align-items-xxl-center">
                                <p>
                                    Ever since I was little, I've loved playing with computers. This included playing video games, which eventually led me into the world of scripting and modding. This made me obsessed with creating programs to solve problems or enhance the experience. My passion led me to enroll in a software development study to further learn the various aspects, both in my education and in my spare time.
                                    <br /><br />
                                    The unending cycle of new languages, methods, and skills in the IT world makes me enthusiastic about giving myself a small challenge every day. Besides this, I still love playing video games, keeping fit, and producing music.
                                </p>
                            </div>
                            <br />
                            <div className="col d-flex justify-content-center align-items-center">
                                <img alt="avatar, icon, tiktok" src="assets/img/sappigeman.jpg" style={{ borderRadius: '100%',width: "19rem"}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


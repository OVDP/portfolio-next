import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div style="background: url(&quot;assets/img/openart-make-an-minimalistic-background-of-a-red-horizon-using-the-colors-red-yellow-and-orange_k32-AOTo_upscaled.png&quot;) center / contain;--bs-body-color: #212529;--bs-dark: var(--bs-body-bg);--bs-dark-rgb: 255,255,255;--bs-light: #212529;--bs-light-rgb: 33,37,41;">
        <nav className="navbar navbar-expand-md py-3" style="background: var(--bs-tertiary-color);--bs-light: var(--bs-navbar-disabled-color);--bs-light-rgb: 0,0,0;--bs-body-bg: var(--bs-navbar-disabled-color);border-style: none;border-color: #cb1a2c;border-bottom-style: solid;border-bottom-color: #cb1a2c;">
            <div className="container"><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-4"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse flex-grow-0 order-md-first" id="navcol-4">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item"><a className="nav-link active" href="#" style="color: var(--bs-secondary-bg);font-family: 'Doppio One', sans-serif;">Home</a></li>
                    </ul>
                </div>
                <div className="d-none d-md-block">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item"><a className="nav-link" href="#" style="color: var(--bs-secondary-bg);font-family: 'Doppio One', sans-serif;">About</a></li>
                        <li className="nav-item"></li>
                        <li className="nav-item"><a className="nav-link" href="#" style="color: var(--bs-secondary-bg);font-family: 'Doppio One', sans-serif;" title="bas">Projects</a></li>
                        <li className="nav-item"><a className="nav-link" href="#" style="color: var(--bs-secondary-bg);font-family: 'Doppio One', sans-serif;">Experiences</a></li>
                    </ul>
                </div>
                <div className="theme-switcher dropdown"><a className="dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" href="#" style="color: var(--bs-tertiary-bg);"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-sun-fill mb-1" style="color: var(--bs-tertiary-bg);">
                            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                        </svg></a>
                    <div className="dropdown-menu"><a className="dropdown-item d-flex align-items-center" href="#" data-bs-theme-value="light"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-sun-fill opacity-50 me-2">
                                <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                            </svg>Light</a><a className="dropdown-item d-flex align-items-center" href="#" data-bs-theme-value="dark"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-moon-stars-fill opacity-50 me-2">
                                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278"></path>
                                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
                            </svg>Dark</a><a className="dropdown-item d-flex align-items-center" href="#" data-bs-theme-value="auto"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-circle-half opacity-50 me-2">
                                <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16"></path>
                            </svg>Auto</a></div>
                </div>
            </div>
        </nav>
        <div className="container">
            <div className="row">
                <div className="col-md-12" style="display: block;margin: 20px;padding-left: 0px;margin-left: 6px;">
                    <div className="d-flex d-sm-flex d-xxl-flex justify-content-center justify-content-sm-center justify-content-xxl-center"><img className="img-fluid d-xxl-flex justify-content-xxl-center" src="assets/img/logo.png"></div>
                    <h1 style="text-align: center;color: #ffffff;font-family: 'Doppio One', sans-serif;">Othniel van de Pol</h1>
                    <p style="text-align: center;color: #ffffff;font-family: 'Doppio One', sans-serif;">Fullstack software developer</p>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 style="color: #ffffff;font-family: 'Doppio One', sans-serif;text-align: center;margin: 4rem 0px 3rem 0px;">A<span style="border-bottom: 6px solid #ef5868;color: #ffffff;">bout&nbsp;</span></h1>
                    <div className="row d-md-flex justify-content-lg-center align-items-lg-center">
                        <div className="col d-xl-flex d-xxl-flex align-items-xl-center align-items-xxl-center">
                            <p style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;--bs-dark: var(--bs-body-bg);--bs-dark-rgb: 255,255,255;--bs-body-color: var(--bs-body-bg);--bs-light: #231f20;--bs-light-rgb: 35,31,32;">Ever since I was little, I've loved playing with computers. This included playing video games, which eventually led me into the world of scripting and modding. This made me obsessed with creating programs to solve problems or enhance the experience. My passion led me to enroll in a software development study to further learn the various aspects, both in my education and in my spare time.<br><br>The unending cycle of new languages, methods, and skills in the IT world makes me enthusiastic about giving myself a small challenge every day. Besides this, I still love playing video games, keeping fit, and producing music.</p>
                        </div>
                        <div className="col d-md-flex justify-content-md-center align-items-md-center"><img className="img-fluid" alt="avatar, icon, tiktok" src="assets/img/g67c637f9c2be12cffe1b5fc8901243fd60ef5ace05086184c68976e7d0f777946f91e165fd555277d1c3231989e1f489aab3d31fc9ee80e84988f4586b00fcdc_640-1.jpg" style="border-radius: 100%;"></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container py-4 py-xl-5">
            <h1 style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;text-align: center;margin: 4rem 0px 3rem 0px;">P<span style="border-bottom: 6px solid #ef5868 ;">rojects&nbsp;</span></h1>
            <p style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Throughout my journey in the digital world, I've developed various projects and continuously expanded my interests and knowledge. Here, you can explore some of the projects I've created along the way.</p>
            <div className="row">
                <div className="col-md-8 col-xl-6 col-xxl-9 mx-auto p-4" style="color: var(--bs-body-bg);width: 100%;">
                    <div>
                        <div className="d-flex align-items-center align-items-md-start justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-center">
                            <div className="d-lg-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center">
                                <div>
                                    <div className="d-lg-flex d-xxl-flex align-items-lg-center justify-content-xxl-start align-items-xxl-center" style="width: 30rem;">
                                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center me-4 d-inline-block bs-icon xl" style="background: #cb1a2c;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-dice-1">
                                                <circle cx="8" cy="8" r="1.5"></circle>
                                                <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"></path>
                                            </svg></div>
                                        <h4 style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;text-align: center;">Custom minecraft commands using Skript</h4>
                                    </div>
                                    <p style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;width: 30rem;">My first programming language is Skript, which is a Minecraft plugin that allows you to create custom commands and features for your Minecraft server. When I first started, I didn't know how to write a Minecraft plugin in Java, so I turned to a tutorial to simplify it. This led me to discover and use Skript.<br><br>With Skript, I created custom commands that allowed me to use special items, save coordinates, and teleport back to those saved coordinates.</p>
                                    <h1 style="font-size: 20px;color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Skills used:</h1>
                                    <ul>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Spigot</li>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Skript</li>
                                    </ul>
                                </div>
                                <div className="carousel slide d-xxl-flex justify-content-xxl-center align-items-xxl-center w-md-10" data-bs-ride="false" id="carousel-9" style="width: 25rem;">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active"><img className="w-100 d-block" src="assets/img/minehut.jpg" alt="Slide Image"></div>
                                        <div className="carousel-item"><img className="w-100 d-block" src="assets/img/skript.jpg" alt="Slide Image"></div>
                                    </div>
                                    <div><a className="carousel-control-prev" href="#carousel-9" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-9" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
                                    <div className="carousel-indicators"><button type="button" data-bs-target="#carousel-9" data-bs-slide-to="0" className="active"></button> <button type="button" data-bs-target="#carousel-9" data-bs-slide-to="1"></button></div>
                                </div>
                            </div>
                        </div><sub style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">01/12/2017-ish</sub>
                        <hr className="my-5" style="color: var(--bs-body-bg);background: var(--bs-body-bg);">
                    </div>
                    <div>
                        <div className="d-flex align-items-center align-items-md-start justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-center">
                            <div className="d-lg-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center">
                                <div className="carousel slide d-grid d-lg-flex d-xxl-flex justify-content-lg-center align-items-lg-center justify-content-xxl-center align-items-xxl-center" data-bs-ride="false" id="carousel-2" style="width: 25rem;margin: 1rem;">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active"><img className="w-100 d-block" src="assets/img/studio.png" alt="Slide Image"></div>
                                        <div className="carousel-item"><img className="w-100 d-block" src="assets/img/lua.png" alt="Slide Image"></div>
                                    </div>
                                    <div><a className="carousel-control-prev" href="#carousel-2" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-2" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
                                    <div className="carousel-indicators"><button type="button" data-bs-target="#carousel-2" data-bs-slide-to="0" className="active"></button> <button type="button" data-bs-target="#carousel-2" data-bs-slide-to="1"></button></div>
                                </div>
                                <div className="d-grid float-start">
                                    <div className="d-lg-flex d-xxl-flex justify-content-lg-end align-items-lg-center justify-content-xxl-end align-items-xxl-center" style="width: 30rem;">
                                        <h4 className="d-xxl-flex align-items-xxl-center" style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;text-align: left;margin-right: 2rem;">Game development with Roblox Studio</h4>
                                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center me-4 d-inline-block bs-icon xl" style="background: #cb1a2c;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-dice-2">
                                                <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"></path>
                                                <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
                                            </svg></div>
                                    </div>
                                    <p style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;width: 30rem;">As a kid with a lot of free time, I enjoyed playing with Nerf guns, playing football, and gaming. One of the games I played was Roblox, which also offered an advanced game engine for developing games. This naturally sparked my interest in game development.<br><br>After focusing my creativity on developing smaller games, I became better in modeling game objects and scripting in Lua. This experience helped me understand other programming languages more quickly, such as JavaScript and PHP.</p>
                                    <h1 style="font-size: 20px;color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Skills used:</h1>
                                    <ul>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Roblox studio</li>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Lua</li>
                                    </ul>
                                </div>
                            </div>
                        </div><sub className="d-lg-flex justify-content-lg-end" style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;text-align: right;">26/09/2017 - 12/05/2018</sub>
                        <hr className="my-5" style="color: var(--bs-body-bg);background: var(--bs-body-bg);">
                    </div>
                    <div>
                        <div className="d-flex align-items-center align-items-md-start justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-center">
                            <div className="d-lg-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center">
                                <div>
                                    <div className="d-lg-flex d-xxl-flex align-items-lg-center justify-content-xxl-start align-items-xxl-center" style="width: 30rem;">
                                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center me-4 d-inline-block bs-icon xl" style="background: #cb1a2c;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-dice-3">
                                                <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"></path>
                                                <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
                                            </svg></div>
                                        <h4 style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;text-align: center;">Server Hosting</h4>
                                    </div>
                                    <p style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;width: 30rem;">To host servers for different games (Minecraft, Terraria, TF2), I decided to use a bare-bones PC my father gave me instead of relying on free, crappy hosting services.<br><br>This decision led me to install and learn Linux Ubuntu as the operating system to optimize performance.<br><br>This also helped me to host my own website in the future.</p>
                                    <h1 style="font-size: 20px;color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Skills used:</h1>
                                    <ul>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Linux</li>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Putty</li>
                                    </ul>
                                </div>
                                <div className="carousel slide d-xxl-flex justify-content-xxl-center align-items-xxl-center" data-bs-ride="false" id="carousel-10" style="width: 25rem;">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active"><img className="w-100 d-block" src="assets/img/ubuntu-logo.avif" alt="Slide Image"></div>
                                        <div className="carousel-item"><img className="w-100 d-block" src="assets/img/putty.png" alt="Slide Image"></div>
                                    </div>
                                    <div><a className="carousel-control-prev" href="#carousel-10" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-10" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
                                    <div className="carousel-indicators"><button type="button" data-bs-target="#carousel-10" data-bs-slide-to="0" className="active"></button> <button type="button" data-bs-target="#carousel-10" data-bs-slide-to="1"></button></div>
                                </div>
                            </div>
                        </div><sub style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;"><br>23/12/2020 - now</sub>
                        <hr className="my-5" style="color: var(--bs-body-bg);background: var(--bs-body-bg);">
                    </div>
                    <div>
                        <div className="d-flex align-items-center align-items-md-start justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-center">
                            <div className="d-lg-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center">
                                <div className="carousel slide d-xxl-flex justify-content-xxl-center align-items-xxl-center" data-bs-ride="false" id="carousel-1" style="width: 25rem;margin: 1rem;">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active"><img className="w-100 d-block" src="assets/img/unity.png" alt="Slide Image"></div>
                                        <div className="carousel-item"><img className="w-100 d-block" src="assets/img/game.png" alt="Slide Image"></div>
                                    </div>
                                    <div><a className="carousel-control-prev" href="#carousel-1" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-1" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
                                    <div className="carousel-indicators"><button type="button" data-bs-target="#carousel-1" data-bs-slide-to="0" className="active"></button> <button type="button" data-bs-target="#carousel-1" data-bs-slide-to="1"></button></div>
                                </div>
                                <div>
                                    <div className="d-lg-flex d-xxl-flex justify-content-lg-end align-items-lg-center justify-content-xxl-end align-items-xxl-center" style="width: 30rem;text-align: right;">
                                        <h4 style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;text-align: center;margin-right: 2rem;"><span style="color: var(--bs-body-bg);">Unity 2D Platformer</span></h4>
                                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-xxl-center me-4 d-inline-block bs-icon xl" style="background: #cb1a2c;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-dice-4">
                                                <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"></path>
                                                <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
                                            </svg></div>
                                    </div>
                                    <p className="d-xxl-flex justify-content-xxl-end" style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;width: 30rem;">For a school project, I created a 2D platformer using the Unity engine. This project allowed me to apply my existing game development knowledge and make progress in learning C#.</p>
                                    <h1 style="font-size: 20px;color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Skills used:</h1>
                                    <ul>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Unity</li>
                                    </ul>
                                </div>
                            </div>
                        </div><sub className="d-lg-flex justify-content-lg-end" style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;text-align: right;">07/06/2021 - 11/06/2021</sub>
                        <hr className="my-5" style="color: var(--bs-body-bg);background: var(--bs-body-bg);">
                    </div>
                    <div>
                        <div className="d-flex align-items-center align-items-md-start justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-center">
                            <div className="d-lg-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center">
                                <div>
                                    <div className="d-lg-flex d-xxl-flex align-items-lg-center justify-content-xxl-start align-items-xxl-center" style="width: 30rem;">
                                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center me-4 d-inline-block bs-icon xl" style="background: #cb1a2c;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-dice-5">
                                                <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"></path>
                                                <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m4-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
                                            </svg></div>
                                        <h4 style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;text-align: center;">Javascript Snake</h4>
                                    </div>
                                    <p style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;width: 30rem;">During my studies at KW1C, I learned more about web development, learning HTML, CSS, and JavaScript. This led me to create my own websites, moving further than goofing around on W3Schools.<br><br>To further enhance my skills, I followed a YouTube series to create a Snake game using these tools. You can view the demo of this project here:&nbsp;<a href="#" style="color: #ef5868;">Javascript Snake demo</a></p>
                                    <h1 style="font-size: 20px;color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Skills used:</h1>
                                    <ul>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">HTML</li>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">CSS</li>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">JavaScript</li>
                                    </ul>
                                </div>
                                <div className="carousel slide d-xxl-flex justify-content-xxl-center align-items-xxl-center" data-bs-ride="false" id="carousel-3" style="width: 25rem;">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active"><img className="w-100 d-block" src="assets/img/hcj.jpg" alt="Slide Image"></div>
                                        <div className="carousel-item"><img className="w-100 d-block" src="assets/img/snekk.png" alt="Slide Image"></div>
                                    </div>
                                    <div><a className="carousel-control-prev" href="#carousel-3" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-3" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
                                    <div className="carousel-indicators"><button type="button" data-bs-target="#carousel-3" data-bs-slide-to="0" className="active"></button> <button type="button" data-bs-target="#carousel-3" data-bs-slide-to="1"></button></div>
                                </div>
                            </div>
                        </div><sub style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">09/09/2022 - 10/09/2022</sub>
                        <hr className="my-5" style="color: var(--bs-body-bg);background: var(--bs-body-bg);">
                    </div>
                    <div>
                        <div className="d-flex align-items-center align-items-md-start justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-center">
                            <div className="d-lg-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center">
                                <div className="carousel slide d-xxl-flex justify-content-xxl-center align-items-xxl-center" data-bs-ride="false" id="carousel-4" style="width: 25rem;margin: 1rem;">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active"><img className="w-100 d-block" src="assets/img/node.svg" alt="Slide Image"></div>
                                        <div className="carousel-item"><img className="w-100 d-block" src="assets/img/next.png" alt="Slide Image"></div>
                                        <div className="carousel-item"><img className="w-100 d-block" src="assets/img/bootstrap.svg" alt="Slide Image"></div>
                                    </div>
                                    <div><a className="carousel-control-prev" href="#carousel-4" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-4" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
                                    <div className="carousel-indicators"><button type="button" data-bs-target="#carousel-4" data-bs-slide-to="0" className="active"></button> <button type="button" data-bs-target="#carousel-4" data-bs-slide-to="1"></button> <button type="button" data-bs-target="#carousel-4" data-bs-slide-to="2"></button></div>
                                </div>
                                <div>
                                    <div className="d-lg-flex d-xxl-flex justify-content-lg-end align-items-lg-center justify-content-xxl-end align-items-xxl-center" style="width: 30rem;text-align: right;">
                                        <h4 style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;text-align: center;margin-right: 2rem;">Portfolio website</h4>
                                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-xxl-center me-4 d-inline-block bs-icon xl" style="background: #cb1a2c;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-dice-6">
                                                <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"></path>
                                                <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
                                            </svg></div>
                                    </div>
                                    <p className="d-xxl-flex justify-content-xxl-end" style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;width: 30rem;">For internships, I created and hosted this portfolio website to showcase my knowledge and skills to recruiters.<br><br>I initially launched this website on October 20, 2023. Later, I reworked it into a newer, nicer, (and more responsive) version on August 6, 2024.</p>
                                    <h1 style="font-size: 20px;color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Skills used:</h1>
                                    <ul>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">HTML</li>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">CSS</li>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">JavaScript</li>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">NodeJS</li>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">NextJS</li>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Bootstrap 5</li>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Bootstrap studio</li>
                                    </ul>
                                </div>
                            </div>
                        </div><sub className="d-lg-flex justify-content-lg-end" style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;text-align: right;">20/10/2023 - 06/08/2024</sub>
                        <hr className="my-5" style="color: var(--bs-body-bg);background: var(--bs-body-bg);">
                    </div>
                    <div>
                        <div className="d-flex align-items-center align-items-md-start justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-center">
                            <div className="d-lg-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center">
                                <div>
                                    <div className="d-lg-flex d-xxl-flex align-items-lg-center justify-content-xxl-start align-items-xxl-center" style="width: 30rem;">
                                        <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center me-4 d-inline-block bs-icon xl" style="background: #cb1a2c;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-dice-6" style="font-size: 24px;margin: 2px;">
                                                <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"></path>
                                                <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
                                            </svg><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-dice-1" style="font-size: 24px;margin: 2px;">
                                                <circle cx="8" cy="8" r="1.5"></circle>
                                                <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"></path>
                                            </svg></div>
                                        <h4 style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;text-align: center;">HypSkyApi</h4>
                                    </div>
                                    <p style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;width: 30rem;"><br>For the game Hypixel Skyblock, I created a website that called the public Skyblock API to fetch all the auction data of items sold in the game's economy. I used this data to make a profit in game.<br><br>The project started with a large Excel file that my friends and I made. The file grew so big that it took over 5 minutes to load all the new data when opened. To address this, I volunteered to create a separate tool with new features, outside of the Excel file. This became my first TypeScript application, which you can visit on GitHub here:&nbsp;<a href="#"><span style="color: rgb(239, 88, 104);">Link</span></a>&nbsp;<br><br>I later reworked this project to learn React and Bootstrap, which you can also visit here on GitHub:&nbsp;<a href="#"><span style="color: rgb(239, 88, 104);">Link</span></a>&nbsp; or see the demo here:&nbsp;<a href="#"><span style="color: rgb(239, 88, 104);">Link</span></a></p>
                                    <h1 style="font-size: 20px;color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Skills used:</h1>
                                    <ul>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">HTML</li>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">CSS</li>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">JavaScript</li>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">TypeScript</li>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">NodeJS</li>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">ReactJS</li>
                                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Bootstrap 5</li>
                                    </ul>
                                </div>
                                <div className="carousel slide d-xxl-flex justify-content-xxl-center align-items-xxl-center" data-bs-ride="false" id="carousel-5" style="width: 25rem;">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active"><img className="w-100 d-block" src="assets/img/skyblock.png" alt="Slide Image"></div>
                                        <div className="carousel-item"><img className="w-100 d-block" src="assets/img/hypskyapi.png" alt="Slide Image"></div>
                                        <div className="carousel-item"><img className="w-100 d-block" src="assets/img/api.png" alt="Slide Image"></div>
                                    </div>
                                    <div><a className="carousel-control-prev" href="#carousel-5" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-5" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
                                    <div className="carousel-indicators"><button type="button" data-bs-target="#carousel-5" data-bs-slide-to="0" className="active"></button> <button type="button" data-bs-target="#carousel-5" data-bs-slide-to="1"></button> <button type="button" data-bs-target="#carousel-5" data-bs-slide-to="2"></button></div>
                                </div>
                            </div>
                        </div><sub style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">22/10/2023 - 10/06/2024</sub>
                        <hr className="my-5" style="color: var(--bs-body-bg);background: var(--bs-body-bg);">
                    </div>
                    <div className="d-flex align-items-center align-items-md-start justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center justify-content-xxl-center">
                        <div className="d-lg-flex justify-content-lg-center align-items-lg-center justify-content-xl-center align-items-xl-center">
                            <div className="carousel slide d-xxl-flex justify-content-xxl-center align-items-xxl-center" data-bs-ride="false" id="carousel-6" style="width: 25rem;margin: 1rem;">
                                <div className="carousel-inner">
                                    <div className="carousel-item active"><img className="w-100 d-block" src="assets/img/arduinoide.png" alt="Slide Image"></div>
                                    <div className="carousel-item"><img className="w-100 d-block" src="assets/img/esp32.png" alt="Slide Image"></div>
                                </div>
                                <div><a className="carousel-control-prev" href="#carousel-6" role="button" data-bs-slide="prev"><span className="carousel-control-prev-icon"></span><span className="visually-hidden">Previous</span></a><a className="carousel-control-next" href="#carousel-6" role="button" data-bs-slide="next"><span className="carousel-control-next-icon"></span><span className="visually-hidden">Next</span></a></div>
                                <div className="carousel-indicators"><button type="button" data-bs-target="#carousel-6" data-bs-slide-to="0" className="active"></button> <button type="button" data-bs-target="#carousel-6" data-bs-slide-to="1"></button></div>
                            </div>
                            <div>
                                <div className="d-lg-flex d-xxl-flex justify-content-lg-end align-items-lg-center justify-content-xxl-end align-items-xxl-center" style="width: 30rem;text-align: right;">
                                    <h4 style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;text-align: center;margin-right: 2rem;">Rubber ducky USB</h4>
                                    <div className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center order-last ms-4 d-inline-block bs-icon xl" style="background: #cb1a2c;"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-dice-6" style="font-size: 24px;margin: 2px;">
                                            <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"></path>
                                            <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
                                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-dice-2" style="font-size: 24px;margin: 2px;">
                                            <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"></path>
                                            <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
                                        </svg></div>
                                </div>
                                <p className="d-xxl-flex justify-content-xxl-end" style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;width: 30rem;">Long before I started programming, I heard about hacking, which sparked my interest. When I revisited this interest, I began by creating a simple hacking tool using an Arduino ESP32. This initial project led me to develop a device that could communicate without sending suspicious activity. I put this project on hold until I got a Raspberry Pi Pico to continue the work.</p>
                                <h1 style="font-size: 20px;color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Skills used:</h1>
                                <ul>
                                    <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Arduino IDE</li>
                                    <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">C++</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div><sub className="d-lg-flex justify-content-lg-end" style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;text-align: right;">23/05/2024 - 25/05/2024 (Or the future)</sub>
                        <hr className="my-5" style="color: var(--bs-body-bg);background: var(--bs-body-bg);">
                    </div>
                </div>
            </div>
            <h1 style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;text-align: center;margin: 4rem 0px 3rem 0px;">E<span style="border-bottom: 6px solid #ef5868 ;">xperiences&nbsp;</span></h1>
            <h1 style="font-size: 18px;margin: 0px 10px 0px 10px;color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Study software developer - KW1C</h1><sub style="margin: 0px 10px 0px 10px;color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">08/2022 - now</sub>
            <div className="d-lg-flex d-xxl-flex justify-content-lg-center align-items-lg-center align-items-xxl-start">
                <div>
                    <p style="margin: 0px 10px 0px 10px;color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">At KW1C, I am dedicated to becoming a skilled full-stack developer capable of creating powerful applications for web, mobile, and desktop platforms. Here is a summary on what ive learned.</p>
                    <ul>
                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Gained proficiency in programming languages and frameworks including HTML, CSS, JavaScript, PHP, C#, .NET, MySQL, Tailwind CSS, Node.js, and Vue.js.</li>
                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Learned to design with: Figma &amp; Visio</li>
                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Enhanced my project management skills using tools such as Trello and Azure DevOps.</li>
                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Hosted websites and databases using VMware, Windows Server, Linux Ubuntu, SSMS, and Azure.</li>
                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Learned to plan, develop, test, debug, and deliver software as a standalone developer or as part of a team.</li>
                    </ul>
                </div>
                <div className="d-flex d-md-flex justify-content-center justify-content-md-center"><img className="float-lg-end" src="assets/img/kw1c.png" style="width: 250px;position: relative;margin-right: 0;margin-left: 0;"></div>
            </div>
            <h1 style="font-size: 18px;margin: 0px 10px 0px 10px;color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Internship at Holding the Drones</h1><sub style="margin: 0px 10px 0px 10px;color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">08/2023 - 02/2024</sub>
            <div className="d-lg-flex d-xxl-flex justify-content-lg-center align-items-lg-center align-items-xxl-start">
                <div>
                    <p style="margin: 0px 10px 0px 10px;color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">During my internship at Holding the Drones, I focused on coding multiple full-stack websites and applications, supporting their software environment for drones.</p>
                    <ul>
                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Further programmed with: PHP, HTML, CSS, JavaScript, MySQL, Node.js &amp; ReactJS.</li>
                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Design with: Figma.</li>
                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Planned with: Trello &amp; Excel.</li>
                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Hosted websites and databases using Linux, Docker, Apache, FileZilla, Nginx &amp; Putty.</li>
                    </ul>
                </div>
                <div className="d-flex d-md-flex d-lg-flex justify-content-center justify-content-md-center justify-content-lg-center"><img className="float-lg-end" src="assets/img/Logohtd.jpg" style="width: 250px;position: relative;"></div>
            </div>
            <h1 style="font-size: 18px;margin: 0px 10px 0px 10px;color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Parttime Junior software developer at Holding the Drones</h1><sub style="margin: 0px 10px 0px 10px;color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">08/2023 - 02/2024</sub>
            <div className="d-lg-flex d-xxl-flex justify-content-lg-center align-items-lg-center align-items-xxl-start">
                <div>
                    <p style="margin: 0px 10px 0px 10px;color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">After completing my internship, I received an offer to continue developing applications for Holding the Drones to support their software environment.</p>
                    <ul>
                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Further programmed with: PHP, HTML, CSS, JavaScript, MySQL, Node.js, ReactJS, ExpressJS &amp; Tailwind CSS.</li>
                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Design with: Figma.</li>
                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Planned with: Trello &amp; Excel.</li>
                        <li style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">Hosted websites and databases using Linux, Docker, Apache, FileZilla, Nginx &amp; Putty.</li>
                    </ul>
                </div>
                <div className="d-flex d-md-flex justify-content-center justify-content-md-center"><img className="float-lg-end" src="assets/img/Logohtd.jpg" style="width: 250px;position: relative;"></div>
            </div>
        </div>
        <section className="position-relative py-4 py-xl-5">
            <div className="container position-relative">
                <div className="row d-flex justify-content-center" style="border-color: rgba(33,37,41,0);">
                    <div className="col-md-8 col-lg-6 col-xl-5 col-xxl-4">
                        <div className="card mb-5" style="background: #21252900;border-color: rgba(33,37,41,0);">
                            <div className="card-body p-sm-5">
                                <h2 className="text-center mb-4" style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;">C<span style="border-bottom: 6px solid #ef5868 ;">ontact&nbsp;</span></h2>
                                <p style="color: var(--bs-body-bg);font-family: 'Doppio One', sans-serif;text-align: center;">Have a question or other interests? Leave your details, and I'll get back to you as soon as possible.</p>
                                <form method="post">
                                    <div className="mb-3"><input className="form-control" type="text" id="name-2" name="name" placeholder="Name:" style="font-family: 'Doppio One', sans-serif;background: var(--bs-secondary-color);color: var(--bs-body-bg);border-color: var(--bs-danger);--bs-body-color: var(--bs-secondary-bg);"></div>
                                    <div className="mb-3"><input className="form-control" type="email" id="email-2" name="email" placeholder="Email:" style="font-family: 'Doppio One', sans-serif;background: var(--bs-secondary-color);color: var(--bs-body-bg);border-color: var(--bs-danger);"></div>
                                    <div className="mb-3"><textarea className="form-control" id="message-2" name="message" rows="6" placeholder="Your message:" style="font-family: 'Doppio One', sans-serif;background: var(--bs-secondary-color);color: var(--bs-body-bg);border-color: var(--bs-danger);"></textarea></div>
                                    <div><button className="btn btn-primary d-block w-100" type="submit" style="background: #cb1a2c;border-color: #cb1a2c;font-family: 'Doppio One', sans-serif;">Send </button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="footer-2" style="color: var(--bs-secondary-bg);background: var(--bs-tertiary-color);">
            <div className="container" style="color: var(--bs-body-bg);">
                <div className="row">
                    <div className="col-8 col-sm-6 col-md-6">
                        <p className="text-start" style="margin-top: 5%;margin-bottom: 3%;color: var(--bs-secondary-bg);font-family: 'Doppio One', sans-serif;">© Copyright Othniel van de Pol 2023. All rights Reserved.</p>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6">
                        <p className="text-end" style="margin-top: 5%;margin-bottom: 8%%;font-size: 1em;color: var(--bs-secondary-bg);font-family: 'Doppio One', sans-serif;">Contact</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <body  data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="51">
                {/* <!-- Spinner Start --> */}
                 {/* <div
                    id="spinner"
                    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
                >
                    <div
                        className="spinner-border text-primary"
                        style={{ width: "3rem", height: "3rem" }}
                        role="status"
                    >
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>  */}

                {/* <!-- Navbar Start --> */}
                <nav
                    className="navbar navbar-expand-lg bg-white navbar-light bg-dark fixed-top shadow py-lg-0 px-4 px-lg-5 wow fadeIn"
                    data-wow-delay="0.1s"
                >
                    <a
                        href="index.html"
                        className="navbar-brand d-block d-lg-none"
                    >
                        <h1 className="text-primary fw-bold m-0">ProMan</h1>
                    </a>
                    <button
                        type="button"
                        className="navbar-toggler"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse justify-content-between py-4 py-lg-0"
                        id="navbarCollapse"
                    >
                        <div className="navbar-nav ms-auto py-0">
                            <a
                                href="#home"
                                className="nav-item nav-link active"
                            >
                                Home
                            </a>
                            <a href="#about" className="nav-item nav-link">
                                About
                            </a>
                            <a href="#skill" className="nav-item nav-link">
                                Skills
                            </a>
                            <a href="#service" className="nav-item nav-link">
                                Services
                            </a>
                        </div>
                        <a
                            href="index.html"
                            className="navbar-brand bg-secondary py-3 px-4 mx-3 d-none d-lg-block"
                        >
                            <h1 className="text-primary fw-bold m-0">ProMan</h1>
                        </a>
                        <div className="navbar-nav me-auto py-0">
                            <a href="#project" className="nav-item nav-link">
                                Projects
                            </a>
                            <a href="#team" className="nav-item nav-link">
                                Team
                            </a>
                            <a
                                href="#testimonial"
                                className="nav-item nav-link"
                            >
                                Testimonial
                            </a>
                            <a href="#contact" className="nav-item nav-link">
                                Contact
                            </a>
                        </div>
                    </div>
                </nav>

                {/* <!-- Header Start --> */}
                <div className="container-fluid bg-light my-6 mt-0" id="home">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 py-6 pb-0 pt-lg-0">
                                <h3 className="text-primary mb-3">I'm</h3>
                                <h1 className="display-3 mb-3">Kate Winslet</h1>
                                <h2 className="typed-text-output d-inline"></h2>
                                <div className="typed-text d-none">
                                    Web Designer, Web Developer, Front End
                                    Developer, Apps Designer, Apps Developer
                                </div>
                                <div className="d-flex align-items-center pt-5">
                                    <a
                                        href="#"
                                        className="btn btn-primary py-3 px-4 me-5"
                                    >
                                        Download CV
                                    </a>
                                    <button
                                        type="button"
                                        className="btn-play"
                                        data-bs-toggle="modal"
                                        data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                                        data-bs-target="#videoModal"
                                    >
                                        <span></span>
                                    </button>
                                    <h5 className="ms-4 mb-0 d-none d-sm-block">
                                        Play Video
                                    </h5>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <img
                                    className="img-fluid"
                                    src="img/profile.png"
                                    alt="Kate Winslet"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Video Modal Start --> */}
                <div
                    className="modal modal-video fade"
                    id="videoModal"
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content rounded-0">
                            <div className="modal-header">
                                <h3
                                    className="modal-title"
                                    id="exampleModalLabel"
                                >
                                    Youtube Video
                                </h3>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                {/* 16:9 aspect ratio */}
                                <div className="ratio ratio-16x9">
                                    <iframe
                                        className="embed-responsive-item"
                                        src=""
                                        id="video"
                                        allowFullScreen
                                        allow="autoplay"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- About Start --> */}
                <div className="container-xxl py-6" id="about">
                    <div className="container">
                        <div className="row g-5">
                            <div
                                className="col-lg-6 wow fadeInUp"
                                data-wow-delay="0.1s"
                            >
                                <div className="d-flex align-items-center mb-5">
                                    <div className="years flex-shrink-0 text-center me-4">
                                        <h1 className="display-1 mb-0">15</h1>
                                        <h5 className="mb-0">Years</h5>
                                    </div>
                                    <h3 className="lh-base mb-0">
                                        of working experience as a web designer
                                        & developer
                                    </h3>
                                </div>
                                <p className="mb-4">
                                    Stet no et lorem dolor et diam, amet duo ut
                                    dolore vero eos. No stet est diam rebum amet
                                    diam ipsum. Clita clita labore, dolor duo
                                    nonumy clita sit at, sed sit sanctus dolor
                                    eos.
                                </p>
                                <p className="mb-3">
                                    <i className="far fa-check-circle text-primary me-3"></i>
                                    Afordable Prices
                                </p>
                                <p className="mb-3">
                                    <i className="far fa-check-circle text-primary me-3"></i>
                                    High Quality Product
                                </p>
                                <p className="mb-3">
                                    <i className="far fa-check-circle text-primary me-3"></i>
                                    On Time Project Delivery
                                </p>
                                <a
                                    className="btn btn-primary py-3 px-5 mt-3"
                                    href="#"
                                >
                                    Read More
                                </a>
                            </div>
                            <div
                                className="col-lg-6 wow fadeInUp"
                                data-wow-delay="0.5s"
                            >
                                <div className="row g-3 mb-4">
                                    <div className="col-sm-6">
                                        <img
                                            className="img-fluid rounded"
                                            src="img/about-1.jpg"
                                            alt="About Image 1"
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <img
                                            className="img-fluid rounded"
                                            src="img/about-2.jpg"
                                            alt="About Image 2"
                                        />
                                    </div>
                                </div>
                                <div className="d-flex align-items-center mb-3">
                                    <h5 className="border-end pe-3 me-3 mb-0">
                                        Happy Clients
                                    </h5>
                                    <h2
                                        className="text-primary fw-bold mb-0"
                                        data-toggle="counter-up"
                                    >
                                        1234
                                    </h2>
                                </div>
                                <p className="mb-4">
                                    Stet no et lorem dolor et diam, amet duo ut
                                    dolore vero eos. No stet est diam amet diam
                                    ipsum clita labore dolor duo clita.
                                </p>
                                <div className="d-flex align-items-center mb-3">
                                    <h5 className="border-end pe-3 me-3 mb-0">
                                        Projects Completed
                                    </h5>
                                    <h2
                                        className="text-primary fw-bold mb-0"
                                        data-toggle="counter-up"
                                    >
                                        1234
                                    </h2>
                                </div>
                                <p className="mb-0">
                                    Stet no et lorem dolor et diam, amet duo ut
                                    dolore vero eos. No stet est diam amet diam
                                    ipsum clita labore dolor duo clita.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Expertise Start --> */}
                <div className="container-xxl py-6 pb-5" id="skill">
                    <div className="container">
                        <div className="row g-5">
                            {/* Section Skills & Experience */}
                            <div
                                className="col-lg-6 wow fadeInUp"
                                data-wow-delay="0.1s"
                            >
                                <h1 className="display-5 mb-5">
                                    Skills & Experience
                                </h1>
                                <p className="mb-4">
                                    Stet no et lorem dolor et diam, amet duo ut
                                    dolore vero eos. No stet est diam rebum amet
                                    diam ipsum clita dolor duo clita sit.
                                </p>
                                <h3 className="mb-4">My Skills</h3>
                                <div className="row align-items-center">
                                    {/* Left Column for skills */}
                                    <div className="col-md-6">
                                        <div className="skill mb-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="font-weight-bold">
                                                    HTML
                                                </h6>
                                                <h6 className="font-weight-bold">
                                                    95%
                                                </h6>
                                            </div>
                                            <div className="progress">
                                                <div
                                                    className="progress-bar bg-primary"
                                                    role="progressbar"
                                                    aria-valuenow="95"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="skill mb-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="font-weight-bold">
                                                    CSS
                                                </h6>
                                                <h6 className="font-weight-bold">
                                                    85%
                                                </h6>
                                            </div>
                                            <div className="progress">
                                                <div
                                                    className="progress-bar bg-warning"
                                                    role="progressbar"
                                                    aria-valuenow="85"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="skill mb-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="font-weight-bold">
                                                    PHP
                                                </h6>
                                                <h6 className="font-weight-bold">
                                                    90%
                                                </h6>
                                            </div>
                                            <div className="progress">
                                                <div
                                                    className="progress-bar bg-danger"
                                                    role="progressbar"
                                                    aria-valuenow="90"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column for skills */}
                                    <div className="col-md-6">
                                        <div className="skill mb-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="font-weight-bold">
                                                    Javascript
                                                </h6>
                                                <h6 className="font-weight-bold">
                                                    90%
                                                </h6>
                                            </div>
                                            <div className="progress">
                                                <div
                                                    className="progress-bar bg-danger"
                                                    role="progressbar"
                                                    aria-valuenow="90"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="skill mb-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="font-weight-bold">
                                                    Angular JS
                                                </h6>
                                                <h6 className="font-weight-bold">
                                                    95%
                                                </h6>
                                            </div>
                                            <div className="progress">
                                                <div
                                                    className="progress-bar bg-dark"
                                                    role="progressbar"
                                                    aria-valuenow="95"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                        <div className="skill mb-4">
                                            <div className="d-flex justify-content-between">
                                                <h6 className="font-weight-bold">
                                                    Wordpress
                                                </h6>
                                                <h6 className="font-weight-bold">
                                                    85%
                                                </h6>
                                            </div>
                                            <div className="progress">
                                                <div
                                                    className="progress-bar bg-info"
                                                    role="progressbar"
                                                    aria-valuenow="85"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right column for Experience and Education tabs */}
                            <div
                                className="col-lg-6 wow fadeInUp"
                                data-wow-delay="0.5s"
                            >
                                <ul className="nav nav-pills rounded border border-2 border-primary mb-5">
                                    <li className="nav-item w-50">
                                        <button
                                            className="nav-link w-100 py-3 fs-5 active"
                                            data-bs-toggle="pill"
                                            href="#tab-1"
                                        >
                                            Experience
                                        </button>
                                    </li>
                                    <li className="nav-item w-50">
                                        <button
                                            className="nav-link w-100 py-3 fs-5"
                                            data-bs-toggle="pill"
                                            href="#tab-2"
                                        >
                                            Education
                                        </button>
                                    </li>
                                </ul>

                                <div className="tab-content">
                                    {/* Experience Tab */}
                                    <div
                                        id="tab-1"
                                        className="tab-pane fade show p-0 active"
                                    >
                                        <div className="row gy-5 gx-4">
                                            <div className="col-sm-6">
                                                <h5>UI Designer</h5>
                                                <hr className="text-primary my-2" />
                                                <p className="text-primary mb-1">
                                                    2000 - 2045
                                                </p>
                                                <h6 className="mb-0">
                                                    Apex Software Inc
                                                </h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <h5>Product Designer</h5>
                                                <hr className="text-primary my-2" />
                                                <p className="text-primary mb-1">
                                                    2000 - 2045
                                                </p>
                                                <h6 className="mb-0">
                                                    Apex Software Inc
                                                </h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <h5>Web Designer</h5>
                                                <hr className="text-primary my-2" />
                                                <p className="text-primary mb-1">
                                                    2000 - 2045
                                                </p>
                                                <h6 className="mb-0">
                                                    Apex Software Inc
                                                </h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <h5>Apps Designer</h5>
                                                <hr className="text-primary my-2" />
                                                <p className="text-primary mb-1">
                                                    2000 - 2045
                                                </p>
                                                <h6 className="mb-0">
                                                    Apex Software Inc
                                                </h6>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Education Tab */}
                                    <div
                                        id="tab-2"
                                        className="tab-pane fade show p-0"
                                    >
                                        <div className="row gy-5 gx-4">
                                            <div className="col-sm-6">
                                                <h5>UI Design Course</h5>
                                                <hr className="text-primary my-2" />
                                                <p className="text-primary mb-1">
                                                    2000 - 2045
                                                </p>
                                                <h6 className="mb-0">
                                                    Cambridge University
                                                </h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <h5>IOS Development</h5>
                                                <hr className="text-primary my-2" />
                                                <p className="text-primary mb-1">
                                                    2000 - 2045
                                                </p>
                                                <h6 className="mb-0">
                                                    Cambridge University
                                                </h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <h5>Web Design</h5>
                                                <hr className="text-primary my-2" />
                                                <p className="text-primary mb-1">
                                                    2000 - 2045
                                                </p>
                                                <h6 className="mb-0">
                                                    Cambridge University
                                                </h6>
                                            </div>
                                            <div className="col-sm-6">
                                                <h5>Apps Design</h5>
                                                <hr className="text-primary my-2" />
                                                <p className="text-primary mb-1">
                                                    2000 - 2045
                                                </p>
                                                <h6 className="mb-0">
                                                    Cambridge University
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Service Start --> */}
                <div
                    className="container-fluid bg-light my-5 py-6"
                    id="service"
                >
                    <div className="container">
                        {/* Section Header */}
                        <div
                            className="row g-5 mb-5 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <div className="col-lg-6">
                                <h1 className="display-5 mb-0">My Services</h1>
                            </div>
                            <div className="col-lg-6 text-lg-end">
                                <a
                                    className="btn btn-primary py-3 px-5"
                                    href=""
                                >
                                    Hire Me
                                </a>
                            </div>
                        </div>

                        {/* Services List */}
                        <div className="row g-4">
                            {/* Service 1: Creative Design */}
                            <div
                                className="col-lg-6 wow fadeInUp"
                                data-wow-delay="0.1s"
                            >
                                <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                                    <div className="bg-icon flex-shrink-0 mb-3">
                                        <i className="fa fa-crop-alt fa-2x text-dark"></i>
                                    </div>
                                    <div className="ms-sm-4">
                                        <h4 className="mb-3">
                                            Creative Design
                                        </h4>
                                        <h6 className="mb-3">
                                            Start from{" "}
                                            <span className="text-primary">
                                                $199
                                            </span>
                                        </h6>
                                        <span>
                                            Stet lorem dolor diam amet vero eos.
                                            No stet est diam amet diam ipsum.
                                            Clita dolor duo clita sit sed sit
                                            dolor eos.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Service 2: Graphic Design */}
                            <div
                                className="col-lg-6 wow fadeInUp"
                                data-wow-delay="0.3s"
                            >
                                <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                                    <div className="bg-icon flex-shrink-0 mb-3">
                                        <i className="fa fa-code-branch fa-2x text-dark"></i>
                                    </div>
                                    <div className="ms-sm-4">
                                        <h4 className="mb-3">Graphic Design</h4>
                                        <h6 className="mb-3">
                                            Start from{" "}
                                            <span className="text-primary">
                                                $199
                                            </span>
                                        </h6>
                                        <span>
                                            Stet lorem dolor diam amet vero eos.
                                            No stet est diam amet diam ipsum.
                                            Clita dolor duo clita sit sed sit
                                            dolor eos.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Service 3: Web Design */}
                            <div
                                className="col-lg-6 wow fadeInUp"
                                data-wow-delay="0.1s"
                            >
                                <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                                    <div className="bg-icon flex-shrink-0 mb-3">
                                        <i className="fa fa-code fa-2x text-dark"></i>
                                    </div>
                                    <div className="ms-sm-4">
                                        <h4 className="mb-3">Web Design</h4>
                                        <h6 className="mb-3">
                                            Start from{" "}
                                            <span className="text-primary">
                                                $199
                                            </span>
                                        </h6>
                                        <span>
                                            Stet lorem dolor diam amet vero eos.
                                            No stet est diam amet diam ipsum.
                                            Clita dolor duo clita sit sed sit
                                            dolor eos.
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Service 4: UI/UX Design */}
                            <div
                                className="col-lg-6 wow fadeInUp"
                                data-wow-delay="0.3s"
                            >
                                <div className="service-item d-flex flex-column flex-sm-row bg-white rounded h-100 p-4 p-lg-5">
                                    <div className="bg-icon flex-shrink-0 mb-3">
                                        <i className="fa fa-laptop-code fa-2x text-dark"></i>
                                    </div>
                                    <div className="ms-sm-4">
                                        <h4 className="mb-3">UI/UX Design</h4>
                                        <h6 className="mb-3">
                                            Start from{" "}
                                            <span className="text-primary">
                                                $199
                                            </span>
                                        </h6>
                                        <span>
                                            Stet lorem dolor diam amet vero eos.
                                            No stet est diam amet diam ipsum.
                                            Clita dolor duo clita sit sed sit
                                            dolor eos.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Projects Start --> */}
                <div className="container-xxl py-6 pt-5" id="project">
                    <div className="container">
                        <div
                            className="row g-5 mb-5 align-items-center wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <div className="col-lg-6">
                                <h1 className="display-5 mb-0">My Projects</h1>
                            </div>
                            <div className="col-lg-6 text-lg-end">
                                <ul
                                    className="list-inline mx-n3 mb-0"
                                    id="portfolio-flters"
                                >
                                    <li className="mx-3 active" data-filter="*">
                                        All Projects
                                    </li>
                                    <li className="mx-3" data-filter=".first">
                                        UI/UX Design
                                    </li>
                                    <li className="mx-3" data-filter=".second">
                                        Graphic Design
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div
                            className="row g-4 portfolio-container wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <div className="col-lg-4 col-md-6 portfolio-item first">
                                <div className="portfolio-img rounded overflow-hidden">
                                    <img
                                        className="img-fluid"
                                        src="img/project-1.jpg"
                                        alt="Project 1"
                                    />
                                    <div className="portfolio-btn">
                                        <a
                                            className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                                            href="img/project-1.jpg"
                                            data-lightbox="portfolio"
                                        >
                                            <i className="fa fa-eye"></i>
                                        </a>
                                        <a
                                            className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                                            href="#"
                                        >
                                            <i className="fa fa-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item second">
                                <div className="portfolio-img rounded overflow-hidden">
                                    <img
                                        className="img-fluid"
                                        src="img/project-2.jpg"
                                        alt="Project 2"
                                    />
                                    <div className="portfolio-btn">
                                        <a
                                            className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                                            href="img/project-2.jpg"
                                            data-lightbox="portfolio"
                                        >
                                            <i className="fa fa-eye"></i>
                                        </a>
                                        <a
                                            className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                                            href="#"
                                        >
                                            <i className="fa fa-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item first">
                                <div className="portfolio-img rounded overflow-hidden">
                                    <img
                                        className="img-fluid"
                                        src="img/project-3.jpg"
                                        alt="Project 3"
                                    />
                                    <div className="portfolio-btn">
                                        <a
                                            className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                                            href="img/project-3.jpg"
                                            data-lightbox="portfolio"
                                        >
                                            <i className="fa fa-eye"></i>
                                        </a>
                                        <a
                                            className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                                            href="#"
                                        >
                                            <i className="fa fa-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item second">
                                <div className="portfolio-img rounded overflow-hidden">
                                    <img
                                        className="img-fluid"
                                        src="img/project-4.jpg"
                                        alt="Project 4"
                                    />
                                    <div className="portfolio-btn">
                                        <a
                                            className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                                            href="img/project-4.jpg"
                                            data-lightbox="portfolio"
                                        >
                                            <i className="fa fa-eye"></i>
                                        </a>
                                        <a
                                            className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                                            href="#"
                                        >
                                            <i className="fa fa-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item first">
                                <div className="portfolio-img rounded overflow-hidden">
                                    <img
                                        className="img-fluid"
                                        src="img/project-5.jpg"
                                        alt="Project 5"
                                    />
                                    <div className="portfolio-btn">
                                        <a
                                            className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                                            href="img/project-5.jpg"
                                            data-lightbox="portfolio"
                                        >
                                            <i className="fa fa-eye"></i>
                                        </a>
                                        <a
                                            className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                                            href="#"
                                        >
                                            <i className="fa fa-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 portfolio-item second">
                                <div className="portfolio-img rounded overflow-hidden">
                                    <img
                                        className="img-fluid"
                                        src="img/project-6.jpg"
                                        alt="Project 6"
                                    />
                                    <div className="portfolio-btn">
                                        <a
                                            className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                                            href="img/project-6.jpg"
                                            data-lightbox="portfolio"
                                        >
                                            <i className="fa fa-eye"></i>
                                        </a>
                                        <a
                                            className="btn btn-lg-square btn-outline-secondary border-2 mx-1"
                                            href="#"
                                        >
                                            <i className="fa fa-link"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Team Start --> */}
                <div className="container-xxl py-6 pb-5" id="team">
                    <div className="container">
                        <div
                            className="row g-5 mb-5 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <div className="col-lg-6">
                                <h1 className="display-5 mb-0">Team Members</h1>
                            </div>
                            <div className="col-lg-6 text-lg-end">
                                <a
                                    className="btn btn-primary py-3 px-5"
                                    href="#"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                        <div className="row g-4">
                            <div
                                className="col-lg-4 col-md-6 wow fadeInUp"
                                data-wow-delay="0.1s"
                            >
                                <div className="team-item position-relative">
                                    <img
                                        className="img-fluid rounded"
                                        src="img/team-1.jpg"
                                        alt="Team Member 1"
                                    />
                                    <div className="team-text bg-white rounded-end p-4">
                                        <div>
                                            <h5>Full Name</h5>
                                            <span>Designer</span>
                                        </div>
                                        <i className="fa fa-arrow-right fa-2x text-primary"></i>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 wow fadeInUp"
                                data-wow-delay="0.3s"
                            >
                                <div className="team-item position-relative">
                                    <img
                                        className="img-fluid rounded"
                                        src="img/team-2.jpg"
                                        alt="Team Member 2"
                                    />
                                    <div className="team-text bg-white rounded-end p-4">
                                        <div>
                                            <h5>Full Name</h5>
                                            <span>Designer</span>
                                        </div>
                                        <i className="fa fa-arrow-right fa-2x text-primary"></i>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="col-lg-4 col-md-6 wow fadeInUp"
                                data-wow-delay="0.5s"
                            >
                                <div className="team-item position-relative">
                                    <img
                                        className="img-fluid rounded"
                                        src="img/team-3.jpg"
                                        alt="Team Member 3"
                                    />
                                    <div className="team-text bg-white rounded-end p-4">
                                        <div>
                                            <h5>Full Name</h5>
                                            <span>Designer</span>
                                        </div>
                                        <i className="fa fa-arrow-right fa-2x text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Testimonial Start --> */}
                <div
                    className="container-fluid bg-light py-5 my-5"
                    id="testimonial"
                >
                    <div className="container-fluid py-5">
                        <h1
                            className="display-5 text-center mb-5 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            Testimonial
                        </h1>
                        <div className="row justify-content-center">
                            <div className="col-lg-3 d-none d-lg-block">
                                <div className="testimonial-left h-100">
                                    <img
                                        className="img-fluid wow fadeIn"
                                        data-wow-delay="0.1s"
                                        src="img/testimonial-1.jpg"
                                        alt="Testimonial 1"
                                    />
                                    <img
                                        className="img-fluid wow fadeIn"
                                        data-wow-delay="0.3s"
                                        src="img/testimonial-2.jpg"
                                        alt="Testimonial 2"
                                    />
                                    <img
                                        className="img-fluid wow fadeIn"
                                        data-wow-delay="0.5s"
                                        src="img/testimonial-3.jpg"
                                        alt="Testimonial 3"
                                    />
                                </div>
                            </div>
                            <div
                                className="col-lg-6 wow fadeInUp"
                                data-wow-delay="0.5s"
                            >
                                <div className="owl-carousel testimonial-carousel">
                                    <div className="testimonial-item text-center">
                                        <div className="position-relative mb-5">
                                            <img
                                                className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
                                                src="img/testimonial-1.jpg"
                                                alt="Client 1"
                                            />
                                            <div className="testimonial-icon">
                                                <i className="fa fa-quote-left text-primary"></i>
                                            </div>
                                        </div>
                                        <p className="fs-5 fst-italic">
                                            Dolores sed duo clita tempor justo
                                            dolor et stet lorem kasd labore
                                            dolore lorem ipsum. At lorem lorem
                                            magna ut et, nonumy et labore et
                                            tempor diam tempor erat.
                                        </p>
                                        <hr className="w-25 mx-auto" />
                                        <h5>Client Name</h5>
                                        <span>Profession</span>
                                    </div>
                                    <div className="testimonial-item text-center">
                                        <div className="position-relative mb-5">
                                            <img
                                                className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
                                                src="img/testimonial-2.jpg"
                                                alt="Client 2"
                                            />
                                            <div className="testimonial-icon">
                                                <i className="fa fa-quote-left text-primary"></i>
                                            </div>
                                        </div>
                                        <p className="fs-5 fst-italic">
                                            Dolores sed duo clita tempor justo
                                            dolor et stet lorem kasd labore
                                            dolore lorem ipsum. At lorem lorem
                                            magna ut et, nonumy et labore et
                                            tempor diam tempor erat.
                                        </p>
                                        <hr className="w-25 mx-auto" />
                                        <h5>Client Name</h5>
                                        <span>Profession</span>
                                    </div>
                                    <div className="testimonial-item text-center">
                                        <div className="position-relative mb-5">
                                            <img
                                                className="img-fluid rounded-circle border border-secondary p-2 mx-auto"
                                                src="img/testimonial-3.jpg"
                                                alt="Client 3"
                                            />
                                            <div className="testimonial-icon">
                                                <i className="fa fa-quote-left text-primary"></i>
                                            </div>
                                        </div>
                                        <p className="fs-5 fst-italic">
                                            Dolores sed duo clita tempor justo
                                            dolor et stet lorem kasd labore
                                            dolore lorem ipsum. At lorem lorem
                                            magna ut et, nonumy et labore et
                                            tempor diam tempor erat.
                                        </p>
                                        <hr className="w-25 mx-auto" />
                                        <h5>Client Name</h5>
                                        <span>Profession</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 d-none d-lg-block">
                                <div className="testimonial-right h-100">
                                    <img
                                        className="img-fluid wow fadeIn"
                                        data-wow-delay="0.1s"
                                        src="img/testimonial-1.jpg"
                                        alt="Testimonial 1"
                                    />
                                    <img
                                        className="img-fluid wow fadeIn"
                                        data-wow-delay="0.3s"
                                        src="img/testimonial-2.jpg"
                                        alt="Testimonial 2"
                                    />
                                    <img
                                        className="img-fluid wow fadeIn"
                                        data-wow-delay="0.5s"
                                        src="img/testimonial-3.jpg"
                                        alt="Testimonial 3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Contact Start --> */}
                <div className="container-xxl pb-5" id="contact">
                    <div className="container py-5">
                        <div
                            className="row g-5 mb-5 wow fadeInUp"
                            data-wow-delay="0.1s"
                        >
                            <div className="col-lg-6">
                                <h1 className="display-5 mb-0">
                                    Let's Work Together
                                </h1>
                            </div>
                            <div className="col-lg-6 text-lg-end">
                                <a
                                    className="btn btn-primary py-3 px-5"
                                    href="#"
                                >
                                    Say Hello
                                </a>
                            </div>
                        </div>
                        <div className="row g-5">
                            <div
                                className="col-lg-5 col-md-6 wow fadeInUp"
                                data-wow-delay="0.1s"
                            >
                                <p className="mb-2">My office:</p>
                                <h3 className="fw-bold">
                                    123 Street, New York, USA
                                </h3>
                                <hr className="w-100" />
                                <p className="mb-2">Call me:</p>
                                <h3 className="fw-bold">+012 345 6789</h3>
                                <hr className="w-100" />
                                <p className="mb-2">Mail me:</p>
                                <h3 className="fw-bold">info@example.com</h3>
                                <hr className="w-100" />
                                <p className="mb-2">Follow me:</p>
                                <div className="d-flex pt-2">
                                    <a
                                        className="btn btn-square btn-primary me-2"
                                        href="#"
                                    >
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a
                                        className="btn btn-square btn-primary me-2"
                                        href="#"
                                    >
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a
                                        className="btn btn-square btn-primary me-2"
                                        href="#"
                                    >
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                    <a
                                        className="btn btn-square btn-primary me-2"
                                        href="#"
                                    >
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                            <div
                                className="col-lg-7 col-md-6 wow fadeInUp"
                                data-wow-delay="0.5s"
                            >
                                <p className="mb-4">
                                    The contact form is currently inactive. Get
                                    a functional and working contact form with
                                    Ajax & PHP in a few minutes. Just copy and
                                    paste the files, add a little code, and
                                    you're done.{" "}
                                    <a href="https://htmlcodex.com/contact-form">
                                        Download Now
                                    </a>
                                    .
                                </p>
                                <form>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="name"
                                                    placeholder="Your Name"
                                                />
                                                <label htmlFor="name">
                                                    Your Name
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    placeholder="Your Email"
                                                />
                                                <label htmlFor="email">
                                                    Your Email
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="subject"
                                                    placeholder="Subject"
                                                />
                                                <label htmlFor="subject">
                                                    Subject
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Leave a message here"
                                                    id="message"
                                                    style={{ height: "100px" }}
                                                ></textarea>
                                                <label htmlFor="message">
                                                    Message
                                                </label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button
                                                className="btn btn-primary py-3 px-5"
                                                type="submit"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Copyright Start */}
                <div className="container-fluid bg-dark text-white py-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy;{" "}
                                <a
                                    className="border-bottom text-secondary"
                                    href="#"
                                >
                                    Your Site Name
                                </a>
                                , All Rights Reserved.
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                {/* Designed By and Distributed By links */}
                                Designed By{" "}
                                <a
                                    className="border-bottom text-secondary"
                                    href="https://htmlcodex.com"
                                >
                                    HTML Codex
                                </a>
                                <br />
                                Distributed By:{" "}
                                <a
                                    className="border-bottom"
                                    href="https://themewagon.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    ThemeWagon
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back to Top Button */}
                <a
                    href="#"
                    className="btn btn-lg btn-primary btn-lg-square back-to-top"
                >
                    <i className="bi bi-arrow-up"></i>
                </a>
            </body>
        </>
    );
}

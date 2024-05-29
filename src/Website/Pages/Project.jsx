import React from 'react'
import Header2 from '../Components/Header2'
import Footer from '../Components/Footer'


function Project() {




    return (
        <div>
            <Header2/>
            <div>
                {/* Page Header Start */}
                <div className="container-fluid bg-primary py-5 mb-5">
                    <div className="container py-5">
                        <div className="row align-items-center py-4">
                            <div className="col-md-6 text-center text-md-left">
                                <h1 className="display-4 mb-4 mb-md-0 text-secondary text-uppercase">Project</h1>
                            </div>
                            <div className="col-md-6 text-center text-md-right">
                                <div className="d-inline-flex align-items-center">
                                    <a className="btn btn-sm btn-outline-light" href>Home</a>
                                    <i className="fas fa-angle-double-right text-light mx-2" />
                                    <a className="btn btn-sm btn-outline-light disabled" href>Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Page Header End */}
                {/* Portfolio Start */}
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="row align-items-end mb-4">
                            <div className="col-lg-6">
                                <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Our Projects</h6>
                                <h1 className="section-title mb-3">Visit Our Awesome Cleaning Projects</h1>
                            </div>
                            <div className="col-lg-6 text-center text-lg-right">
                                <ul className="list-inline mb-2" id="portfolio-flters">
                                    <li className="btn btn-sm btn-outline-primary m-1 active" data-filter="*">All</li>
                                    <li className="btn btn-sm btn-outline-primary m-1" data-filter=".first">Complete</li>
                                    <li className="btn btn-sm btn-outline-primary m-1" data-filter=".second">Running</li>
                                    <li className="btn btn-sm btn-outline-primary m-1" data-filter=".third">Upcoming</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row m-0 portfolio-container">
                            <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item first">
                                <div className="position-relative overflow-hidden">
                                    <div className="portfolio-img">
                                        <img className="img-fluid w-100" src="website/img/portfolio-1.jpg" alt />
                                    </div>
                                    <div className="portfolio-text bg-primary">
                                        <h4 className="font-weight-bold mb-4">Project Name</h4>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <a className="btn btn-sm btn-secondary m-1" href>
                                                <i className="fa fa-link" />
                                            </a>
                                            <a className="btn btn-sm btn-secondary m-1" href="website/img/portfolio-1.jpg" data-lightbox="portfolio">
                                                <i className="fa fa-eye" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item second">
                                <div className="position-relative overflow-hidden">
                                    <div className="portfolio-img">
                                        <img className="img-fluid w-100" src="website/img/portfolio-2.jpg" alt />
                                    </div>
                                    <div className="portfolio-text bg-primary">
                                        <h4 className="font-weight-bold mb-4">Project Name</h4>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <a className="btn btn-sm btn-secondary m-1" href>
                                                <i className="fa fa-link" />
                                            </a>
                                            <a className="btn btn-sm btn-secondary m-1" href="website/img/portfolio-2.jpg" data-lightbox="portfolio">
                                                <i className="fa fa-eye" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item third">
                                <div className="position-relative overflow-hidden">
                                    <div className="portfolio-img">
                                        <img className="img-fluid w-100" src="website/img/portfolio-3.jpg" alt />
                                    </div>
                                    <div className="portfolio-text bg-primary">
                                        <h4 className="font-weight-bold mb-4">Project Name</h4>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <a className="btn btn-sm btn-secondary m-1" href>
                                                <i className="fa fa-link" />
                                            </a>
                                            <a className="btn btn-sm btn-secondary m-1" href="website/img/portfolio-3.jpg" data-lightbox="portfolio">
                                                <i className="fa fa-eye" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item first">
                                <div className="position-relative overflow-hidden">
                                    <div className="portfolio-img">
                                        <img className="img-fluid w-100" src="website/img/portfolio-4.jpg" alt />
                                    </div>
                                    <div className="portfolio-text bg-primary">
                                        <h4 className="font-weight-bold mb-4">Project Name</h4>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <a className="btn btn-sm btn-secondary m-1" href>
                                                <i className="fa fa-link" />
                                            </a>
                                            <a className="btn btn-sm btn-secondary m-1" href="website/img/portfolio-4.jpg" data-lightbox="portfolio">
                                                <i className="fa fa-eye" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item second">
                                <div className="position-relative overflow-hidden">
                                    <div className="portfolio-img">
                                        <img className="img-fluid w-100" src="website/img/portfolio-5.jpg" alt />
                                    </div>
                                    <div className="portfolio-text bg-primary">
                                        <h4 className="font-weight-bold mb-4">Project Name</h4>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <a className="btn btn-sm btn-secondary m-1" href>
                                                <i className="fa fa-link" />
                                            </a>
                                            <a className="btn btn-sm btn-secondary m-1" href="website/img/portfolio-5.jpg" data-lightbox="portfolio">
                                                <i className="fa fa-eye" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item third">
                                <div className="position-relative overflow-hidden">
                                    <div className="portfolio-img">
                                        <img className="img-fluid w-100" src="website/img/portfolio-6.jpg" alt />
                                    </div>
                                    <div className="portfolio-text bg-primary">
                                        <h4 className="font-weight-bold mb-4">Project Name</h4>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <a className="btn btn-sm btn-secondary m-1" href>
                                                <i className="fa fa-link" />
                                            </a>
                                            <a className="btn btn-sm btn-secondary m-1" href="website/img/portfolio-6.jpg" data-lightbox="portfolio">
                                                <i className="fa fa-eye" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Portfolio End */}
            </div>
            <Footer/>


        </div>
    )
}

export default Project
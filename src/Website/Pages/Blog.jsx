import React from 'react'
import Header2 from '../Components/Header2'
import Footer from '../Components/Footer'

function Blog() {
    return (
        <div>
            <Header2 />
            {/* Page Header Start */}
            <div className="container-fluid bg-primary py-5 mb-5">
                <div className="container py-5">
                    <div className="row align-items-center py-4">
                        <div className="col-md-6 text-center text-md-left">
                            <h1 className="display-4 mb-4 mb-md-0 text-secondary text-uppercase">Blog</h1>
                        </div>
                        <div className="col-md-6 text-center text-md-right">
                            <div className="d-inline-flex align-items-center">
                                <a className="btn btn-sm btn-outline-light" href>Home</a>
                                <i className="fas fa-angle-double-right text-light mx-2" />
                                <a className="btn btn-sm btn-outline-light disabled" href>Blog</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Header End */}

            {/* Blog Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="row align-items-end mb-4">
                        <div className="col-lg-6">
                            <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Latest Blog</h6>
                            <h1 className="section-title mb-3">Latest Articles From Our Blog Post</h1>
                        </div>
                        <div className="col-lg-6">
                            <h4 className="font-weight-normal text-muted mb-3">Eirmod kasd duo eos et magna, diam dolore stet sea clita sit ea erat lorem. Ipsum eos ipsum magna lorem stet</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="position-relative mb-4">
                                <img className="img-fluid rounded w-100" src="website/img/blog-1.jpg" alt />
                                <div className="blog-date">
                                    <h4 className="font-weight-bold mb-n1">01</h4>
                                    <small className="text-white text-uppercase">Jan</small>
                                </div>
                            </div>
                            <div className="d-flex mb-2">
                                <a className="text-secondary text-uppercase font-weight-medium" href>Admin</a>
                                <span className="text-primary px-2">|</span>
                                <a className="text-secondary text-uppercase font-weight-medium" href>Cleaning</a>
                            </div>
                            <h5 className="font-weight-medium mb-2">Rebum lorem eos ipsum diam</h5>
                            <p className="mb-4">Dolor justo sea kasd lorem clita justo no diam amet. Kasd magna dolor amet</p>
                            <a className="btn btn-sm btn-primary py-2" href>Read More</a>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="position-relative mb-4">
                                <img className="img-fluid rounded w-100" src="website/img/blog-2.jpg" alt />
                                <div className="blog-date">
                                    <h4 className="font-weight-bold mb-n1">01</h4>
                                    <small className="text-white text-uppercase">Jan</small>
                                </div>
                            </div>
                            <div className="d-flex mb-2">
                                <a className="text-secondary text-uppercase font-weight-medium" href>Admin</a>
                                <span className="text-primary px-2">|</span>
                                <a className="text-secondary text-uppercase font-weight-medium" href>Cleaning</a>
                            </div>
                            <h5 className="font-weight-medium mb-2">Rebum lorem eos ipsum diam</h5>
                            <p className="mb-4">Dolor justo sea kasd lorem clita justo no diam amet. Kasd magna dolor amet</p>
                            <a className="btn btn-sm btn-primary py-2" href>Read More</a>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="position-relative mb-4">
                                <img className="img-fluid rounded w-100" src="website/img/blog-3.jpg" alt />
                                <div className="blog-date">
                                    <h4 className="font-weight-bold mb-n1">01</h4>
                                    <small className="text-white text-uppercase">Jan</small>
                                </div>
                            </div>
                            <div className="d-flex mb-2">
                                <a className="text-secondary text-uppercase font-weight-medium" href>Admin</a>
                                <span className="text-primary px-2">|</span>
                                <a className="text-secondary text-uppercase font-weight-medium" href>Cleaning</a>
                            </div>
                            <h5 className="font-weight-medium mb-2">Rebum lorem eos ipsum diam</h5>
                            <p className="mb-4">Dolor justo sea kasd lorem clita justo no diam amet. Kasd magna dolor amet</p>
                            <a className="btn btn-sm btn-primary py-2" href>Read More</a>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="position-relative mb-4">
                                <img className="img-fluid rounded w-100" src="website/img/blog-2.jpg" alt />
                                <div className="blog-date">
                                    <h4 className="font-weight-bold mb-n1">01</h4>
                                    <small className="text-white text-uppercase">Jan</small>
                                </div>
                            </div>
                            <div className="d-flex mb-2">
                                <a className="text-secondary text-uppercase font-weight-medium" href>Admin</a>
                                <span className="text-primary px-2">|</span>
                                <a className="text-secondary text-uppercase font-weight-medium" href>Cleaning</a>
                            </div>
                            <h5 className="font-weight-medium mb-2">Rebum lorem eos ipsum diam</h5>
                            <p className="mb-4">Dolor justo sea kasd lorem clita justo no diam amet. Kasd magna dolor amet</p>
                            <a className="btn btn-sm btn-primary py-2" href>Read More</a>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="position-relative mb-4">
                                <img className="img-fluid rounded w-100" src="website/img/blog-3.jpg" alt />
                                <div className="blog-date">
                                    <h4 className="font-weight-bold mb-n1">01</h4>
                                    <small className="text-white text-uppercase">Jan</small>
                                </div>
                            </div>
                            <div className="d-flex mb-2">
                                <a className="text-secondary text-uppercase font-weight-medium" href>Admin</a>
                                <span className="text-primary px-2">|</span>
                                <a className="text-secondary text-uppercase font-weight-medium" href>Cleaning</a>
                            </div>
                            <h5 className="font-weight-medium mb-2">Rebum lorem eos ipsum diam</h5>
                            <p className="mb-4">Dolor justo sea kasd lorem clita justo no diam amet. Kasd magna dolor amet</p>
                            <a className="btn btn-sm btn-primary py-2" href>Read More</a>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5">
                            <div className="position-relative mb-4">
                                <img className="img-fluid rounded w-100" src="website/img/blog-1.jpg" alt />
                                <div className="blog-date">
                                    <h4 className="font-weight-bold mb-n1">01</h4>
                                    <small className="text-white text-uppercase">Jan</small>
                                </div>
                            </div>
                            <div className="d-flex mb-2">
                                <a className="text-secondary text-uppercase font-weight-medium" href>Admin</a>
                                <span className="text-primary px-2">|</span>
                                <a className="text-secondary text-uppercase font-weight-medium" href>Cleaning</a>
                            </div>
                            <h5 className="font-weight-medium mb-2">Rebum lorem eos ipsum diam</h5>
                            <p className="mb-4">Dolor justo sea kasd lorem clita justo no diam amet. Kasd magna dolor amet</p>
                            <a className="btn btn-sm btn-primary py-2" href>Read More</a>
                        </div>
                        <div className="col-12">
                            <nav aria-label="Page navigation">
                                <ul className="pagination pagination-lg justify-content-center mb-0">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" aria-label="Previous">
                                            <span aria-hidden="true">«</span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#" aria-label="Next">
                                            <span aria-hidden="true">»</span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* Blog End */}
            <Footer />
        </div>

    )
}

export default Blog
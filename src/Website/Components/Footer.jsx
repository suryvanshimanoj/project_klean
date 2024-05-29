import React from 'react'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'


function Footer() {
    return (
        <>
            {/* Footer Start */}
            <div className="container-fluid bg-dark text-white mt-5 py-5 px-sm-3 px-md-5">
                <div className="row pt-5">
                    <div className="col-lg-3 col-md-6 mb-5">
                        <NavLink to="index.html" className="navbar-brand">
                            <h1 className="m-0 mt-n3 display-4 text-primary">Klean</h1>
                        </NavLink>
                        <p>Volup amet magna clita tempor. Tempor sea eos vero ipsum. Lorem lorem sit sed elitr sed kasd et</p>
                        <h5 className="font-weight-semi-bold text-white mb-2">Opening Hours:</h5>
                        <p className="mb-1">Mon – Sat, 8AM – 5PM</p>
                        <p className="mb-0">Sunday: Closed</p>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className="font-weight-semi-bold text-primary mb-4">Get In Touch</h4>
                        <p><i className="fa fa-map-marker-alt text-primary mr-2" />123 Street, New York, USA</p>
                        <p><i className="fa fa-phone-alt text-primary mr-2" />+012 345 67890</p>
                        <p><i className="fa fa-envelope text-primary mr-2" />info@example.com</p>
                        <div className="d-flex justify-content-start mt-4">
                            <NavLink className="btn btn-light btn-social mr-2" to="#"><i className="fab fa-twitter" /></NavLink>
                            <NavLink className="btn btn-light btn-social mr-2" to="#"><i className="fab fa-facebook-f" /></NavLink>
                            <NavLink className="btn btn-light btn-social mr-2" to="#"><i className="fab fa-linkedin-in" /></NavLink>
                            <NavLink className="btn btn-light btn-social" to="#"><i className="fab fa-instagram" /></NavLink>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className="font-weight-semi-bold text-primary mb-4">Quick Links</h4>
                        <div className="d-flex flex-column justify-content-start">
                            <NavLink className="text-white mb-2" to="/"><i className="fa fa-angle-right mr-2" />Home</NavLink>
                            <NavLink className="text-white mb-2" to="/aboutus"><i className="fa fa-angle-right mr-2" />About Us</NavLink>
                            <NavLink className="text-white mb-2" to="/Services"><i className="fa fa-angle-right mr-2" />Our Services</NavLink>
                            <NavLink className="text-white mb-2" to="/Projects"><i className="fa fa-angle-right mr-2" />Our Projects</NavLink>
                            <NavLink className="text-white" to="/Contact"><i className="fa fa-angle-right mr-2" />Contact Us</NavLink>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 mb-5">
                        <h4 className="font-weight-semi-bold text-primary mb-4">Newsletter</h4>
                        <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum.</p>
                        <div className="w-100">
                            <div className="input-group">
                                <input type="text" className="form-control border-0" style={{ padding: 25 }} placeholder="Your Email" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary px-4">Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{ borderColor: '#3E3E4E !important' }}>
                <div className="row">
                    <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                        <p className="m-0 text-white">© <a href="#">Your Site Name</a>. All Rights Reserved. Designed by <a href="https://htmlcodex.com">HTML Codex</a>
                        </p>
                    </div>
                    <div className="col-lg-6 text-center text-md-right">
                        <ul className="nav d-inline-flex">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white py-0" to="/">Privacy</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white py-0" to="/Terms">Terms</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white py-0" to="/FAQs">FAQs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white py-0" to="/Help">Help</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Footer End */}
            {/* Back to Top */}
            <NavLink to="/" className="btn btn-primary px-3 back-to-top"><i className="fa fa-angle-double-up" /></NavLink>

            <Helmet>
               

            </Helmet>



        </>

    )
}

export default Footer
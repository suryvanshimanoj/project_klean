import React from 'react'
import { Helmet } from 'react-helmet'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Header2() {

    const redirect = useNavigate();
    const userlogout = () => {
        localStorage.removeItem('uid');
        localStorage.removeItem('uname');
        toast.success('Logout Success ');
        redirect('/');
        return false;
    }

    return (
        <div>
            <Helmet>

                <link href="website/img/favicon.ico" rel="icon" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
                <link href="website/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
                <link href="website/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
                <link href="website/css/style.css" rel="stylesheet" />



                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
                <script src="website/lib/easing/easing.min.js"></script>
                <script src="website/lib/waypoints/waypoints.min.js"></script>
                <script src="website/lib/counterup/counterup.min.js"></script>
                <script src="website/lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="website/lib/isotope/isotope.pkgd.min.js"></script>
                <script src="website/lib/lightbox/js/lightbox.min.js"></script>
                <script src="website/mail/jqBootstrapValidation.min.js"></script>
                <script src="website/mail/contact.js"></script>
                <script src="website/js/main.js"></script>
            </Helmet>


            {/* <!-- Header Start --> */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 bg-secondary d-none d-lg-block">
                        <NavLink href className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                            <h1 className="m-0 display-3 text-primary">Klean</h1>
                        </NavLink>
                    </div>
                    <div className="col-lg-9">
                        <div className="row bg-dark d-none d-lg-flex">
                            <div className="col-lg-7 text-left text-white">
                                <div className="h-100 d-inline-flex align-items-center border-right border-primary py-2 px-3">
                                    <i className="fa fa-envelope text-primary mr-2" />
                                    <small>info@example.com</small>
                                </div>
                                <div className="h-100 d-inline-flex align-items-center py-2 px-2">
                                    <i className="fa fa-phone-alt text-primary mr-2" />
                                    <small>+012 345 6789</small>
                                    {(
                                        () => {
                                            if (localStorage.getItem('uid')) {
                                                return (
                                                    <>
                                                        <small ><i className="fa fa-user-alt text-primary mr-2" />Hi.. {localStorage.getItem('uname')}</small>
                                                        <small ><i className="fa fa-user-alt text-primary mr-2" /><Link to="/profile">My Account</Link></small>
                                                    </>
                                                )
                                            }
                                        }
                                    )()}
                                </div>

                            </div>
                            <div className="col-lg-5 text-right">
                                <div className="d-inline-flex align-items-center pr-2">
                                    <a className="text-primary p-2" href>
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a className="text-primary p-2" href>
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a className="text-primary p-2" href>
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                    <a className="text-primary p-2" href>
                                        <i className="fab fa-instagram" />
                                    </a>
                                    <a className="text-primary p-2" href>
                                        <i className="fab fa-youtube" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <nav className="navbar navbar-expand-lg bg-white navbar-light p-0">
                            <a href className="navbar-brand d-block d-lg-none">
                                <h1 className="m-0 display-4 text-primary">Klean</h1>
                            </a>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                                    <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                    <NavLink to="/service" className="nav-item nav-link">Service</NavLink>
                                    <NavLink to="/project" className="nav-item nav-link">Project</NavLink>
                                    <div className="nav-item dropdown">
                                        <NavLink to="/" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</NavLink>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            <NavLink to="/blog" className="dropdown-item">Latest Blog</NavLink>
                                            <NavLink to="/single" className="dropdown-item">Blog Detail</NavLink>
                                        </div>
                                    </div>
                                    <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                                </div>

                                {(
                                    () => {
                                        if (localStorage.getItem('uid')) {
                                            return (
                                                <a href="javascript:void(0)" onClick={userlogout} className="btn btn-primary mr-3 d-none d-lg-block">Logout</a>
                                            )
                                        }
                                        else {
                                            return (
                                                <Link to="/login" className="btn btn-primary py-2 px-4 ms-3">Login</Link>
                                            )
                                        }
                                    }
                                )()}
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
            {/* <!-- Header End --> */}



        </div >
    )
}

export default Header2
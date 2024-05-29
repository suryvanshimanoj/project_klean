import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'



function Aheader() {
    const redirect = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('aid')) {
        }
        else {
            return redirect('/admin-login')
        }
    }, []);


    const adminlogout = () => {
        localStorage.removeItem('aid');
        localStorage.removeItem('aname');
        toast.success('Logout Success ');
        redirect('/admin-login');
        return false;
    }

    return (
        <div>
            <Helmet>
                
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>



                <link href="admin/assets/css/bootstrap.css" rel="stylesheet" />
                <link href="admin/assets/css/font-awesome.css" rel="stylesheet" />
                <link href="admin/assets/css/custom.css" rel="stylesheet" />
                <link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />





                <script src="admin/assets/js/jquery-1.10.2.js"></script>
                <script src="admin/assets/js/bootstrap.min.js"></script>
                <script src="admin/assets/js/custom.js"></script>

            </Helmet>

            <div className="navbar navbar-inverse navbar-fixed-top">
                <div className="adjust-nav">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <a className="navbar-brand" href="#">
                            <img src="admin/assets/img/logo.png" />
                        </a>
                    </div>
                    <span className="logout-spn">
                        <a href="javascript:void(0)" onClick={adminlogout} style={{ color: '#fff' }}>LOGOUT</a>
                    </span>
                </div>
            </div>
            {/* /. NAV TOP  */}
            <nav className="navbar-default navbar-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav" id="main-menu">
                        <li>
                            <NavLink to="/dashboard"><i className="fa fa-desktop " />Dashboard <span className="badge">Included</span></NavLink>
                        </li>
                      
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"><i className="fa fa-table " />Categories</a>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/add_categories">Add Categories</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/manage_categories">Manage Categories</NavLink></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#"><i className="fa fa-table " />Product</a>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" to="/add_product">Add Product</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/manage_product">Manage Product</NavLink></li>
                            </ul>
                        </li>
                        
                        <li>
                            <NavLink to="/manage_user"><i className="fa fa-table " />User</NavLink>
                        </li>
                        <li>
                            <NavLink to="/manage_contact"><i className="fa fa-table " />Contact</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>

            
        </div>

    )
}

export default Aheader
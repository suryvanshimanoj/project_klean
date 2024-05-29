import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header2 from '../Component/Header2'
import Footer from '../Component/Footer'
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    
    const redirect=useNavigate();
    
    useEffect(()=>{
        if(localStorage.getItem('uid'))
        {
            return redirect('/')
        }
    },[]);
    
    const [formvalue,setFormvalue]=useState({
        name: "",
        email: "",
     });   
     const changeHandel=(e)=>{
        setFormvalue({...formvalue,[e.target.name]:e.target.value});
        console.log(formvalue);
     }
    
    function validation()
    {
        var res=true;
       
        if(formvalue.email=="")
        {
            toast.error("Email Field is required !");
            res=false;
            return false;
        }
        if(formvalue.password=="")
        {
            toast.error("Password Field is required !");
            res=false;
            return false;
        }
        
        return res;
    } 


    const submitHandel=async(e)=>{
        e.preventDefault(); // not reload page
        if(validation())
        {
            const res=await axios.get(`http://localhost:3000/user?email=${formvalue.email}`);
            console.log(res);
            if(res.data.length>0)
            {
                if(res.data[0].password==formvalue.password)
                {
                    if(res.data[0].status=="Unblock")
                    {
                        // session create
                        localStorage.setItem('uid',res.data[0].id);
                        localStorage.setItem('uname',res.data[0].name);
                        
                        redirect('/');
                        toast.success('Login Success ');
                        return false;     
                    }
                    else
                    {
                        setFormvalue({...formvalue,email:"",password:""});
                        toast.error('Accout Blocked ');
                        return false;
                    }  
                }
                else
                {
                    setFormvalue({...formvalue,email:"",password:""});
                    toast.error('Wrong password');
                    return false;
                }
            }
            else
            {
                setFormvalue({...formvalue,email:"",password:""});
                toast.error('Email does not Exist');
                return false;
            }
           
        }
    }


    return (
        <div>
            <Header2 title="Login"/>
            <div className="modal fade" id="searchModal" tabIndex={-1}>
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content" style={{ background: 'rgba(9, 30, 62, .7)' }}>
                        <div className="modal-header border-0">
                            <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body d-flex align-items-center justify-content-center">
                            <div className="input-group" style={{ maxWidth: 600 }}>
                                <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword" />
                                <button className="btn btn-primary px-4"><i className="bi bi-search" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Full Screen Search End */}
            {/* Contact Start */}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                   
                   
                    <div className="row g-5">
                        <div className="col-lg-12 wow slideInUp" data-wow-delay="0.3s">
                            <form action=""  method="post"  onSubmit={submitHandel}>
                                <div className="row g-3">
                                  
                                    <div className="col-md-12">
                                        <input type="email" value={formvalue.email} onChange={changeHandel} name="email" className="form-control border-0 bg-light px-4" placeholder="Your Email" style={{ height: 55 }} />
                                    </div>
                                    <div className="col-12">
                                        <input type="password" value={formvalue.password} onChange={changeHandel} name="password" className="form-control border-0 bg-light px-4" placeholder="Password" style={{ height: 55 }} />
                                    </div>
                                  
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100 py-3" type="submit">Login</button>
                                        <Link to="/signup">If you not Registered then Signup here</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                       
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default Login
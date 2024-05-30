import React,{useState,useEffect} from 'react'
import Header2 from '../Components/Header2'
import Footer from '../Components/Footer'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {
 
    const redirect=useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('uid'))
        {
            return redirect('/')
        }
    },[]);
    
    const [form,setForm]=useState({
        id: "",
        name: "",
        email: "",
        password:"",
        mobile:"",
        status:"",
        img:""
     });   
     const changeHandel=(e)=>{
        setForm({...form,id:new Date().getTime().toString(),status:"Unblock",[e.target.name]:e.target.value});
        console.log(formvalue);
     }
    
    function validation()
    {
        var res=true;
        if(form.name=="")
        {
            toast.error("Name Field is required !");
            res=false;
            return false;
        }
        if(form.email=="")
        {
            toast.error("Email Field is required !");
            res=false;
            return false;
        }
        if(form.password=="")
        {
            toast.error("Password Field is required !");
            res=false;
            return false;
        }
        
        if(form.mobile=="")
        {
            toast.error("Mobile Field is required !");
            res=false;
            return false;
        }
        if(form.img=="")
        {
            toast.error("Add image URL Field is required !");
            res=false;
            return false;
        }
        return res;
    } 


    const submitHandel=async(e)=>{
        e.preventDefault(); 
        if(validation())
        {
            const res=await axios.post(`http://localhost:3000/user`,form);
           
            setForm({...form,id:"",name:"",email:"",password:"",mobile:"",img:""});
            toast.success('Signup success');
            return false;
        }
    }

  return (
    <div>
        <Header2/>
          {/* Page Header Start */}
          <div className="container-fluid bg-primary py-5 mb-5">
                <div className="container py-5">
                    <div className="row align-items-center py-4">
                        <div className="col-md-6 text-center text-md-left">
                            <h1 className="display-4 mb-4 mb-md-0 text-secondary text-uppercase">SIGNUP</h1>
                        </div>
                        <div className="col-md-6 text-center text-md-right">
                            <div className="d-inline-flex align-items-center">
                                <a className="btn btn-sm btn-outline-light" href>Home</a>
                                <i className="fas fa-angle-double-right text-light mx-2" />
                                <a className="btn btn-sm btn-outline-light disabled" href>Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Header End */}

            {/* Contact Start */}
            <div className="container-fluid py-5">
                <div className="container">
                    
                    <div className="row">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="contact-form">
                                <div id="success" />
                                <form  method='post' onSubmit={submitHandel}>
                                    <div className="form-row">
                                        <div className="col-sm-6 control-group">
                                            <input type="text"  name="name" value={form.name} onChange={changeHandel} className="form-control p-4" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-6 control-group">
                                            <input type="email"  name="email" value={form.email} onChange={changeHandel} className="form-control p-4" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <input type="password"  name="password" value={form.password} onChange={changeHandel} className="form-control p-4" id="password" placeholder="password" required="required" data-validation-required-message="Please enter a password" />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                    <input type="text"  name="mobile" value={form.mobile} onChange={changeHandel} className="form-control p-4" id="mobile" placeholder="mobile" required="required" data-validation-required-message="Please enter a mobile" />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                    <input type="url"  name="img" value={form.img} onChange={changeHandel} className="form-control p-4" id="mobile" placeholder="img url" required="required" data-validation-required-message="Please enter a img" />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary btn-block py-3 px-5" type="submit" id="sendMessageButton">Signup</button>
                                        <Link to="/login">If you already Registered then Login here</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
            {/* Contact End */}
            <Footer/>
    </div>
  )
}

export default Signup
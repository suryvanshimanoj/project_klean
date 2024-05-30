import React, {useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Header2 from '../Components/Header2';
import Footer from '../Components/Footer';

function Contact() {

    const [form, setForm] = useState({

        id:"",
        name:"",
        email:"",
        subject:"",
        comment:""
    });

    const changeHandel = (e) =>{
        setForm({...form, id: new Date(). getTime(). toString(),[e.target.name]: e.target.value});
        console.log(form);
    };

    function validation() { 
        var result=true; 
        if (form.name=="") 
        {
            toast.error('Name Field is requried!');
            result = false;
            return false;
        }

        if (form.email=="") {
            toast.error('Email Field is requried!');
            result = false;
            return false;
        }

        if (form.subject=="") {
            toast.error('Subject Field is requried!');
            result = false;
            return false;
        }

        if (form.comment=="") {
            toast.error('Comment Field is requried!');
            result = false;
            return false;
        }

        return result;
    }; 

    const submitHandel = async(e)=>{
        e.preventDefault();

        if (validation()) {
           const res = await axios.post(`http://localhost:3000/contact`,form);
           //console.log(res); 
           setForm({...form,id:"", name:"", email:"", subject:"", comment:""});
           alert('Data insert Success');
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
                            <h1 className="display-4 mb-4 mb-md-0 text-secondary text-uppercase">Contact</h1>
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
                    <div className="row align-items-end mb-4">
                        <div className="col-lg-6">
                            <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Contact Us</h6>
                            <h1 className="section-title mb-3">Contact Us For Cleaning Services</h1>
                        </div>
                        <div className="col-lg-6">
                            <h4 className="font-weight-normal text-muted mb-3">Eirmod kasd duo eos et magna, diam dolore stet sea clita sit ea erat lorem. Ipsum eos ipsum magna lorem stet</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7 mb-5 mb-lg-0">
                            <div className="contact-form">
                                <div id="success" />
                                <form name="sentMessage" id="contactForm" noValidate="novalidate" method='post' onSubmit={submitHandel}>
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
                                        <input type="text"  name="subject" value={form.subject} onChange={changeHandel} className="form-control p-4" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject" />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <textarea name="comment" value={form.comment} onChange={changeHandel} className="form-control p-4" rows={6} id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message" defaultValue={""} />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div>
                                        <button className="btn btn-primary btn-block py-3 px-5" type="submit" id="sendMessageButton">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-5" style={{ minHeight: 400 }}>
                            <div className="position-relative h-100 rounded overflow-hidden">
                                <iframe style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
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

export default Contact
import React,{useState,useEffect} from 'react'
import Header2 from '../Components/Header2'
import Footer from '../Components/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


function Profile() {
 
    const redirect = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('uid')) {
            fetch();

        } else {
            return redirect('/')
        }
    }, []);

    const [data, setData] = useState({});

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem('uid')}`);
        console.log(res.data);
        setData(res.data);
    }


    const [form, setForm] = useState({

        id: "",
        name: "",
        email: "",
        mobile: "",
        status: "",
        img: ""
    });

    const editdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        console.log(res.data);
        setForm(res.data);
    }

    const changeHandel = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form);
    }

    function validation() {
        var res = true;
        if (form.name == "") {
            toast.error("Name Field is required !");
            res = false;
            return false;
        }
        if (form.email == "") {
            toast.error("Email Field is required !");
            res = false;
            return false;
        }


        if (form.mobile == "") {
            toast.error("Mobile Field is required !");
            res = false;
            return false;
        }
        if (form.img == "") {
            toast.error("Add image URL Field is required !");
            res = false;
            return false;
        }
        return res;
    }


    const submitHandel = async (e) => {
        e.preventDefault(); 
        if (validation()) {
            const res = await axios.patch(`http://localhost:3000/user/${formvalue.id}`, form);
           
            setForm({ ...form, id: "", name: "", email: "", password: "", mobile: "", img: "" });
            toast.success('Update success');
            fetch();
            return false;
        }
    }
     

    return (
        <div>
            <Header2/>
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <div className="section-title position-relative pb-3 mb-5">
                                <h5 className="fw-bold text-primary text-uppercase">My Account</h5>
                                <h1 className="mb-0">Hi... {data.name}</h1>
                            </div>

                            <div className="row g-0 mb-3">
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                                    <h5 className="mb-3"><i className="fa fa-mobile text-primary me-3" />{data.mobile}</h5>
                                    <h5 className="mb-3"><i className="fa fa-user text-primary me-3" />{data.email}</h5>
                                </div>
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                    <h5 className="mb-3"><i className="fa fa-check text-primary me-3" />{data.status}</h5>
                                    <h5 className="mb-3"><i className="fa fa-check text-primary me-3" />ID :{data.id}</h5>
                                </div>
                            </div>
                            <a href="javascript:void(0)" onClick={() => editdata(data.id)} data-bs-toggle="modal" data-bs-target="#myModal" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Edit Profile</a>

                            <div className="modal" id="myModal">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        {/* Modal Header */}
                                        <div className="modal-header">
                                            <h4 className="modal-title">Modal Heading</h4>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                        </div>
                                        {/* Modal body */}
                                        <div className="modal-body">
                                            <form action="" method="post" >
                                                <div className="row g-3">
                                                    <div className="col-md-12">
                                                        <input type="text" value={form.name} onChange={changeHandel} name="name" className="form-control border-0 bg-light px-4" placeholder="Your Name" style={{ height: 55 }} />
                                                    </div>
                                                    <div className="col-md-12">
                                                        <input type="email" value={form.email} onChange={changeHandel} name="email" className="form-control border-0 bg-light px-4" placeholder="Your Email" style={{ height: 55 }} />
                                                    </div>

                                                    <div className="col-12">
                                                        <input type="number" value={form.mobile} onChange={changeHandel} name="mobile" className="form-control border-0 bg-light px-4" placeholder="Mobile" style={{ height: 55 }} />
                                                    </div>
                                                    <div className="col-12">
                                                        <input type="url" value={form.img} onChange={changeHandel} name="img" className="form-control border-0 bg-light px-4" placeholder="Img URL" style={{ height: 55 }} />
                                                    </div>
                                                    <div className="col-12">
                                                        <button className="btn btn-primary w-100 py-3" onClick={submitHandel} type="submit" data-bs-dismiss="modal">Save</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* Modal footer */}
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-5" style={{ minHeight: 500 }}>
                            <div className="position-relative h-100">
                                <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src={data.img} style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}
             <Footer/>
        </div>
    )
}

export default Profile
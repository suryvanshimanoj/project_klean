import React, { useState, useEffect } from 'react'
import Aheader1 from '../Component/Aheader1'
import Afooter1 from '../Component/Afooter1'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


function Alogin() {

    const redirect = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('aid')) {
            return redirect('/dashboard')
        }
    },[]);

    const [form, setForm] = useState({
        name: "",
        email: "",
    });
    const changeHandel = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form);
    }

    function validation() {
        var res = true;

        if (form.email == "") {
            toast.error("Email Field is required !");
            res = false;
            return false;
        }
        if (form.password == "") {
            toast.error("Password Field is required !");
            res = false;
            return false;
        }

        return res;
    }

    const submitHandel = async (e) => {
        e.preventDefault(); 
        if (validation()) {
            const res = await axios.get(`http://localhost:3000/admin?email=${form.email}`);
            console.log(res);
            if (res.data.length > 0) {
                
                if (res.data[0].password == form.password) {

                    
                    localStorage.setItem('aid', res.data[0].id);
                    localStorage.setItem('aname', res.data[0].name);

                    redirect('/dashboard');
                    toast.success('Login Success ');
                    return false;

                }
                else {
                    setForm({ ...form, email: "", password: "" });
                    toast.error('Wrong password');
                    return false;
                }
            }
            else {
                setForm({ ...form, email: "", password: "" });
                toast.error('Email does not Exist');
                return false;
            }

        }
    }


    return (
        <>
            <Aheader1 />
            <div id="wrapper">

                {/* /. NAV SIDE  */}
                <div id="page-wrapper">
                    <div id="page-inner">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Admin Login</h2>
                                <form action="" method="post" onSubmit={submitHandel}>


                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" value={form.email} onChange={changeHandel} name="email" className="form-control" placeholder="Enter Email" />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="password" className="form-label">Password</label>
                                        <input type="password" value={form.password} onChange={changeHandel} name="password" className="form-control" placeholder="Enter password" />
                                    </div>

                                    <button type="submit" className="btn btn-primary mt-5">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Afooter1 />

        </>
    )
}

export default Alogin
import React,{useState,useEffect} from 'react'
import Aheader from '../Component/Aheader'
import Afooter from '../Component/Afooter'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

function Edit_categories() {

   
    const redirect=useNavigate();
    
    const [formvalue, setFormvalue] = useState({
        id: "",
        cate_name: "",
        img: ""
    });

   
    
    useEffect(() => {
        fetch();
    }, []);

    const {id}=useParams();
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories/${id}`);
        console.log(res.data);
        setFormvalue(res.data);
    }



    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
        console.log(formvalue);
    }
    function validation() {
        var res = true;
        if (formvalue.cate_name == "") {
            toast.error("Categories Name Field is required !");
            res = false;
            return false;
        }
        if (formvalue.img == "") {
            toast.error("Add img url Field is required !");
            res = false;
            return false;
        }
        
        return res;
    }
    const submitHandel = async (e) => {
        e.preventDefault(); // not reload page
        if(validation())
        {
            const res = await axios.patch(`http://localhost:3000/categories/${id}`, formvalue);
            setFormvalue({ ...formvalue, cate_name: "", img: "" });
            toast.success('Data Update success');
            redirect('/manage_categories');
            return false;
        }
    }

  return (
    <>
       <div id="wrapper">
                <Aheader/>
                {/* /. NAV SIDE  */}
                <div id="page-wrapper">
                    <div id="page-inner">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Edit Categorie</h2>

                                <form action="" method="post" onSubmit={submitHandel}>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Categories Name:</label>
                                        <input type="text" value={formvalue.cate_name} onChange={changeHandel} name="cate_name" className="form-control" placeholder="Enter Categories Name" />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="pwd" className="form-label">Password:</label>
                                        <input type="url" value={formvalue.img} onChange={changeHandel} name="img" className="form-control" placeholder="Enter Img url" />
                                    </div>

                                    <button type="submit" className="btn btn-primary mt-5">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Afooter/>

    </>
  )
}

export default Edit_categories
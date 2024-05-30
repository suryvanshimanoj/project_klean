import React,{useState,useEffect} from 'react'
import Aheader from '../Component/Aheader'
import Afooter from '../Component/Afooter'
import axios from 'axios';
import { toast } from 'react-toastify';


function Add_product() {
 
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData(res.data);
    }

    const [form, setForm] = useState({
        id: "",
        cate_id: "",
        prod_name: "",
        desc: "",
        price: "",
        img: ""
    });


    const changeHandel = (e) => {
        setForm({ ...form, id: new Date().getTime().toString(), [e.target.name]: e.target.value });
        console.log(form);
    }

    function validation() {
        var res = true;
        if (form.cate_id == "") {
            toast.error("Categories required !");
            res = false;
            return false;
        }
        if (form.prod_name == "") {
            toast.error("Product price field required !");
            res = false;
            return false;
        }
        if (form.price == "") {
            toast.error("Price required !");
            res = false;
            return false;
        }
        if (form.desc == "") {
            toast.error("desc required !");
            res = false;
            return false;
        }

        if (form.img == "") {
            toast.error("Add img url Field is required !");
            res = false;
            return false;
        }
        
        return res;
    }

    const submitHandel = async (e) => {
        e.preventDefault(); 
        if(validation())
        {
            const res = await axios.post(`http://localhost:3000/product`, form);
            //console.log(res);
            setForm({ ...form, id: "", cate_id: "", prod_name: "", desc: "", price: "", img: "" });
            toast.success('Data insert success');
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
                                <h2>Add Product</h2>
                                <form action="" method="post" onSubmit={submitHandel}>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Categories Name:</label>
                                        <select onChange={changeHandel} name="cate_id" className="form-control" >
                                            <option value="">-----------  Select Product Categories -------------</option>
                                            {
                                                data && data.map((value, index, arr) => {
                                                    return (
                                                        <option value={value.id}>{value.cate_name}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Product Name:</label>
                                        <input type="text" value={form.prod_name} onChange={changeHandel} name="prod_name" className="form-control" placeholder="Enter Product Name" />
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Description:</label>
                                        <textarea value={form.desc} onChange={changeHandel} name="desc" className="form-control"></textarea>
                                    </div>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="email" className="form-label">Product Price:</label>
                                        <input type="number" value={form.price} onChange={changeHandel} name="price" className="form-control" placeholder="Enter Product Price" />
                                    </div>

                                    <div className="mb-3 mt-3">
                                        <label htmlFor="pwd" className="form-label">Image:</label>
                                        <input type="url" value={form.img} onChange={changeHandel} name="img" className="form-control" placeholder="Enter Img url" />
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

export default Add_product
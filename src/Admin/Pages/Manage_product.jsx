import React, { useState, useEffect } from 'react'
import Aheader from '../Component/Aheader'
import Afooter from '../Component/Afooter'
import axios from 'axios'
import { toast } from 'react-toastify'


function Manage_product() {


    const [data, setData] = useState([]);

    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/product`);
        console.log(res.data);
        setData(res.data);
    }

    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/product/${id}`);
        toast.success('Delete Success');
        fetch();
    }

    return (
        <>
            <div id="wrapper">
                <Aheader />
                {/* /. NAV SIDE  */}
                <div id="page-wrapper">
                    <div id="page-inner">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2>Manage Product</h2>
                                <table className="table table-hover ">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Cate ID</th>
                                            <th>Name</th>
                                            <th>Description</th>
                                            <th>Price</th>
                                            <th>Image</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data && data.map((value, index, arr) => {
                                                return (
                                                    <tr>
                                                        <td>{value.id}</td>
                                                        <td>{value.cate_id}</td>
                                                        <td>{value.prod_name}</td>
                                                        <td>{value.desc}</td>
                                                        <td>{value.price}</td>

                                                        <td><img src={value.img} width="50px" alt="" /></td>
                                                        <td>
                                                            <button className='btn btn-primary'>Edit</button>
                                                            <button className='btn btn-danger' onClick={() => deleteHandel(value.id)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Afooter />
        </>
    )
}

export default Manage_product
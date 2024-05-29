import React,{useState,useEffect} from 'react'
import Aheader from '../Component/Aheader'
import Afooter from '../Component/Afooter'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Manage_categories() {

    const redirect = useNavigate();

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch();
    }, []);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/categories`);
        console.log(res.data);
        setData(res.data);
    }
    const deleteHandel = async (id) => {
        const res = await axios.delete(`http://localhost:3000/categories/${id}`);
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
                                <h2>Manage Categories</h2>
                                <table className="table table-hover ">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Name</th>
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
                                                        <td>{value.cate_name}</td>
                                                        <td><img src={value.img} alt="" width="50px" /></td>
                                                        <td>
                                                            <button className='btn btn-primary' onClick={() => redirect('/edit_cate/' + value.id)}>Edit</button>
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

export default Manage_categories
import { BrowserRouter,Routes,Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Index from "./Website/Pages/Index";
import About from "./Website/Pages/About";
import Service from "./Website/Pages/Service";
import Contact from "./Website/Pages/Contact";
import Single from "./Website/Pages/Single";
import Blog from "./Website/Pages/Blog";
import Project from "./Website/Pages/Project";
import View_services from "./Website/Pages/View_services";
import Login from "./Website/Pages/Login";
import Signup from "./Website/Pages/Signup";
import Profile from "./Website/Pages/Profile";


// 
// import Alogin from "./Admin/Pages/Alogin";
import Alogin from "./Admin/Pages/Alogin";
import Adashboard from "./Admin/Pages/Adashboard";
import Manage_categories from "./Admin/Pages/Manage_categories";
import Add_categories from "./Admin/Pages/Add_categories";
import Edit_categories from "./Admin/Pages/Edit_categories";
import Manage_product from "./Admin/Pages/Manage_product";
import Add_product from "./Admin/Pages/Add_product";
import Manage_user from "./Admin/Pages/Manage_user";
import Manage_contact from "./Admin/Pages/Manage_contact";







function App() {
  return (
    <BrowserRouter>
      <ToastContainer></ToastContainer>
      <Routes>
        {
          // WEBSITE
        }

        <Route path="/" element={<><Index/></>}></Route>
        <Route path="/about" element={<><About/></>}></Route>
        <Route path="/service" element={<><Service/></>}></Route>
        <Route path="/view_services/:id" element={<><View_services/></>}></Route>
        <Route path="/Project" element={<><Project/></>}></Route>
        <Route path="/contact" element={<><Contact/></>}></Route>
        <Route path="/single" element={<><Single/></>}></Route>
        <Route path="/blog" element={<><Blog/></>}></Route>
        <Route path="/login" element={<><Login/></>}></Route>
        <Route path="/signup" element={<><Signup/></>}></Route>
        <Route path="/profile" element={<><Profile/></>}></Route>


        
        {
          //admin 
        }
        
        <Route path="/admin-login" element={<><Alogin/></>}></Route>
        <Route path="/dashboard" element={<><Adashboard/></>}></Route>
        <Route path="/manage-categories" element={<><Manage_categories/></>}></Route>
         <Route path="/add_categories"element={<><Add_categories/></>} ></Route>
         <Route path="/edit_categories/:id" element={<><Edit_categories/></>}></Route>
         <Route path="manage_categories" element={<><Manage_categories/></>}></Route>
        <Route path="/product" element={<><Manage_product/></>}></Route>
        <Route path="/manage_product" element={<><Manage_product/></>}></Route>
        <Route path="/add_product" element={<><Add_product/></>}></Route>
        <Route path="/manage_user" element={<><Manage_user/></>}></Route>
        <Route path="/manage_contact" element={<><Manage_contact/></>}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

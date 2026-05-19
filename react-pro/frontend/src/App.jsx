import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";  //scroll-reset-to-top
import {useDispatch} from "react-redux";
import {login} from "./redux/authSlice";
import {useEffect} from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Deals from "./pages/Deals";
import Shop from "./pages/Shop";
import Show from "./pages/Show";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AdminDash from "./pages/admin/AdminDash";
import CategoryPage from "./pages/admin/CategoryPage";
import AddProduct from "./pages/admin/AddProduct";


import './App.css'
import './index.css'


export default function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}


function MainApp() {
const dispatch = useDispatch();
const location = useLocation();

const isAdmin = location.pathname.startsWith("/admin");


  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const users = JSON.parse(localStorage.getItem("users"));
      const user = users?.[0];

      if (user) {
        dispatch(login(user));
      }
    }
  }, []);

  return (
    <>

      
      <ToastContainer />

      {!isAdmin && <Navbar />}
      
      
      <ScrollToTop/>
      <Routes>
        
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/deals" element={<Deals/>}/>
        <Route path="/show/:source/:id" element={<Show/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/admin" element={<AdminDash/>}/>
        <Route path="/admin/category/:categoryName" element={<CategoryPage/>}/>
        <Route path="/admin/add-product/:categoryName" element={<AddProduct/>} />
        
      </Routes>
      {!isAdmin && <Footer />}

   
    </>
          
  )
}



import { useState } from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {login} from "../redux/authSlice";
import {Link} from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";





import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email:"",
    password:"",
  });

  const [errors, setErrors] = useState({});
  const[show, setShow] =useState(true);
  const [loading, setLoading] = useState(false);
  

  const navigate = useNavigate();
  const dispatch = useDispatch();
  


  const handleChange = (e) => {
    const {name, value} = e.target;

    let cleanedValue = value.replace(/\s+/, "");

    setFormData((prev) => ({
      ...prev, 
      [name]: cleanedValue,
    }))
  
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }))
  };


   const validate = () => {
    const newErrors = {};

    const email = formData.email.trim();
    const password = formData.password.trim();

    if (!email) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Invalid email format";
      }
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    return newErrors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();


    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }  


    try{
      setLoading(true);
      const res = await axios.post("http://localhost:3000/api/auth/login", 
        formData
      )
      dispatch(login(res.data));
      navigate("/");
      toast.success("Login successful");
    } catch(err){
       const message = err.response?.data?.message || "login failed";

       setErrors({ general: message });

      setFormData({
        ...formData,
        password: "",
      });
       ;
    } finally {
      setLoading(false);
    }

  }
  return (
    <div className=" flex items-center justify-center bg-gray-100">
      <form
        noValidate
        onSubmit={handleLogin}
        className="my-8 bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          Welcome Back
        </h2>

        {errors.general && (
          <p className="text-red-500 text-sm mb-3 text-center">
            {errors.general}
          </p>
        )}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          className={`w-full mb-1 px-4 py-2 border rounded-lg focus:outline-none ${
            errors.email ? "border-red-500" : "focus:ring-2 focus:ring-green-400"
          }`}
          onKeyDown={(e) => {
            if(e.key ===" ") e.preventDefault();
          }}
          onChange={handleChange}
          value={formData.email}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-3">
            {errors.email}
          </p>
        )}

        <label htmlFor="pass">Password</label>
        <div  className={`relative w-full mb-1 px-4 py-2 border rounded-lg ${
            errors.password
              ? "border-red-500"
              : "focus-within:ring-2 focus-within:ring-green-400"
          }`}>
        <input
          id="pass"
          name="password"
          type={show ? "password" : "text"}
          placeholder="Password"
          className="  w-full focus:outline-none"
          onChange={handleChange}
          value={formData.password}
        />
        <span className="absolute mt-1 opacity-60 cursor-pointer"
             onClick={() => setShow(!show)}
        >{show ? <FaEyeSlash/> : <FaEye/>} </span>
        </div>

        {errors.password && (
          <p className="text-red-500 text-sm mb-3">
            {errors.password}
          </p>
        )}

        <button disabled={loading} className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
          {loading ? "logging in...." : "login"}
        </button>

        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/signup">
          <span className="text-green-500 cursor-pointer">
            Signup
          </span>
          </Link>
        </p>
      </form>
    </div>
  );
}
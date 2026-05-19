import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";





export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  
  const [show, setShow] = useState(true);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

const dispatch = useDispatch();



const handleChange = (e) => {
  const {name, value} = e.target;

  const cleanedValue = value.replace(/\s+/, "");



  setFormData((prev) => ({
    ...prev,
    [name]:cleanedValue,
  }))

  setErrors((prev) => ({
    ...prev,
    [name]:"",
  }))
}
  

  const validate = () => {
  const newErrors = {};

  const username = formData.username.trim();

  if(!username){
    newErrors.username = "Username is required";
  } else if(username.length < 3){
      newErrors.username = "Username must be at least 3 characters";
  } else if(!/^(?=.*[a-zA-Z])[a-zA-Z0-9._]+$/.test(username)){
    newErrors.username = "Username must contain at least one letter";
  }

  

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Invalid email format";
  }

  if (!formData.password.trim()) {
    newErrors.password = "Password is required";
  } else if (formData.password.trim().length < 6) {
    newErrors.password = "Password must be at least 6 characters";
  }

  return newErrors;
};



  

  const handleSignup = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  try{
      const res = await axios.post(
      "http://localhost:3000/api/auth/signup",{
        username:formData.username.trim(),
        email:formData.email.trim(),
        password:formData.password.trim(),
      }
    );

    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));

  dispatch(login(res.data));

  navigate("/");
  toast.success("signup successful");

  }  catch (err) {
    const message = 
    err.response?.data?.message || "signup failed";
    

    setErrors((prev) =>  ({
        ...prev,
        api: message,
    }))
  }
    
  }

  return (
    <div className=" flex items-center justify-center bg-gray-100">

      <form
      noValidate
        onSubmit={handleSignup}
        className="my-8 bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        {errors.api && (   //api error
             <p className="text-red-500 text-center mb-4">{errors.api}</p>
        )}

        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <label htmlFor="username">Username</label>
        <input
            id="username"
            type="text"
            name="username"
            value={formData.username}
            className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleChange}
            placeholder="enter username"
           />
           {errors.username && (
              <p className="text-red-500 text-sm mb-2">{errors.username}</p>
            )}

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          onChange={handleChange}
          onKeyDown={(e) => {
            if(e.key === " ") e.preventDefault(); 
          }}
        />
        {errors.email && (
            <p className="text-red-500 text-sm mb-2">{errors.email}</p>
         )}

        <label htmlFor="pass">Password</label>

        <div className="relative w-full mb-6 pl-4 pr-8 py-2 border rounded-lg  focus-within:ring-2 focus-within:ring-blue-400">
        <input
          id="pass"
          type={show ? "password" : "text"}
          name="password" 
          value={formData.password}
          placeholder="Password"
          className="w-full focus:outline-none"
          onChange={handleChange}
        ></input> <span
            onClick={() => setShow(!show)}
            className="absolute right-[10px] opacity-60 cursor-pointer mt-1 "
         > {show ? <FaEyeSlash /> : <FaEye />}</span>
        </div>


        {errors.password && (
            <p className="text-red-500 text-sm mb-2">{errors.password}</p>
         )}

        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
          Signup
        </button>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login">
          <span className="text-blue-500 cursor-pointer">
            Login
          </span>
          </Link>
        </p>
      </form>
    </div>
  );
}
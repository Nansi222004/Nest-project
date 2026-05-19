import { useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import {login} from "../redux/authSlice";

export default function ProfilePage() {
  const {user, token} = useSelector((state) => state.auth);
  const [avatar, setAvatar] = useState(null);
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const {name, value} = e.target;
    let cleanedValue = value;

    if(name === "username" || name === "email"){
        cleanedValue = value.replace(/\s+/g, "");
    }

    if (name === "phone") {
    cleanedValue = value.replace(/\D/g, "");
  }

    setFormData({
      ...formData,
      [name]: cleanedValue,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    
    
    if(file) {
      if (preview) {
      URL.revokeObjectURL(preview); //url removing from preview
    }
      setAvatar(file);

      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
  
    try{
      const data = new FormData();

      data.append("username", formData.username);
      data.append("phone", formData.phone);
      data.append("address", formData.address);

      if(avatar) {
        data.append("avatar", avatar);
      }
      
      const res = await axios.put("http://localhost:3000/api/auth/editPro", 
        data, 
        {
          headers: {
          Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
      dispatch(login({
        token,
        user: res.data.user,
      }));

      setPreview(null);
      setAvatar(null);
      

    }
    catch(err) {
      console.log(err.response?.data);
    } finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    if(user) {
      setFormData({
        username: user.username || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
      })
    }

    
  }, [user,]);

  return (<>
    
    <div className="relative min-h-screen bg-gray-100 flex justify-center items-center p-6 ">
      { loading && (
      <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
    <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
  </div>)}
      
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-4xl px-8 py-6">
        
        {/* MAIN HEADING */}
        <h2 className="text-2xl font-bold ">My Profile</h2>

        <form noValidate onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="flex flex-col md:flex-row gap-10">
          
          {/* LEFT SIDE */}
          <div className="flex flex-col items-center justify-center flex-1 border-r pr-6 mb-10">
            
            <h3 className="text-lg font-semibold mb-4">
              Profile Photo
            </h3>

            <img
              src={preview || user?.avatar ||"../assets/Logo/profile-logo.png"}
              className="w-32 h-32 rounded-full object-cover border mb-4 "
            />

            <input
              type="file"
              className="ml-20 text-sm text-gray-600"
              name="avatar"
              onChange={handleFileChange}
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 space-y-5">
            
            <h3 className="text-lg font-semibold mb-2">
              Personal Information
            </h3>

            <div>
              <label className="text-sm text-gray-600">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                maxLength={20}
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                value={formData.email}
                disabled
                className="w-full border rounded-lg p-2 mt-1 bg-gray-100"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Mobile Number</label>
              <div className="flex border rounded-lg p-2 mt-1">
              <span className=" ">+91</span>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                maxLength={10}
                className="w-full focus:outline-none ml-1 "
              />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-600">Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                minLength={4}
                maxLength={60}
                className="w-full border rounded-lg p-2 mt-1"
              />
            </div>

            <button className="bg-green-500 text-white px-6 py-2 rounded-lg mt-4">
              {loading ? "loading..." : "Save Changes"}
            </button>

          </div>
        </div>
        </form>

      </div>
    </div>
  </>);
}
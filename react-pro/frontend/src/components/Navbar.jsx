
import {useState, useEffect} from "react";
import {NavLink, Link, useNavigate} from "react-router-dom";
import SearchBar from "./SearchBar";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { toast } from "react-toastify";

function Navbar(){
    
  const [openProfile, setOpenProfile] = useState(false);
  const{cartItems} = useSelector((state) => state.cart);
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

 

    const handleLogout = () => {
    setOpenProfile(false);
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/login");
    toast.success("Logged out successfully");
  };
return(
<>
<nav className=" ">

{/* HEADER 1 */}
<p className="bg-[#3bb77e]  py-1 text-center  text-white min-[992px]:hidden">Grand opening, <strong>up to 15%</strong> off all items. only <strong>3 days</strong> left</p>

<div className="header-1 hidden lg:flex justify-between px-[12px]">
<div className="data-1">
<ul className="flex gap-3 list-none nav-items">
<li className="head1-info">About Us</li>
<span>|</span>
<li className="head1-info">My Account</li>
<span>|</span>
<li className="head1-info">Wishlist</li>
<span>|</span>
<li className="head1-info">Order Tracking</li>
</ul>
</div>

<div className="data-2">
Supper Value Deals - Save more with coupons
</div>

<div className="data-3">
<ul className="flex gap-3 list-none nav-items">
<li>Need help? Call Us:</li>
<li className="contact">+1800 900</li>
<span>|</span>

<li className="relative">
<a className="text-inherit no-underline flex items-center gap-1">
English
<i className="ri-arrow-drop-down-line"></i>
</a>
</li>

<span>|</span>

<li className="relative">
<a className="flex items-center gap-1 text-inherit no-underline">
USD
<i className="ri-arrow-drop-down-line"></i>
</a>
</li>

</ul>
</div>
</div>

<hr className="hr hidden lg:block" />

{/* HEADER 2 */}

<div className="header-2 flex  items-center justify-between w-full ">

<i class="text-3xl min-[992px]:hidden fa-solid fa-bars"></i>

<img className="logo ml-0 md:ml-2 mr-0 md:mr-12 " src="/assets/Logo/logo.svg" alt="logo"/>

<SearchBar/>
{/* 
<form className="searchBar hidden min-[992px]:flex  flex-1 items-center px-4">
<span className="text-sm font-bold">All Categories &nbsp; |</span>

<input
className="border-0 outline-none flex-1 ml-3 text-sm"
placeholder="Search for items..."
type="text"
/>

<i className="ri-search-line ml-auto text-xl opacity-50 "></i>

</form> */}



<div className="flex min-[992px]:hidden lg:flex gap-3 items-center ml-0 md:ml-4">

<div className="hidden lg:block">
<span className="relative inline-block">
<img src="/assets/Icons/icon-heart.svg" className="icon"/>
<span className="absolute -top-1 -right-2 text-xs bg-green-500 text-white px-1 rounded-full">
3
</span>
</span>
<span>Wishlist</span>
</div>

<div>
<span className="relative inline-block">
<img src="/assets/Icons/icon-cart.svg" className="icon"/>
<span className="absolute -top-1 -right-2 text-xs bg-green-500 text-white px-1 rounded-full">
{cartItems.length}
</span>
</span>
<span className="hidden lg:inline">Cart</span>
</div>

{isLoggedIn ? ( 
            
        <div className="relative">
            <div className=" flex items-center cursor-pointer" onClick={() => setOpenProfile(openProfile => !openProfile)}>
                <img className="w-10 h-10 rounded-full object-cover " src={user?.avatar || "../assets/Logo/profile-logo.png"}/>
                <p className="ml-2 font-bold">{user?.email}</p>
                <i class="ri-arrow-down-s-line"></i>
            </div>
            { openProfile && (
            <div 
              onClick={() => setOpenProfile(openProfile => !openProfile)} className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
                 {user.role === "admin" && (
                    <Link to="/admin" className="px-4 py-1 pt-2 block text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition">dashbord</Link>)}

                 <Link to="/profile" className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition" 
                 >
                 Profile
                 </Link>

                <p className="px-4 py-1 text-sm text-red-500 hover:bg-red-50 cursor-pointer transition" onClick={handleLogout}>
                 Logout
                 </p>

              </div>
            )
            }
            </div>
    
            
            // <button
            //   onClick={handleLogout}
            //   className="bg-red-500 px-2 py-1 rounded text-xs"
            // >
            //   Logout
            // </button>
          
):( <>

<Link to="/login" className="hidden lg:block">
<span className="relative inline-block">
<img src="/assets/Icons/icon-user.svg" className="icon"/>
</span>
<span>Login</span> 

</Link>
</>
)}

</div>


</div>

<hr className="hr-2 hidden min-[992px]:block"/>

</nav>

{/* HEADER 3 */}

<div className="header-3 w-full hidden min-[992px]:flex px-[12px] sticky top-0 z-10 bg-white ">

<a className="flex items-center my-4">
<div className="categories flex items-center gap-2 rounded mr-5">

<i className="fa-solid fa-table-cells-large"></i>

<span>Browse</span>

<span className="text-2">All Categories</span>

<i className="ri-arrow-down-s-line ml-3"></i>

</div>
</a>

<div className="middle-items flex flex-wrap items-center">

<p className="options">
    <NavLink to="/deals" className={({isActive}) =>
    isActive
?"font-bold text-[#3bb77e]": "font-bold"}>
<i className="fire-icon fa-solid fa-fire"></i>
Deals </NavLink>
</p>

<p className="">
    <NavLink to="/" className={({isActive}) => 
        isActive
    ?"font-bold text-[#3bb77e]": "font-bold"
    }  >Home</NavLink></p>

<p className="">
    <NavLink to="/about" className={({isActive}) => 
        isActive? "font-bold text-[#3bb77e]": "font-bold"
    }   >About</NavLink></p>

<p className="options">
    <NavLink to="/shop" className={({isActive}) => 
        isActive? "font-bold text-[#3bb77e]": "font-bold"
    }   >Shop</NavLink>
</p>

<p className="options">Vendors</p>

<p className="options">Mega menu</p>

<p className="options">Blog</p>

<p className="options">Pages</p>

<p className="options">Contact</p>

</div>

<div className="support hidden  lg:flex gap-3 items-center">

<img className="img" src="/assets/Icons/icon-headphone.svg"/>

<div>
<h4 className="num leading-none">1900 - 888</h4>
<p className="text">24/7 Support Center</p>
</div>

</div>

</div>

<hr className="hr-3"/>


</>
);
}

export default Navbar;
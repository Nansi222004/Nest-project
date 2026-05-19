import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const categories = [
  { name: "Fruits",     key: "fruits",     image: "../assets/category/fruit.png",      products: 24, },
  { name: "Vegetables", key: "vegetables", image: "../assets/category/vegetable.png",  products: 38, },
  { name: "Dairy",      key: "dairy",      image: "../assets/category/dairy.png",      products: 15, },
  { name: "Dry Fruits", key: "dry-fruits", image: "../assets/category/dry-fruits.png", products: 20,  },
];

const users = [
  { name: "Rahul Sharma", email: "rahul@gmail.com",  joined: "12 Apr 2025", orders: 8,  status: "Active"   },
  { name: "Priya Patel",  email: "priya@gmail.com",  joined: "02 Mar 2025", orders: 3,  status: "Active"   },
  { name: "Amit Verma",   email: "amit@gmail.com",   joined: "18 Jan 2025", orders: 0,  status: "Inactive" },
  { name: "Sneha Joshi",  email: "sneha@gmail.com",  joined: "25 Feb 2025", orders: 12, status: "Active"   },
  { name: "Rohan Gupta",  email: "rohan@gmail.com",  joined: "07 May 2025", orders: 1,  status: "Active"   },
];

const navLinks = [
  { label: "Dashboard",  icon: "🏠", path: "/admin"            },
  { label: "Categories", icon: "🗂️", path: "/admin/categories" },
  { label: "Products",   icon: "📦", path: "/admin/products"   },
  { label: "Orders",     icon: "🛒", path: "/admin/orders"     },
  { label: "Users",      icon: "👥", path: "/admin/users"      },
];

export default function AdminDash() {

  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* ── Sidebar ── */}
      <aside className="w-52 shrink-0 bg-white border-r border-gray-200 flex flex-col min-h-screen fixed top-0 left-0 bottom-0">

        {/* Brand */}
        <div className="px-5 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🛒</span>
            <div>
              <p className="font-bold text-gray-800 text-sm leading-tight">FreshMart</p>
              <p className="text-[10px] text-gray-400">Admin Panel</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navLinks.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors no-underline ${
                  active
                    ? "bg-[#3bb77e]/10 text-[#3bb77e] font-semibold"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom user */}
        <div className="px-4 py-4 border-t border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-green-50 text-[#3bb77e] flex items-center justify-center text-xs font-bold shrink-0">
              A
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-gray-700 truncate">Admin</p>
              <Link to="/" className="text-[10px] text-gray-400 hover:text-[#3bb77e] transition-colors no-underline">
                ← Back to site
              </Link>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main ── */}
      <div className="ml-52 flex-1 flex flex-col">

        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 px-7 py-4 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h1 className="text-lg font-bold text-gray-800">Dashboard</h1>
            <p className="text-xs text-gray-400 mt-0.5">Welcome back, Admin</p>
          </div>
          <button className="text-sm bg-[#3bb77e] hover:bg-[#32a46e] text-white px-4 py-2 rounded-lg transition-colors font-medium">
            + Add Product
          </button>
        </header>

        {/* Body */}
        <div className="px-7 py-7 space-y-8 flex-1">

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-xl border border-gray-200 px-5 py-4">
              <p className="text-sm text-gray-400">Total Products</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">97</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 px-5 py-4">
              <p className="text-sm text-gray-400">Total Users</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">{users.length}</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 px-5 py-4">
              <p className="text-sm text-gray-400">Categories</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">{categories.length}</p>
            </div>
          </div>

          {/* Categories */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-gray-700">Categories</h2>
              <button className="text-sm text-[#3bb77e] hover:underline">+ Add Category</button>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {categories.map((cat) => (
                <Link
                  key={cat.key}
                  to={`/admin/category/${cat.key}`}
                  className="bg-white rounded-xl border border-gray-200 hover:border-[#3bb77e] hover:shadow-sm transition-all p-5 flex flex-col items-center text-center gap-3 no-underline group"
                >
                  
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-20 h-20 object-contain"
                      onError={() => setImgErrors((prev) => ({ ...prev, [cat.key]: true }))}
                    />
                  
                  <div>
                    <p className="font-semibold text-gray-700 text-sm group-hover:text-[#3bb77e] transition-colors">
                      {cat.name}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">{cat.products} products</p>
                  </div>
                  <span className="text-xs text-[#3bb77e] bg-green-50 px-3 py-1 rounded-full font-medium">
                    Manage →
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Users */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-semibold text-gray-700">Users</h2>
              <span className="text-xs text-gray-400">{users.length} registered</span>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    {["Name", "Email", "Joined", "Orders", "Status"].map((h) => (
                      <th key={h} className="text-left text-xs font-semibold text-gray-400 uppercase tracking-wider px-5 py-3">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, i) => (
                    <tr key={i} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="px-5 py-3.5">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-green-50 text-[#3bb77e] flex items-center justify-center text-xs font-bold shrink-0">
                            {user.name.charAt(0)}
                          </div>
                          <span className="text-sm font-medium text-gray-700">{user.name}</span>
                        </div>
                      </td>
                      <td className="px-5 py-3.5 text-sm text-gray-400">{user.email}</td>
                      <td className="px-5 py-3.5 text-sm text-gray-400">{user.joined}</td>
                      <td className="px-5 py-3.5 text-sm text-gray-600 font-medium">{user.orders}</td>
                      <td className="px-5 py-3.5">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          user.status === "Active"
                            ? "bg-green-50 text-green-600"
                            : "bg-gray-100 text-gray-400"
                        }`}>
                          {user.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}



// import { Link } from "react-router-dom";

// const categories = [
//   { name: "Fruits", key: "fruits" , image: "../assets/category/fruit.png"},
//   { name: "Vegetables", key: "vegetables", image: "../assets/category/vegetable.png" },
//   { name: "Dairy", key: "dairy" , image: "../assets/category/dairy.png"},
//   { name: "Dry Fruits", key: "dry-fruits", image: "../assets/category/dry-fruits.png" },
// ];

// export default function AdminDash() {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
//         <h1 className="text-2xl font-semibold text-[#3bb77e]">
//           Admin Dashboard
//         </h1>
//         <Link
//           to="/"
//           className="text-sm text-gray-600 hover:text-[#3bb77e]"
//         >
//           Back to Home
//         </Link>
//       </div>

//       {/* Category Section */}
//       <div className="p-6">
//         <h2 className="text-lg font-semibold mb-4 text-gray-700">
//           Manage Categories
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {categories.map((cat) => (
//             <Link
//               key={cat.key}
//               to={`/admin/category/${cat.key}`}
//               className="bg-white rounded-2xl shadow-sm p-5 hover:shadow-md transition border border-gray-100"
//             >
//               <h3 className="text-xl font-semibold text-[#3bb77e] mb-2">
//                 {cat.name}
//               </h3>
//               <img src={cat.image}/>
//               <p className="text-gray-500 text-sm">0 Products</p>

//               <div className="mt-4">
//                 <span className="inline-block text-sm text-white bg-[#3bb77e] px-3 py-1 rounded-full">
//                   View Products
//                 </span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


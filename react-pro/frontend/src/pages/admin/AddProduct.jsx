import { useParams, Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";


export default function AddProductPage() {
  const { categoryName } = useParams();
  const [image, setImage] = useState(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: categoryName,
    stock: "",
  });

  const navigate = useNavigate();

  const handleFile = (e) => {
    const file = e.target.files[0];

    setImage(file);
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
    }))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try{
      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("price", formData.price);
      data.append("stock", formData.stock);
      data.append("category", formData.category);

      if(image){
        data.append("image", image);
      }
    const res = await axios.post("http://localhost:3000/api/products",
        data,
    ) 
    console.log(res);
    navigate(`/admin/category/${categoryName}`);
    } catch (err) { 
        console.log(err);
    }


  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-[#3bb77e]">
          Add Product ({categoryName})                                                                        
        </h1>

        <Link
          to={`/admin/category/${categoryName}`}
          className="text-sm text-gray-600 hover:text-[#3bb77e]"
        >
          ← Back
        </Link>
      </div>


      {/* Content */}
      <div className="p-6 flex justify-center">

        <div className="w-full max-w-2xl bg-white rounded-2xl shadow p-6">

          <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">

            {/* Name */}
            <div>
              <label className="text-sm text-gray-600">Product Name</label>
              <input
              onChange={handleChange}
                name="title"
                value={formData.title}
               className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-[#3bb77e]" />
            </div>

            {/* Price + Stock */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600">Price</label>
                <input
                name="price"
                value={formData.price}
                onChange={handleChange}
                 type="number" className="w-full mt-1 p-2 border rounded-lg" />
              </div>

              <div>
                <label className="text-sm text-gray-600">Stock</label>
                <input 
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                 type="number" className="w-full mt-1 p-2 border rounded-lg" />
              </div>
            </div>

            {/* Image */}
            <div>
              <label className="text-sm text-gray-600">Image</label>
              <input type="file" onChange={handleFile} className="w-full mt-1 p-2 border rounded-lg" />
            </div>

            {/* Description */}
            <div>
              <label className="text-sm text-gray-600">Description</label>
              <textarea 
              name="description"
              value={formData.description}
              onChange={handleChange}
               rows="3" className="w-full mt-1 p-2 border rounded-lg"></textarea>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-4">
              <Link
                to={`/admin/category/${categoryName}`}
                className="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </Link>

              <button className="px-5 py-2 bg-[#3bb77e] text-white rounded-lg hover:opacity-90">
                Add Product
              </button>
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}
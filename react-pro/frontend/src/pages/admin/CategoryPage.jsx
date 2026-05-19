import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

 

  // 🔹 Delete product
  const handleDelete = async (id) => {
    
    const confirmDelete = window.confirm("Delete this product?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
      
      fetchProducts();
    } catch (err) {
    console.error("DELETE ERROR:", err.response || err.message || err);
  }
  };

  const fetchProducts = async () => {
    try{
      const res = await axios.get("http://localhost:3000/api/products");
      const filtered = res.data.filter(
        (p) => p.category === categoryName
      );

      setProducts([...filtered]);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }


 useEffect(() => {
    
  fetchProducts();
  }, [categoryName]);

  

  return ( 

    
    <div className="p-6 bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-[#3bb77e] capitalize">
          {categoryName}
        </h1>

        <Link
          to={`/admin/add-product/${categoryName}`}
          className="bg-[#3bb77e] text-white px-4 py-2 rounded-lg hover:opacity-90"
        >
          + Add Product
        </Link>
      </div>

        {loading ? (
      <div className="text-center py-10">
        <h2>Loading products...</h2>
      </div>
    ) : products.length === 0 ? (
        <div className="bg-white p-10 rounded-2xl shadow text-center">
          <p className="text-gray-500 mb-4">No products in this category</p>

          <Link
            to={`/admin/add-product/${categoryName}`}
            className="bg-[#3bb77e] text-white px-4 py-2 rounded-lg"
          >
            Add First Product
          </Link>
        </div>
      ) : (
        // Table View
        <div className="overflow-x-auto bg-white rounded-xl shadow">
          <table className="w-full text-sm text-left">
            
            {/* Table Head */}
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-3">Image</th>
                <th className="p-3">Name</th>
                <th className="p-3">Price</th>
                <th className="p-3">Stock</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {products.map((product) => (
                <tr key={product._id.toString()} className="border-t">
                  
                  {/* Image */}
                  <td className="p-3">
                    <img
                      src={product?.image}
                      alt={product.title}
                      className=" w-16 h-16 object-cover bg-white rounded border shadow-sm hover:scale-125 transition"
                    />
                  </td>

                  {/* Name */}
                  <td className="p-3 font-medium">
                    {product.title}
                  </td>

                  {/* Price */}
                  <td className="p-3">
                    ₹{product.price}
                  </td>

                  {/* Stock */}
                  <td className="p-3">
                    {product.stock}
                  </td>

                  {/* Status */}
                  <td className="p-3">
                    {product.stock > 0 ? (
                      <span className="text-green-600">In Stock</span>
                    ) : (
                      <span className="text-red-500">Out</span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="p-3 flex gap-3">
                    <Link
                      to={`/admin/product/${product._id}`}
                      className="text-blue-500"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(product._id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
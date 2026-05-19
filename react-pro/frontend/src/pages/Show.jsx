import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {swiperData} from "../data/swiperData";
import {useDispatch} from "react-redux";
import {addToCart} from "../redux/cartSlice";

export default function Show() {
    const[product, setProduct] = useState(null);
    const {id, source} = useParams();

    const dispatch = useDispatch();

  if(source == "api") {
    useEffect(() => {
    axios.get("https://dummyjson.com/products/category/groceries")
    .then(res => {
        const data = res.data.products.find(p => p.id == id)
        setProduct(data);
        // console.log(res.data.products);
    }
)
    .catch(err => console.log(err));
    }, [id])
  }

  if(source == "local") {
    useEffect(() => {
        const data = swiperData.find(item => item.id == id);
        setProduct(data);
    }, [id])
    
  }


    if(!product) {
        return <h1 className="text-center mt-8">Loading...</h1>

    }

    return (
    <div className=" bg-gray-100 p-6 flex justify-center items-center">
      
      <div className="mt-10 bg-white rounded-2xl shadow-lg max-w-5xl w-full grid md:grid-cols-2 gap-8 p-6">
        
        {/* 🔥 Image Section */}
        <div className="flex justify-center items-center">
          <img
            src={product?.images}
            alt={product?.title}
            className="h-80 w-auto object-contain hover:scale-105 transition duration-300"
          />
        </div>

        {/* 🔥 Details Section */}
        <div className="flex flex-col gap-4">
          
          <h1 className="text-2xl font-bold text-gray-800">
            {product?.title}
          </h1>

          <p className="text-sm text-gray-500 capitalize">
            Category: {product?.category}
          </p>

          <p className="text-gray-600">
            {product?.description}
          </p>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-green-600">
              ₹{product?.price}
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="bg-green-500 text-white px-2 py-1 rounded text-sm">
              ⭐ {product?.rating}
            </span>
            <span className="text-gray-500 text-sm">
              Ratings
            </span>
          </div>

          {/* Stock */}
          <p className={`text-sm font-medium ${
            product?.stock > 0 ? "text-green-600" : "text-red-500"
          }`}>
            {product?.stock > 0 
              ? `In Stock (${product?.stock})` 
              : "Out of Stock"}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <button onClick={() => dispatch(addToCart(product))} className="bg-yellow-400 hover:bg-yellow-500 px-6 py-2 rounded-lg font-semibold">
              Add to Cart
            </button>

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold">
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </div>
    )
}
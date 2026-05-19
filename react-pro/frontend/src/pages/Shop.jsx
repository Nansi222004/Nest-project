
import {useEffect , useState} from "react";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts} from "../redux/productSlice";

export default function Shop() {

  const dispatch = useDispatch();
  const {data , loading, error} = useSelector((state) => state.products);


  //  const [data, setData] = useState([]);
  //  const [loading, setLoading] = useState(true);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if(loading) {
        return <h1 className="mt-8 text-center">Loading...</h1>
    }

    return(
        <>
        <h1>Products</h1>

        <div className="flex flex-wrap product-list">
                            
                            {data.map((item) => (
                              
                              <Link to={`/show/api/${item.id}`} key={item.id} item={item} className="product-card">
                
                                <img
                                  src={item.images}
                                  className="card-img"
                                  alt="img"
                                />
                
                                <div className="card-des">
                
                                  <p className="product-type">{item.type}</p>
                
                                  <h5 className="card-title">{item.title}</h5>
                
                                  <div className="card-rating">
                                    ★★★★☆
                                    <span className="mt-2">({item.rating})</span>
                                  </div>
                
                                  <p className="card-text">By {item.by}</p>
                
                                  <div className="flex flex-wrap justify-between">
                
                                    <div className="inline-block product-price">
                                      {item.price}
                                      <span className="line-through text-gray-400 ml-2">
                                        {item.oldP}
                                      </span>
                                    </div>
                
                                    <span className="cart-btn flex items-center gap-1">
                                      <img
                                        className="cart "
                                        src="../../assets/Icons/icon-cart.svg"
                                        alt="cart"
                                      />
                                      <span>Add</span>
                                    </span>
                
                                  </div>
                
                                </div>
                              </Link>
                            ))}
                
                          </div>
    </>
    );

}
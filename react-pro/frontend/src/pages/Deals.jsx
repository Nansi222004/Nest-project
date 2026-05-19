import {dealsData} from "../data/popularData";

export default function Deals() {
    return (
        <>
        <section className="w-full product-tabs">
        
                  <div className="section-title">
                    <h6>we found this items for you!</h6>
        
                    {/* <ul className="list-none flex gap-4">
                      <li>All</li>
                      <li>Milks & Dairies</li>
                      <li>Coffes & Teas</li>
                      <li>Pets Foods</li>
                      <li>Vegetables</li>
                      <li>Fruits</li>
                    </ul> */}
                  </div>
        
                  <div className="flex flex-wrap product-list">
                    
                    {dealsData.map((item) => (
                      <div className="product-card">
        
                        <img
                          src={`../../assets/Products/${item.img}.jpg`}
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
                      </div>
                    ))}
        
                  </div>
        
                </section>
        </>
    )
}
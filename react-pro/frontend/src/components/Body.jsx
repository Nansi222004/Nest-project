// // import MainImg from "./MainImg.jsx";
// // import {swiperData} from "../data/swiperData.js";
// // import {popularData} from "../data/popularData.js";
// // import {bestDealData} from "../data/popularData.js";



// // function Body(){
// //     return(
// //         < >
// //         <div className="body ">
// //             <MainImg  ></MainImg>
            
// //             {/* popular-category */}
// //             <section className="popular-categories mt-5 mb-5">
// //             <div className="d-flex section-title ">
// //                 <h1 >Featured Categories</h1>
// //                 <div className="d-flex ">
// //                     <p>Cake & Milk</p>
// //                     <p>Coffes & Tea</p>
// //                     <p>Pet Foods</p>
// //                     <p>Vegetables</p>
// //                 </div>
// //             </div>

// //             <div className="d-flex mt-4">
// //                 {swiperData.map((item) => (
// //                     <div className="category-card d-flex flex-column align-items-center " key={item.id} style={{backgroundColor:item.bg}}>
// //                         <img src={`../../assets/CategoriesItems/${item.image}.png`} alt={item.title}/>
// //                         <h6>{item.title}</h6>
// //                         <span>{item.items}</span>
// //                     </div>
// //                 ))}
// //             </div>
// //             </section>


// //             {/* category-end-banner */}
// //             <div className="container-fluid ">
// //                 <div className="row banner-row ">
// //                     <div className="col-lg-4 col-md-6 banner-item">
// //                         <img src="../../assets/CategoriesItems/banner-1.png" alt="banner"/>
// //                         <div className="banner-content">
// //                             <h4>Everyday Fresh & <br/> Clean with Our <br/> Products</h4>
// //                             <button className="btn">Shop Now <i className="ri-arrow-right-line"></i></button>
// //                         </div>
// //                     </div>
// //                     <div className="col-lg-4 col-md-6 banner-item">
// //                         <img src="../../assets/CategoriesItems/banner-2.png" alt="banner"/>
// //                         <div className="banner-content">
// //                             <h4>Make your Breakfast <br/> Healthy and Easy</h4>
// //                             <button className="btn ">Shop Now  <i className="ri-arrow-right-line"></i></button>
// //                         </div>
// //                     </div>
// //                     <div className="col-lg-4 col-md-6 banner-item">
// //                         <img src="../../assets/CategoriesItems/banner-3.png" alt="banner"/>
// //                         <div className="banner-content">
// //                             <h4>The best Organic  <br/> Products Online</h4>
// //                             <button className="btn">Shop Now <i className="ri-arrow-right-line"></i></button>
// //                         </div>
// //                     </div>
// //                 </div>

 
// //             </div>

// //             {/* product-tabs */}
// //             <section className="container-fluid product-tabs">
// //                 <div className="section-title ">
// //                     <h3>Popular Products</h3>
// //                     <ul className="list-unstyled d-flex gap-4">
// //                         <li>All</li>
// //                         <li>Milks & Dairies</li>
// //                         <li>Coffes & Teas</li>
// //                         <li>Pets Foods</li>
// //                         <li>Vegetables</li>
// //                         <li>Fruits</li>
// //                     </ul>
// //                 </div>

// //                 <div className="container-fluid d-flex  flex-wrap product-list">
// //                     {popularData.map((item) => (
// //                         <div className=" product-card">
// //                            <img src={`../../assets/Products/${item.img}.jpg`} className="card-img" alt="img"/>
// //                          <div className="card-des">
// //                             <p className="product-type">{item.type}</p>
// //                            <h5 className="card-title">{item.title}</h5>
                           


// //                             <div className="card-rating">
// //                             ★★★★☆  <span className="mt-2 ">({item.rating})</span>
// //                             </div>

// //                            <p className="card-text">By {item.by}</p>

                        
// //                            <div className="d-flex justify-content-between " >
// //                             <div class="d-inline-block product-price">{item.price} &nbsp; <span className="text-overline text-muted "  >{item.oldP}</span></div>
                            
// //                             <span class="cart-btn"><img className="cart"  src="../../assets/Icons/icon-cart.svg" alt="cart"/><span >Add</span></span>
// //                            </div>
                           
// //                           </div>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </section>

// //              {/* best sells */}
// //             <section className="best-sells">
// //                 <div className="section-title ">
// //                     <h3>Daily Best Sells</h3>
// //                     <ul className="list-unstyled d-flex gap-4">
// //                         <li>Festured</li>
// //                         <li>Popular</li>
// //                         <li>New Added</li>
                        
// //                     </ul>
// //                 </div>
// //                 <div className="d-flex container-fluid"> 
// //                     <div class="row">
// //                         <div>
// //                             <img class=" banner" src="../../assets/Images/banner-4.png"/>
// //                         </div>
                        
// //                     </div>
                    
// //                     {bestDealData.map((item) => (

                    
// //                     <div className=" best-card ">
// //                            <img src={`../../assets/Products/${item.img}.jpg`} className="card-img" alt="img"/>
// //                          <div className="card-des">
// //                             <p className="product-type">{item.type}</p>
// //                            <h5 className="card-title">{item.title}</h5>
                           


// //                             <div className="card-rating">
// //                             ★★★★☆  
// //                             </div>

                           

                        
                           
// //                             <div class="d-inline-block product-price">{item.price} &nbsp; <span className="text-overline text-muted "  >{item.oldP}</span></div>
// //                             <p className="">Sold:90/120</p>
                            
// //                             <div class="bestDeal-btn"><img className="cart "  src="../../assets/Icons/icon-cart.svg" alt="cart"/><span > Add To Cart</span></div>
                           
                           
// //                           </div>
// //                         </div>
// //                         ))}
// //                 </div>

// //             </section>




// //         </div>
       
// //         </>
// //     )
// // }

// // export default Body;





// import MainImg from "./MainImg.jsx";
// import { swiperData } from "../data/swiperData.js";
// import { popularData } from "../data/popularData.js";
// import { bestDealData } from "../data/popularData.js";
// import { ltdDealData } from "../data/popularData.js";
// import { productSections } from "../data/popularData.js";
// import { mainImgData } from "../data/popularData.js";
// import { btmMainImg } from "../data/popularData.js";
// import { servicesData } from "../data/popularData.js";






// //swiper-import
// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// // import './styles.css';

// // import required modules
// import { Navigation } from "swiper/modules";

// function Body() {
//   return (
//     <>
//       <div className="body">
//         <MainImg slides={mainImgData} />

//         {/* popular-category */}
//         <section className="popular-categories mt-5 mb-5">

//           <div className="flex section-title-popular">
//             <h3 className="font-bold">Featured Categories </h3>

//             <div className="flex gap-4">
//               <p>Cake & Milk</p>
//               <p>Coffes & Tea</p>
//               <p>Pet Foods</p>
//               <p>Vegetables</p>
//             </div>
//           </div>

//           <div className="flex mt-4 ">
//             {swiperData.map((item) => (
//               <div
//                 className="category-card flex flex-col items-center"
//                 key={item.id}
//                 style={{ backgroundColor: item.bg }}
//               >
//                 <img
//                   src={`../../assets/CategoriesItems/${item.image}.png`}
//                   alt={item.title}
//                 />
//                 <h6>{item.title}</h6>
//                 <span>{item.items}</span>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* category-end-banner */}

//         <div className="w-full">
//           <div className="banner-row flex flex-wrap">

//             <div className="banner-item lg:w-1/3 md:w-1/2 w-full relative">
//               <img src="../../assets/CategoriesItems/banner-1.png" alt="banner" />

//               <div className="banner-content">
//                 <h4>
//                   Everyday Fresh & <br /> Clean with Our <br /> Products
//                 </h4>

//                 <button className="shop-btn">
//                   Shop Now <i className="ri-arrow-right-line"></i>
//                 </button>
//               </div>
//             </div>

//             <div className="banner-item lg:w-1/3 md:w-1/2 w-full relative">
//               <img src="../../assets/CategoriesItems/banner-2.png" alt="banner" />

//               <div className="banner-content">
//                 <h4>
//                   Make your Breakfast <br /> Healthy and Easy
//                 </h4>

//                 <button className="shop-btn">
//                   Shop Now <i className="ri-arrow-right-line"></i>
//                 </button>
//               </div>
//             </div>

//             <div className="banner-item lg:w-1/3 md:w-1/2 w-full relative">
//               <img src="../../assets/CategoriesItems/banner-3.png" alt="banner" />

//               <div className="banner-content">
//                 <h4>
//                   The best Organic <br /> Products Online
//                 </h4>

//                 <button className="shop-btn">
//                   Shop Now <i className="ri-arrow-right-line"></i>
//                 </button>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* product-tabs */}

//         <section className="w-full product-tabs">

//           <div className="section-title">
//             <h3>Popular Products</h3>

//             <ul className="list-none flex gap-4">
//               <li>All</li>
//               <li>Milks & Dairies</li>
//               <li>Coffes & Teas</li>
//               <li>Pets Foods</li>
//               <li>Vegetables</li>
//               <li>Fruits</li>
//             </ul>
//           </div>

//           <div className="flex flex-wrap product-list">

//             {popularData.map((item) => (
//               <div className="product-card">

//                 <img
//                   src={`../../assets/Products/${item.img}.jpg`}
//                   className="card-img"
//                   alt="img"
//                 />

//                 <div className="card-des">

//                   <p className="product-type">{item.type}</p>

//                   <h5 className="card-title">{item.title}</h5>

//                   <div className="card-rating">
//                     ★★★★☆
//                     <span className="mt-2">({item.rating})</span>
//                   </div>

//                   <p className="card-text">By {item.by}</p>

//                   <div className="flex justify-between">

//                     <div className="inline-block product-price">
//                       {item.price}
//                       <span className="line-through text-gray-400 ml-2">
//                         {item.oldP}
//                       </span>
//                     </div>

//                     <span className="cart-btn flex items-center gap-1">
//                       <img
//                         className="cart "
//                         src="../../assets/Icons/icon-cart.svg"
//                         alt="cart"
//                       />
//                       <span>Add</span>
//                     </span>

//                   </div>

//                 </div>
//               </div>
//             ))}

//           </div>

//         </section>

//         {/* best sells */}

//         <section className="best-sells ">

//           <div className="product-section-title">

//             <h3>Daily Best Sells</h3>

//             <ul className="list-none flex gap-4">
//               <li>Featured</li>
//               <li>Popular</li>
//               <li>New Added</li>
//             </ul>

//           </div>

//           <div className="flex best-deal-slider w-full ">

        
//               <div
//                 className="banner-img"
//               >
//               <div className="best-banner-content">
//                   <h2 className="mb-24 font-extrabold  text-[40px] ">Bring nature into your home</h2>
//                 <button className="shop-btn">
//                   Shop Now <i className="ri-arrow-right-line"></i>
//                 </button>
//               </div>
                
//               </div>

//             <Swiper
//             slidesPerView="auto"
//         spaceBetween={23}
//         loop={true}
//         navigation={true}
//         modules={[Navigation,]}
//         className="mySwiper"
//       >

          
//         {bestDealData.map((item) => (

//         <SwiperSlide className="bestDeal-swiper">
//               <div className="best-card">
//                  <div className="text-white hot"  style={{ backgroundColor: item.bg }}>{item.hot}</div>
//                 <img
//                   src={`../../assets/Products/${item.img}.jpg`}
//                   className="card-img"
//                   alt="img"
//                 />

//                 <div className="card-des">

//                   <p className="product-type">{item.type}</p>

//                   <h5 className="card-title">{item.title}</h5>

//                   <div className="card-rating ">★★★★☆</div>

//                   <div className="inline-block product-price mt-3">
//                     {item.price}
//                     <span className="line-through text-gray-400 ml-2 text-sm font-bold">
//                       {item.oldP}
//                     </span>
//                   </div>



                 
//                   <div class="stock-bar mt-[15px] mb-[5px]">
//                     <div className="stock-fill"></div>
//                   </div>
//                   <p className="text-xs font-bold mb-[15px]">Sold: 90/120</p>

//                   <div className="bestDeal-btn flex place-content-center  gap-2">
//                     <img
//                         className="cart invert brightness-0 "
//                         src="../../assets/Icons/icon-cart.svg"
//                         alt="cart"
//                       />
//                     <span>Add To Cart</span>
//                   </div>

//                 </div>

//               </div>
//               </SwiperSlide>

//             ))}




//       </Swiper>

            

//           </div>

//         </section>


//          {/* limited-time-products */}
//         <section className="ltd-section">
//           <div className="product-section-title">

//             <h3>Deals Of The Day</h3>

//             <p className="list-none flex gap-4">All Deals</p>

//           </div>
          

//         <div className="flex gap-[24px]">

//           {ltdDealData.map((item) => (
                
          
//           <div className="ltd-card">
//             <div className="ltd-img-div">
//               <img src={`../../assets/Images/${item.img}.png`} alt="banner" />
//             </div>
            
//             <div className="ltd-card-content">
//               <div className="deals-countdown flex justify-evenly mb-[16px]">
//                 <span className="countdown-section">
//                   <div className="countdown-time text-[20px]">43</div>
//                   <div className="countdown-unit  text-[16px]">Days</div>
//                 </span>
//                 <span className="countdown-section">
//                   <div className="countdown-time text-[20px]">9</div>
//                   <div className="countdown-unit text-[16px]">Hours</div>
//                 </span>
//                 <span className="countdown-section">
//                   <div className="countdown-time text-[20px]">35</div>
//                   <div className="countdown-unit text-[16px]">Mins</div>
//                 </span>
//                 <span className="countdown-section">
//                   <div className="countdown-time text-[20px]">59</div>
//                   <div className="countdown-unit text-[16px]">Sec</div>
//                 </span>
//               </div>
//              <div className="card-des ltd-card-des shadow-sm">

//                   <h5 className="card-title">{item.title}</h5>

//                   <div className="card-rating">
//                     ★★★★☆
//                     <span className="mt-2">({item.rating})</span>
//                   </div>

//                   <p className="card-text">by {item.by}</p>

//                   <div className="flex justify-between">

//                     <div className="inline-block product-price">
//                       {item.price}
//                       <span className="line-through text-gray-400 ml-2">
//                         {item.oldP}
//                       </span>
//                     </div>

//                     <span className="cart-btn flex items-center gap-1">
//                       <img
//                         className="cart "
//                         src="../../assets/Icons/icon-cart.svg"
//                         alt="cart"
//                       />
//                       <span>Add</span>
//                     </span>

//                   </div>

//                 </div>
//               </div>

//           </div>

//           ))}
//           </div>
          
//         </section>
        

//         {/* bottom-products */}

//         <section className="btm-section flex mt-14">
//           {productSections.map((category) => (

          
//           <div className="section-category px-[12px]">
//             <h4 className="font-bold pb-2">{category.title}</h4>

//             <div className=" m-0 fill-hr"></div>  
//             <hr className=" mt-0  ">
              
//             </hr>

//             <div className="flex flex-column ">
//               {category.items.map((item) =>(

              
//               <div className="btm-card flex items-center mt-3">
//                 <div className="btm-img ">
//                   <img className=" "  src={`../../assets/SellingImg/${item.image}.jpg`}/>
//                 </div>
                
                
//                   <span className="btm-card-des ">

//                   <h5 className="card-title ">{item.name}</h5>

//                   <div className="card-rating">
//                     ★★★★☆
//                     <span className="mt-2">(4.0)</span>
//                   </div>


//                   <div className="">

//                     <div className="inline-block product-price">
//                        $48.85
//                       <span className="line-through text-gray-400 ml-2">
//                           $52.85
//                       </span>
//                     </div>
//                   </div>
//                 </span>
//               </div>
//               ))}
//             </div>
//           </div>
//           ))}
//         </section>

//         {/* end-banner */}
//         <MainImg slides={btmMainImg} className="end-banner"/>

//         <section className="services-section flex">
//             {servicesData.map((item) => (
//               <div class="srvs-card flex">
//                 <img src={`../../assets/Icons/${item.img}.svg`}/>
//                 <div className="srvs-card-content">
//                 <h3 className="srvs-title">{item.title}</h3>
//                 <p>{item.des}</p>
//                 </div>
//               </div>
//             ))}
//         </section>

//       </div>
//     </>
//   );
// }

// export default Body;












// //sample


// // import React, { useRef, useState } from 'react';
// // // Import Swiper React components
// // import { Swiper, SwiperSlide } from 'swiper/react';

// // // Import Swiper styles
// // import 'swiper/css';
// // import 'swiper/css/pagination';

// // import './styles.css';

// // // import required modules
// // import { Pagination } from 'swiper/modules';

// // export default function App() {
// //   return (
// //     <>
// //       <Swiper
// //         slidesPerView={3}
// //         spaceBetween={30}
// //         pagination={{
// //           clickable: true,
// //         }}
// //         modules={[Pagination]}
// //         className="mySwiper"
// //       >
// //         <SwiperSlide>Slide 1</SwiperSlide>
// //         <SwiperSlide>Slide 2</SwiperSlide>
// //         <SwiperSlide>Slide 3</SwiperSlide>
// //         <SwiperSlide>Slide 4</SwiperSlide>
// //         <SwiperSlide>Slide 5</SwiperSlide>
// //         <SwiperSlide>Slide 6</SwiperSlide>
// //         <SwiperSlide>Slide 7</SwiperSlide>
// //         <SwiperSlide>Slide 8</SwiperSlide>
// //         <SwiperSlide>Slide 9</SwiperSlide>
// //       </Swiper>
// //     </>
// //   );
// // }

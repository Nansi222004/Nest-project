
import MainImg from "../components/MainImg.jsx";
import { swiperData } from "../data/swiperData.js";
import { popularData } from "../data/popularData.js";
import { bestDealData } from "../data/popularData.js";
import { ltdDealData } from "../data/popularData.js";
import { productSections } from "../data/popularData.js";
import { mainImgData } from "../data/popularData.js";
import { btmMainImg } from "../data/popularData.js";
import { servicesData } from "../data/popularData.js";

import {Link} from "react-router-dom";




//swiper-import
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Navigation } from "swiper/modules";

function Home() {
  return (
    <>
      <div className="body">
        <MainImg slides={mainImgData} />

        {/* popular-category */}
        <section className="popular-categories mt-14 mb-12 ">

          <div className="flex section-title-popular items-baseline">
            <h3 className="font-bold text-3xl">Featured Categories </h3>

            <div className="flex gap-4">
              <p className="hidden sm:inline-block">Cake & Milk</p>
              <p className="hidden lg:inline-block">Coffes & Tea</p>
              <p className="hidden md :inline-block">Pet Foods</p>
              <p className="hidden sm:inline-block">Vegetables</p>
            </div>


        <div className="ml-auto flex gap-3">
            <div className="prev ">
        <i class="ri-arrow-left-line"></i>
      </div>
      <div className="next    ">
        <i class="ri-arrow-right-line"></i>
      </div> </div>
          </div>

          <div className="flex  ">

            <Swiper
        breakpoints={{
          320:{
            slidesPerView:2.5,
          },
          375:{
            slidesPerView:2.9,
          },
          640:{
            slidesPerView:5,
          },
          768:{
            slidesPerView:6,
          },
          992:{
            slidesPerView:7,
          },
          1024:{
            slidesPerView:8,
          },
          1280:{
            slidesPerView:10,
          },


        }}
        
        loop={true}
        navigation={{
          prevEl:"prev",
          nextEl:"next"
        }}
        onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = ".prev";
            swiper.params.navigation.nextEl = ".next";
        }}
        modules={[Navigation]}
        className="my"
      >
            {swiperData.map((item) => (
              <SwiperSlide >
              <Link
                to={`show/local/${item.id}`}
                className="category-card flex flex-col items-center"
                key={item.id}
                style={{ backgroundColor: item.bg }}
              >
                <img
                  src={item.images}
                  alt={item.title}
                />
                <h6>{item.title}</h6>
                <span>{item.items}</span>
              </Link>
              </SwiperSlide>
            ))}
            </Swiper>
            
          </div>
        </section>

        {/* category-end-banner */}

        <div className="w-full">
          <div className="banner-row flex gap-y-5 flex-wrap">

            <div className="banner-item w-full sm:w-1/2 min-[992px]:w-1/3 px-3 relative">
              <img src="../../assets/CategoriesItems/banner-1.png" alt="banner" />

              <div className="banner-content absolute  ">
                <h4 className="banner-text">
                  Everyday Fresh & <br /> Clean with Our <br /> Products
                </h4>

                <button className="shop-btn">
                  Shop Now <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>

            <div className="banner-item w-full sm:w-1/2 min-[992px]:w-1/3 px-3 relative">
              <img src="../../assets/CategoriesItems/banner-2.png" alt="banner" />

              <div className="banner-content absolute  ">
                <h4 className="banner-text">
                  Make your Breakfast <br /> Healthy and Easy
                </h4>

                <button className="shop-btn">
                  Shop Now <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>

            <div className="banner-item block sm:hidden min-[992px]:block min-[992px]:w-1/3 px-3  relative">
              <img src="../../assets/CategoriesItems/banner-3.png" alt="banner" />

              <div className="banner-content absolute ">
                <h4 className="banner-text">
                  The best Organic <br /> Products Online
                </h4>

                <button className="shop-btn">
                  Shop Now <i className="ri-arrow-right-line"></i>
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* product-tabs */}

        <section className="w-full product-tabs">

          <div className="section-title flex justify-between">
            <h3>Popular Products</h3>

            <ul className="list-none  flex flex-wrap ">
              <li>All</li>
              <li>Milks & Dairies</li>
              <li>Coffes & Teas</li>
              <li>Pets Foods</li>
              <li>Vegetables</li>
              <li>Fruits</li>
            </ul>
          </div>

          <div className="flex flex-wrap product-list">

            {popularData.map((item, index) => (
              <div className={`product-card  ${index === 9 ? "block md:hidden lg:block" : " "}`}>

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

                  <div className="flex  justify-between">

                    <div className="flex items-center flex-wrap">
                      <span className="product-price mr-4">
                        {item.price}
                      </span>
                      
                      <span className="line-through text-gray-400 text-sm ">
                        {item.oldP}
                      </span>
                    </div>

                    <span className="cart-btn flex justify-center items-center gap-1">
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

        {/* best sells */}

        <section className="best-sells ">

          <div className="product-section-title">

            <h3>Daily Best Sells</h3>

            <ul className="list-none flex gap-4">
              <li>Featured</li>
              <li>Popular</li>
              <li>New Added</li>
            </ul>

          </div>

          <div className="flex best-deal-slider w-full ">

        
              <div
                className="banner-img hidden lg:block"
              >
              <div className="best-banner-content">
                  <h2 className="mb-24 font-extrabold  text-[40px] ">Bring nature into your home</h2>
                <button className="shop-btn">
                  Shop Now <i className="ri-arrow-right-line"></i>
                </button>
              </div>
                
              </div>

            <Swiper
            // breakpoints={{
            //   320:{
            //     slidesPerView:"1"
            //   },
            //   640:{slidesPerView:"auto"
            //   },
             

            // }}
            slidesPerView="auto"
            
        spaceBetween={23}
        loop={true}
        navigation={{
          prevEl:"prevEle",
          nextEl:"nextEle",
        }}
        onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = ".prevEle";
            swiper.params.navigation.nextEl = ".nextEle";
        }}

        modules={[Navigation,]}
        className="mySwiper mx-auto"
      >

          
        {bestDealData.map((item) => (

        <SwiperSlide className="bestDeal-swiper">
              <div className="best-card">
                 <div className="text-white hot"  style={{ backgroundColor: item.bg }}>{item.hot}</div>
                <img
                  src={`../../assets/Products/${item.img}.jpg`}
                  className="card-img"
                  alt="img"
                />

                <div className="card-des">

                  <p className="product-type">{item.type}</p>

                  <h5 className="card-title">{item.title}</h5>

                  <div className="card-rating ">★★★★☆</div>

                  <div className="inline-block product-price mt-3">
                    {item.price}
                    <span className="line-through text-gray-400 ml-2 text-sm font-bold">
                      {item.oldP}
                    </span>
                  </div>



                 
                  <div class="stock-bar mt-[15px] mb-[5px]">
                    <div className="stock-fill"></div>
                  </div>
                  <p className="text-xs font-bold mb-[15px]">Sold: 90/120</p>

                  <div className="bestDeal-btn flex place-content-center  gap-2">
                    <img
                        className="cart invert brightness-0 "
                        src="../../assets/Icons/icon-cart.svg"
                        alt="cart"
                      />
                    <span>Add To Cart</span>
                  </div>

                </div>

              </div>
              </SwiperSlide>

            ))}

            {/* Navigation keys */}
              <div className="prevEle  absolute left-0 top-1/2 z-10  ">
        <i class="ri-arrow-left-line"></i>
      </div>
      <div className="nextEle absolute right-0 top-1/2 z-10 ">
        <i class="ri-arrow-right-line"></i>
      </div>




      </Swiper>

            

          </div>

        </section>


         {/* limited-time-products */}
        <section className="ltd-section">
          <div className="product-section-title">

            <h3>Deals Of The Day</h3>

            <p className="list-none flex gap-4">All Deals</p>

          </div>
          

        <div className="flex flex-wrap gap-[24px] ">

          {ltdDealData.map((item, index) => (
                
          
          <div className={`ltd-card ${index === 3 ? "lg:hidden xl:block" : ""}`}>
            <div className="ltd-img-div">
              <img src={`../../assets/Images/${item.img}.png`} alt="banner" />
            </div>
            
            <div className="ltd-card-content">
              <div className="deals-countdown flex justify-evenly mb-[16px]">
                <span className="countdown-section">
                  <div className="countdown-time text-[20px]">43</div>
                  <div className="countdown-unit  text-[16px]">Days</div>
                </span>
                <span className="countdown-section">
                  <div className="countdown-time text-[20px]">9</div>
                  <div className="countdown-unit text-[16px]">Hours</div>
                </span>
                <span className="countdown-section">
                  <div className="countdown-time text-[20px]">35</div>
                  <div className="countdown-unit text-[16px]">Mins</div>
                </span>
                <span className="countdown-section">
                  <div className="countdown-time text-[20px]">59</div>
                  <div className="countdown-unit text-[16px]">Sec</div>
                </span>
              </div>
             <div className="card-des ltd-card-des shadow-sm">

                  <h5 className="card-title">{item.title}</h5>

                  <div className="card-rating">
                    ★★★★☆
                    <span className="mt-2">({item.rating})</span>
                  </div>

                  <p className="card-text">by {item.by}</p>

                  <div className="flex justify-between">

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

          </div>

          ))}
          </div>
          
        </section>
        

        {/* bottom-products */}

        <section className="btm-section flex-wrap lg:flex-nowrap flex mt-14">
          {productSections.map((category) => (

          
          <div className="section-category px-[12px]">
            <h3 className="font-bold pb-2 text-2xl">{category.title}</h3>

            <div className=" m-0 fill-hr"></div>  
            <hr className=" mt-0  ">
              
            </hr>

            <div className="flex flex-col ">
              {category.items.map((item) =>(

              
              <div className="btm-card flex items-center mt-3">
                <div className="btm-img ">
                  <img className=" "  src={`../../assets/SellingImg/${item.image}.jpg`}/>
                </div>
                
                
                  <span className="btm-card-des ">

                  <h5 className="card-title ">{item.name}</h5>

                  <div className="card-rating">
                    ★★★★☆
                    <span className="mt-2">(4.0)</span>
                  </div>


                  <div className="">

                    <div className="inline-block product-price">
                       $48.85
                      <span className="line-through text-gray-400 ml-2">
                          $52.85
                      </span>
                    </div>
                  </div>
                </span>
              </div>
              ))}
            </div>
          </div>
          ))}
        </section>

        {/* end-banner */}
        <MainImg slides={btmMainImg} className="end-banner"/>

        <section className="services-section flex flex-wrap md:flex-nowrap justify-center gap-y-4 ">
            {servicesData.map((item) => (
              <div class="srvs-card flex flex-wrap xl:flex-nowrap justify-center w-full md:w-auto ">
                <img src={`../../assets/Icons/${item.img}.svg`}/>
                <div className="srvs-card-content">
                <h3 className="srvs-title">{item.title}</h3>
                <p>{item.des}</p>
                </div>
              </div>
            ))}
        </section>

      </div>
    </>
  );
}

export default Home;
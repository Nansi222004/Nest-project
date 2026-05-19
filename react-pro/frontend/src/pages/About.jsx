import React, { useRef, useState } from 'react';
import {about2Data} from "../data/popularData.js";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules

import { Navigation, Autoplay } from 'swiper/modules';

export default function About(){
        const slider1 = [1,2,3,4,5];
        
    return(
        <>

             <section className="aboutS-1 flex flex-wrap justify-center xl:flex-nowrap overflow-hidden ">
                <img className="ab-img w-[90%] xl:w-1/2 h-[614px] opacity-90 object-cover" src="./assets/Images/ab-img.png" />
                <div className="ab-1-content overflow-hidden ">
                  <div>
                    <h2 className="font-bold mb-[30px] text-4xl">Welcome to Nest</h2>
                    <p className="opacity-70">At NEST, we believe that good food brings people together and creates lasting memories. Our platform is designed to make healthy, fresh, and delicious food easily accessible to everyone. From farm-fresh vegetables to ready-to-eat snacks, we carefully curate products that match quality, taste, and convenience.

                    We are committed to delivering a seamless shopping experience with a focus on freshness, affordability, and trust.
                    </p>
                    <p className="opacity-70">Our mission is to build a community that values healthy eating and smart choices. With a user-friendly interface and reliable delivery, we aim to simplify your everyday food needs while maintaining the highest standards of quality.

                    At NEST, we don’t just deliver food — we deliver freshness, happiness, and a better way to live.</p>  
                  </div>       
                    

    

    <div className="relative flex mt-12 h-[192px]">
        <Swiper
        slidesPerView={3}
        loop={true}
        spaceBetween={24}
        navigation={{
            prevEl: ".prev",
            nextEl:".next",
        }}
        onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = ".prev";
            swiper.params.navigation.nextEl = ".next";
        }}
        autoplay={{
           delay: 3000,              // time between slides (ms)
           disableOnInteraction: false, // keep running after user interaction
        }}
        modules={[Navigation, Autoplay]}
        
        
        className="about1-swiper"
      >

        {slider1.map((img) => (

            <SwiperSlide className="about1-slide" key={img.id}>
             <img src={`./assets/Images/sli-img-${img}.jpg`}  className=" w-[156px] h-full object-cover"/>
            </SwiperSlide>

            ))}
        
        
      </Swiper>

      <div className="prev absolute -left-3 z-20 top-1/3">
        <i class="ri-arrow-left-line"></i>
      </div>
      <div className="next absolute -right-3 inline-block z-20 top-1/3">
        <i class="ri-arrow-right-line"></i>
      </div>
        
            </div>
   
                           
                </div>
             </section >

             <section className="aboutS-2  ">
                <div className=" text-center">
                    <h1 className="font-bold opacity-90" >What We Provide?</h1>
                    <img className="mx-auto mt-3" src="../../assets/Icons/wave.png" alt="wave"/>
                </div>
                <div className="ab-services-section flex justify-center items-stretch flex-wrap mt-8">
                            {about2Data.map((item) => (
                              <div className="ab-ser-card px-auto  " >  
                              <div class=" ab-srvs-card text-center ">
                                <img className="mx-auto w-24 h-24 mb-10" src={`../../assets/Icons/${item.img}.svg`}/>
                                <div className="ab-srvs-card-content">
                                <h4 className="ab-srvs-title font-bold opacity-90 mb-8">{item.title}</h4>
                                <p className="opacity-70">{item.des}</p>
                                </div>
                              </div>
                              </div>
                            ))}
                </div>
             </section>

             
        </>
    )
}

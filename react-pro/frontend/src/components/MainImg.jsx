import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { mainImgData } from "../data/popularData.js";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function MainImg({slides, className}) {
  return (
    <div className="px-2 ">
      <Swiper
        loop={true}
        navigation={{
          prevEl:"left-btn",
          nextEl:"right-btn"
        }}
        onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = ".left-btn";
            swiper.params.navigation.nextEl = ".right-btn";
        }}
        pagination={true}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="mySwiper-mImg"
      >
        {slides.map((item) => (

        
        <SwiperSlide className={`${className}`}>
            <img src={`/assets/images/${item.img}.png`} className="w-full h-[320px] md:h-[340px] lg:h-[390px] xl:h-[510px] block object-cover mainImg" alt="slide1" />
            <div class="slider-content">
                <h1>{item.heading1} <br/> {item.heading2}</h1>
                <p className="">{item.des}</p>
                <div class="flex items-center slider-form">
                    <i class="ri-telegram-2-line opacity-50 text-2xl"></i>
                    <input type="text" class="ml-3  border-0" placeholder="Your email address" />
                    <button class="btn " type="button" >Subscribe</button>
                </div>
            </div>
            
            {/* Navigation keys */}
              <div className="left-btn hidden md:block absolute left-0 top-1/2  ">
        <i class="ri-arrow-left-line"></i>
      </div>
      <div className="right-btn hidden md:block absolute right-0 top-1/2  ">
        <i class="ri-arrow-right-line"></i>
      </div>
        </SwiperSlide>
        ))}
    
      </Swiper>
    </div>
  );
}




// import { Swiper, SwiperSlide } from 'swiper/react';



// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// import { Pagination } from 'swiper/modules';
// export default function MainImg() {
//   return (
//     <>
//       <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
//         <SwiperSlide><img src="/assets/images/slider-1.png"/></SwiperSlide>
//         <SwiperSlide><img src="/assets/images/slider-2.png"/></SwiperSlide>
        
//       </Swiper>
//     </>
//   );
// }




// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';


// // import required modules
// import { Pagination } from 'swiper/modules';

// export default function MainImg() {
//   return (
//     <>
//       <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
//         <SwiperSlide>
//             <img src="/assets/images/slider-1.png" alt="slide1" />
//         </SwiperSlide>
//         <SwiperSlide>
//             <img src="/assets/images/slider-2.png" alt="slide2" />
//         </SwiperSlide>
        
//       </Swiper>
//     </>
//   );
// }







// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";

// import { Navigation, Mousewheel, Keyboard } from "swiper/modules";

// export default function MainImg() {
//   return (
//     <Swiper
//       navigation={true}
//       mousewheel={true}
//       keyboard={true}
//       loop={true}
//       modules={[Navigation, Mousewheel, Keyboard]}
//       className="mySwiper"
//     >

//       <SwiperSlide>

//         <div className="relative">

//           <img
//             src="/assets/images/slider-1.png"
//             alt="slide1"
//             className="mainImg w-full"
//           />

//           <div className="slider-content">

//             <h1 className="text-4xl font-bold leading-tight">
//               Don't miss amazing <br /> grocery deals
//             </h1>

//             <p className="mt-2 text-gray-600">
//               Sign up for the daily newsletter
//             </p>

//             <div className="flex items-center mt-4 bg-white rounded-lg px-4 py-2 w-[350px]">

//               <i className="ri-telegram-2-line text-xl mr-2"></i>

//               <input
//                 type="text"
//                 placeholder="Your email address"
//                 className="flex-1 outline-none"
//               />

//               <button className="px-4 py-2 bg-green-500 text-white rounded">
//                 Subscribe
//               </button>

//             </div>

//           </div>

//         </div>

//       </SwiperSlide>

//       <SwiperSlide>

//         <div className="relative">

//           <img
//             src="/assets/images/slider-2.png"
//             alt="slide2"
//             className="mainImg w-full"
//           />

//           <div className="slider-content ">

//             <h1 className="text-4xl font-bold leading-tight">
//               Fresh Vegetables <br /> Big discount
//             </h1>

//             <p className="mt-2 text-gray-600">
//               Save up to 50% off on your first order
//             </p>

//             <div className="flex items-center mt-4 bg-white rounded-lg px-4 py-2 w-[350px]">

//               <i className="ri-telegram-2-line text-xl mr-2"></i>

//               <input
//                 type="text"
//                 placeholder="Your email address"
//                 className="flex-1 outline-none"
//               />

//               <button className="px-4 py-2 bg-green-500 text-white rounded">
//                 Subscribe
//               </button>

//             </div>

//           </div>

//         </div>

//       </SwiperSlide>

//     </Swiper>
//   );
// }
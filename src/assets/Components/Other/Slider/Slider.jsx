// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import Card from "../card/Card";
// import { useQuery } from "react-query";
// import axios from "axios";

export default function Slider() {
  const equipments = [
    {
      id: 1,
      img: "https://kontakt.az/media/ves/brand/SamsungLogo-6413e586.webp",
    },
    {
      id: 2,
      img: "https://kontakt.az/media/ves/brand/Applenewlogo-6d6b8aea.webp",
    },
    {
      id: 3,
      img: "https://kontakt.az/media/ves/brand/Lg-aee4b428.webp",
    },{
      id: 4,
      img: "https://kontakt.az/media/ves/brand/Xiaominewlogo-2123f785.webp",
    },{
      id: 5,
      img: "https://kontakt.az/media/ves/brand/Hoffmann-91589406.webp",
    },{
      id: 6,
      img: "https://kontakt.az/media/ves/brand/Toshiba-ab509b65.webp",
    },{
      id: 7,
      img: "https://kontakt.az/media/ves/brand/Bosch-048095cb.webp",
    },{
      id: 8,
      img: "https://kontakt.az/media/ves/brand/Oppo-f1126554.webp",
    },{
      id: 9,
      img: "https://kontakt.az/media/ves/brand/Dyson-4724c799.webp",
    },{
      id: 10,
      img: "https://kontakt.az/media/ves/brand/SCHAFER-dffb4887.webp",
    },{
      id: 11,
      img: "https://kontakt.az/media/ves/brand/Huaweinewlogo-80cc7fc8.webp",
    },{
      id: 12,
      img: "https://kontakt.az/media/ves/brand/Hp-56f4253c.webp",
    },{
      id: 13,
      img: "https://kontakt.az/media/ves/brand/Acer-90486c00.webp",
    },{
      id: 14,
      img: "https://kontakt.az/media/ves/brand/Panasonic-8cc2b597.webp",
    },{
      id: 15,
      img: "https://kontakt.az/media/ves/brand/Electrolux-5bf72fe8.webp",
    },{
      id: 16,
      img: "https://kontakt.az/media/ves/brand/Braun-f4c6a5a5.webp",
    },{
      id: 17,
      img: "https://kontakt.az/media/ves/brand/Asus-e6125219.webp",
    },{
      id: 17,
      img: "https://kontakt.az/media/ves/brand/Tefal-14828313.webp",
    }
  ];
  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={50} 
      slidesPerView={10} 
      // pagination={{ clickable: true }} 
      loop={true} 
      className="p-3 flex justify-center items-center w-[93%] mb-3 bg-white rounded-md"
      // loopedSlides={data.length} 
      >
      {
        equipments && equipments.map((item) => (
          <SwiperSlide key={item.id}><img src={item.img} alt="brand-logo" className='w-[58px] h-[58px] border-spacing-1 border-5'/></SwiperSlide>
        
      ))}
    </Swiper>
  ); 
};


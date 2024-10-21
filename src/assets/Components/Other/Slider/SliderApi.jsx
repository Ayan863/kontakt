import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "../card/Card";
import { useQuery } from "react-query";
import axios from "axios";
import {  LinearProgress } from "@mui/joy";
// import OtherCard from "../Card/OtherCard";

const CarouselApi = (props) => {
  const { data, isLoading } = useQuery(
    ["products"], 
    async () => {
    const { data } = await axios.get(props.url);
    console.log(data.map((item)=>item.image));
    return data;
  });

  if (isLoading) return <LinearProgress />

  return (
    <Swiper
      modules={[Navigation, Scrollbar, A11y,Autoplay]}
      spaceBetween={50} 
      slidesPerView={5} 
      // navigation
      // pagination={{ clickable: true }} 
      loop={true} 
      autoplay={{ delay: 4000, disableOnInteraction: false }}

      className="w-[95%]"
      // loopedSlides={data.length} 
      >
        
      {
        data && data.map((item) => (
        <SwiperSlide key={item.id} className="flex justify-center">
          <Card
          image={item.image} 
          title={item.title}
          firstPrice={item.firstPrice}
          lastPrice={item.lastPrice}
          sale={item.sale}

          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselApi;

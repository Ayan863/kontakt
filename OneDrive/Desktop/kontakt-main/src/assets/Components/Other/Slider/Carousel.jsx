import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import OtherCard from "../card/OtherCard";
import { useQuery } from "react-query";
import axios from "axios";
import { Button } from "@mui/joy";
// import OtherCard from "../Card/OtherCard";

const CarouselApi = (props) => {
  const { data, isLoading } = useQuery(
    ["products"], 
    async () => {
    const { data } = await axios.get(props.url);
    console.log(data.map((item)=>item.image));
    return data;
  });

  if (isLoading) return <Button loading variant="plain" className="flex justify-center-center w-[100%]">
  Plain
</Button>
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={50} 
      slidesPerView={2} 
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      // navigation
      // pagination={{ clickable: true }} 
      loop={true} 
      className="w-[97%]"
      // loopedSlides={data.length} 
      >
      {
        data && data.map((item) => (
        <SwiperSlide key={item.id} className="flex justify-center">
          <OtherCard
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

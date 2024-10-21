import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";

export default function Videos() {
  const [open, setOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const equipments = [
    {
      id: 1,
      video: "https://www.youtube.com/embed/_opqmkB_Iwc",
    },
    {
      id: 2,
      video: "https://www.youtube.com/embed/uK2WbyJx-c4",
    },
    {
      id: 3,
      video: "https://www.youtube.com/embed/tHTqxvBYtbA",
    },
    {
      id: 4,
      video: "https://www.youtube.com/embed/mjW3VJ_bw_c",
    },
    {
      id: 5,
      video: "https://www.youtube.com/embed/mjW3VJ_bw_c",
    },
  ];

  const handleVideoClick = (videoUrl) => {
    setCurrentVideo(videoUrl); // Tıklanan videoyu kaydediyoruz
    setOpen(true); // Modalı açıyoruz
  };

  return (
    <>
      <p className="w-[95%] m-auto text-[20px] text-[Montserrat,sans-serif] font-semibold p-4">
      Kontakt TV
      </p>

      <Swiper
        modules={[Navigation, Scrollbar, A11y,Autoplay]}
        spaceBetween={50}
        slidesPerView={4}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loopedSlides={5} 
        className="p-3 flex justify-center items-center w-[93%] mb-3 bg-white rounded-md"
      >
        {equipments &&
          equipments.map((item) => (
            <SwiperSlide key={item.id}>
              {/* iframe'i bir div ile saralım */}
              <div
                onClick={() => handleVideoClick(item.video)}
                style={{ cursor: "pointer", position: "relative" }}
              >
                <iframe
                  width="300"
                  height="200"
                  src={item.video}
                  title={`Video ${item.id}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ pointerEvents: "none" }} // iframe içindeki etkileşimi engelliyoruz
                ></iframe>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                  }}
                ></div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Modal yapısı */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog layout="center" size="lg">
          <ModalClose />
          <Typography component="h2"><img src="http://localhost:5175/src/assets/Components/Pages/img/logo.svg" alt="kontakt" /></Typography>
          <iframe
            width="600"
            height="400"
            src={currentVideo}
            title="Selected Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </ModalDialog>
      </Modal>
    </>
  );
}

// import React from 'react'
import Slider from "../Other/slider/Slider";
import SliderApi from "../Other/slider/SliderApi";

import resmileshme from "./photos/resmileshme.png";
import zemanetSechimi from "./photos/resmileshmeSechimi.png";
import chatdirilma from "./photos/chatdirilma.png";
import zemanet from "./photos/zemanet.png";
// import { BiFile } from "react-icons/bi";
import Carousel from "../Other/slider/Carousel";
import Videos from "../Other/slider/Videos";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import FirstSection from "../Main/FirstSection";

const Home = () => {
  return (
    <>
      <Header/>
      <FirstSection/>
      <Slider />
      <div className="offerItem flex gap-4 m-auto w-[93%]">
        <div className="resmileshme flex bg-white border-8 border-white rounded-md m-auto">
          <img
            src={resmileshme}
            alt="resmileshme"
            className="w-[50px]  h-[48px] m-auto"
          />
          <div className="txt font-[Montserrat,sans-serif] tracking-tight	p-2">
            <p className="font-semibold">Qapıda rəsmiləşdirmə</p>
            <span className="text-[12px]">
              Nağd, hissə-hissə və ya kartla ödəmə imkanı
            </span>
          </div>
        </div>
        <div className="zemanet-sechimi flex bg-white border-8 border-white rounded-md m-auto">
          <img
            src={zemanetSechimi}
            alt="zemanet-sechimi"
            className="w-[44px] h-[57px] m-auto"
          />
          <div className="txt font-[Montserrat,sans-serif] tracking-tight	p-2">
            <p className="font-semibold	">Zəmanət seçimi</p>
            <span className="text-[12px]">
              İstehsalçı zəmanəti, qızıl zəmanət, zəmanət plus
            </span>
          </div>
        </div>
        <div className="chatdirilma flex bg-white border-8 border-white rounded-md m-auto">
          <img
            src={chatdirilma}
            alt="chatdirilma"
            className="w-[50px] h-[57px] m-auto"
          />
          <div className="txt font-[Montserrat,sans-serif] tracking-tight	p-2">
            <p className="font-semibold	">Pulsuz çatdırılma</p>
            <span className="text-[12px]">
              49.99AZN-dən yuxarı sifarişlərə pulsuz çatdırılma
            </span>
          </div>
        </div>
        <div className="zemanet flex bg-white border-8 border-white rounded-md m-auto">
          <img
            src={zemanet}
            alt="zemanet"
            className="w-[35px] h-[57px] m-auto"
          />
          <div className="txt font-[Montserrat,sans-serif] tracking-tight	p-2">
            <p className="font-semibold	">Ən yaxşı qiymətə zəmanət!</p>
            <span className="text-[12px]">
              Daha ucuz tap, qiymət fərqinin 120%-ni geri al
            </span>
          </div>
        </div>
      </div>
      <div className="selling w-[95%] m-auto">
        <h3 className="text-[20px] text-[Montserrat,sans-serif] font-semibold p-4">Satış liderləri</h3>
        <button className="!bg-[#323232] text-white">Smartfonlar</button>
        <button>Televizorlar</button>
        <button>Notbuklar</button>
        <button>Qulaqlıqlar</button>
        <button>Smart saatlar</button>
        <button>Böyük məişət texnikası</button>
        <button>Mətbəx üçün kiçik məişət texnikası</button>
        <button>Quraşdırılan texnika</button>
        <button>Ev üçün kiçik texnika</button>
        <button>İqlim texnikası</button>
        <button>Aksessuarlar</button>
        <button>Gözəllik və sağlamlıq</button>
        <button>Mebel</button>
        <button>Tekstil</button>
        <button>Qab-qacaq</button>
      </div>
      <SliderApi url="https://6712c15c6c5f5ced6624928d.mockapi.io/products" />
      {/* <Slider /> */}
      <p className="w-[95%] m-auto text-[20px] text-[Montserrat,sans-serif] font-semibold p-4">Super təkliflər</p>
      <Carousel url="https://6712c15c6c5f5ced6624928d.mockapi.io/products"/> 
      <p className="w-[95%] m-auto text-[20px] text-[Montserrat,sans-serif] font-semibold p-4">Mövsüm təklifləri</p>

      <SliderApi url="https://6712c15c6c5f5ced6624928d.mockapi.io/products" />
      <Videos/>
      <Footer/>
    </>
  );
};

export default Home;

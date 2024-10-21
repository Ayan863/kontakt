// import React from 'react'
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { BsSmartwatch } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { CgGames } from "react-icons/cg";
import { HiOutlineTv } from "react-icons/hi2";
import { PiWashingMachineThin } from "react-icons/pi";
import { GiVacuumCleaner } from "react-icons/gi";   
import { FaWineGlassEmpty } from "react-icons/fa6";
import { PiHairDryer } from "react-icons/pi";
import { MdOutlineSportsRugby } from "react-icons/md";
import { VscTools } from "react-icons/vsc";
import { FaCarRear } from "react-icons/fa6";
import { LuSofa } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { GiDelicatePerfume } from "react-icons/gi";
import { PiBabyCarriage } from "react-icons/pi";
import { GiClothes } from "react-icons/gi";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsGiftFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import  "./firstSection.css"
import { useNavigate } from "react-router-dom";




const FirstSection = () => {
  const navigate=useNavigate()
  return (
    <section className='firstSection flex justify-between px-8 py-5'>
      <div className="sideBar w-[20%] h-[595px] overflow-y-scroll bg-white rounded-xl">
        <ul className='sideLinks px-4 py-2 '>
            <li> <a href="#"> <i>1+1</i>Birlikdə al</a><i className='opacity-50'><IoIosArrowForward/></i></li>
            <li> <a href="#" onClick={()=>navigate("/smartfon")}> <i><MdOutlinePhoneAndroid/></i>Smartfonlar və aksesuarlar</a><i className='opacity-50'><IoIosArrowForward/></i></li>
            <li> <a href="#" onClick={()=>navigate("/smartQadjetler")}> <i><BsSmartwatch/></i>Smart qadjetlər</a><i className='opacity-50'><IoIosArrowForward/></i></li>
            <li> <a href="#"> <i><MdComputer/></i>Notbuklar, PK, planşetlər</a><i className='opacity-50'><IoIosArrowForward/></i></li>
            <li> <a href="#"> <i><CgGames/></i>Geymerlər üçün məhsullar</a><i className='opacity-50'><IoIosArrowForward/></i></li>
            <li> <a href="#"> <i><HiOutlineTv/></i>TV, audio və foto</a><i className='opacity-50'><IoIosArrowForward/></i></li>
            <li> <a href="#"> <i><PiWashingMachineThin/></i>Mətbəx texnikası</a><i className='opacity-50'><IoIosArrowForward/></i></li>
            <li> <a href="#"> <i><GiVacuumCleaner/></i>Ev texnikası</a><i className='opacity-50'><IoIosArrowForward/></i></li>
            <li> <a href="#"> <i><FaWineGlassEmpty/></i>Qab-qacaq</a><i className='opacity-50'><IoIosArrowForward/></i></li>
            <li> <a href="#"> <i><PiHairDryer/></i>Gözəllik və sağlamlıq texnikası</a><i className='opacity-50'><IoIosArrowForward/></i></li>
            <li> <a href="#"> <i><MdOutlineSportsRugby/></i>Hobbi və əyləncə</a><i className='opacity-50'><IoIosArrowForward/></i></li>
            <li> <a href="#"> <i><VscTools/></i>Təmir tikinti</a><i className='opacity-50'><IoIosArrowForward/></i></li>
            <li> <a href="#"> <i><FaCarRear/></i>Avtomobil məhsulları</a><i className='opacity-50'><IoIosArrowForward/></i></li>
            <li> <a href="#"> <i><LuSofa/></i>Mebel və tekstil</a><i className='opacity-50'><IoIosArrowForward/></i></li>
            <li> <a href="#"> <i><IoHomeOutline/></i>Ev və bağ</a><i className='opacity-50'><IoIosArrowForward/></i></li>
            <li> <a href="#"> <i><GiDelicatePerfume/></i>Kosmetika və Baxım</a><i className='opacity-50'><IoIosArrowForward/></i></li>
            <li> <a href="#"> <i><PiBabyCarriage/></i>Uşaq aləmi</a><i className='opacity-50'><IoIosArrowForward/></i></li>
            <li> <a href="#"> <i><GiClothes/></i>Geyim,Ayaqqabı və Aksesuar</a><i className='opacity-50'><IoIosArrowForward/></i></li>
            <li> <a href="#"> <i><HiOutlineLightBulb/> </i>Kontakt plus xidmətləri</a><i className='opacity-50'><IoIosArrowForward/></i></li>
            <li> <a href="#"> <i><BsGiftFill/></i>Hədiyyə və sertifikatlar</a><i className='opacity-50'><IoIosArrowForward/></i></li>
        </ul>
      </div>
      <div className="slider w-[50%]  bg-slate-600 rounded-xl">
        <div className="slide">
          <img src="https://kontakt.az/media/dinarys/banner/images/AZE_1X1_1-aa52ce12.webp" alt="" />
        </div>
      </div>
      <div className="dayOffer w-[20%] bg-white rounded-xl"></div>
    </section>
  )
}

export default FirstSection

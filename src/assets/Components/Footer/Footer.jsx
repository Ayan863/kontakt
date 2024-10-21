import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { RiMastercardFill } from "react-icons/ri";
import "../Footer/footer.css"

const Footer = () => {
  return (
   <footer className='w-full px-6 py-5 bg-white flex flex-col'>
      <div className="footerTop flex flex-col md:flex-row justify-between gap-8">
        <div className="footerLinks w-full md:w-4/5 flex flex-col md:flex-row justify-between gap-8 font-montserrat">
          
          <div className="Elaqe">
            <h4 className='font-bold mb-3 text-center md:text-start'>Əlaqə</h4>
            <ul className='footerItem flex flex-col md:flex-col md:items-start gap-3 md:justify-start items-center'>
              <li><a href="#">*6060</a></li>
              <li><a href="#">Biz xəritədə</a></li>
              <li>
                <a href="#" className='flex text-5xl'>
                  <RiVisaLine />
                  <RiMastercardFill />
                </a>
              </li>
            </ul>
          </div>

          
          <div className="Kontakt">
            <h4 className='font-bold mb-3 text-center md:text-start'>Kontakt</h4>
            <ul className='footerItem flex flex-col md:flex-col md:items-start gap-3 md:justify-start items-center'>
              <li><a href="#">Şirkət haqqında</a></li>
              <li><a href="#">Karyera</a></li>
              <li><a href="#">"Qarabağ" proqramı</a></li>
              <li><a href="#">Kontakt TV</a></li>
            </ul>
          </div>

         
          <div className="Description">
            <h4 className='font-bold mb-3 text-center md:text-start'>Məlumat</h4>
            <ul className='footerItem flex flex-col md:flex-col md:items-start gap-4 md:justify-start items-center'>
              <li><a href="#">Konfidensiallıq siyasəti</a></li>
              <li><a href="#">Qiymət siyasəti</a></li>
              <li><a href="#">Şikayətlərin idarəolunması siyasəti</a></li>
              <li><a href="#">Saytın istifadə şərtləri</a></li>
              <li><a href="#">Ən yaxşı qiymətə zəmanət!</a></li>
              <li><a href="#">Korporativ satışlar</a></li>
            </ul>
          </div>

        
          <div className="Customer">
            <h4 className='font-bold mb-3 text-center md:text-start'>Müştərilər üçün</h4>
            <ul className='footerItem flex flex-col md:flex-col md:items-start gap-3 md:justify-start items-center'>
              <li><a href="#">Çatdırılma və ödəmə</a></li>
              <li><a href="#">Hissə-hissə ödəniş şərtləri</a></li>
              <li><a href="#">Geri qaytarma siyasəti</a></li>
              <li><a href="#">Zəmanətlər</a></li>
              <li><a href="#">Naxçıvana çatdırılma</a></li>
              <li><a href="#">Aylıq ödənişlərin həyata keçirilməsi</a></li>
            </ul>
          </div>
        </div>

       
        <div className="footerSocials flex flex-col gap-4 mt-6 md:mt-0">
          <h4 className='font-bold mb-3 text-center md:text-start'>Bizimlə qalın</h4>
          <ul className='flex gap-4 justify-center md:justify-start'>
            <li><a href="#"><FaFacebook /></a></li>
            <li><a href="#"><FaInstagramSquare /></a></li>
            <li><a href="#"><FaYoutube /></a></li>
            <li><a href="#"><FaTelegram /></a></li>
            <li><a href="#"><FaWhatsappSquare /></a></li>
            <li><a href="#"><FaTiktok /></a></li>
          </ul>
        </div>
      </div>

      <div className="footerSubscribe flex justify-center pt-4 mt-6 border-t border-gray-200">
        <h4>© Kontakt Home 2024</h4>
      </div>
    </footer>
);
};
 
export default Footer

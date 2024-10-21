import React from 'react'
import "./Kampaniya.css"
import { FaTruckFast } from "react-icons/fa6";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoFilterOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import Header from '../../Header/Header';
// import Footer from '../../Footer/Footer';

const Kampaniya = () => {
    return (

        <>
        <Header/>

        <section className='kampaniya'>
            <div className="cont-top">
                <div className="cont-top-sub">
                    <span className='cont-top-text'>istədiyini seç</span>
                </div>
            </div>

            <div className="kompaniya-container">

                <div className="kompaniya-left">
                    <div className="filter">

                        <div className="filter-top">
                            <div className="filter-top-sub">
                                <span className='top-span'>Filtr</span>
                                <IoFilterOutline className='filter-icon' />
                            </div>
                        </div>

                        <div className="filter-content">

                            <ul className='filter-ul'>
                                <li className='filter-li'>
                                    <a className='filter-a' href="">Smartfonlar</a>
                                </li>
                            </ul>

                            <ul className='filter-ul'>
                                <li className='filter-li'>
                                    <a className='filter-a' href="">Telefon aksessuarları</a>
                                </li>
                            </ul>

                            <ul className='filter-ul'>
                                <li className='filter-li'>
                                    <a className='filter-a' href="">Qulaqlıqlar</a>
                                </li>
                            </ul>

                            <ul className='filter-ul'>
                                <li style={{ display: "flex", justifyContent: "space-between" }} className='filter-li'> 
                                    <a className='filter-a' href="">Notbuklar</a>
                                    <FaPlus />

                                    {/* <button type="button" class="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500" aria-controls="filter-section-mobile-0" aria-expanded="false">
                                        <span class="font-medium text-gray-900">Notbuklar</span>
                                        <span class="ml-6 flex items-center">

                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                                            </svg>

                                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                <path fill-rule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </button>

                                    <div class="pt-6" id="filter-section-mobile-0">
                                        <div class="space-y-6">
                                            <div class="flex items-center">
                                                <input id="filter-mobile-color-0" name="color[]" value="white" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-mobile-color-0" class="ml-3 min-w-0 flex-1 text-gray-500">White</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="filter-mobile-color-1" name="color[]" value="beige" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-mobile-color-1" class="ml-3 min-w-0 flex-1 text-gray-500">Beige</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="filter-mobile-color-2" name="color[]" value="blue" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-mobile-color-2" class="ml-3 min-w-0 flex-1 text-gray-500">Blue</label>
                                            </div>
                                        </div>
                                    </div> */}


                                </li>
                            </ul>

                            <ul className='filter-ul'>
                                <li className='filter-li'>
                                    <a className='filter-a' href="">Kompüter aksessuarları</a>
                                </li>
                            </ul>

                            <ul className='filter-ul'>
                                <li className='filter-li'>
                                    <a className='filter-a' href="">Smart saatlar</a>
                                </li>
                            </ul>

                            <ul className='filter-ul'>
                                <li className='filter-li'>
                                    <a className='filter-a' href="">Televizorlar</a>
                                </li>
                            </ul>

                            <ul className='filter-ul'>
                                <li className='filter-li'>
                                    <a className='filter-a' href="">Nəqliyyat</a>
                                </li>
                            </ul>

                            <ul className='filter-ul'>
                                <li className='filter-li'>
                                    <a className='filter-a' href="">Ev üçün böyük texnika</a>
                                </li>
                            </ul>

                            <ul className='filter-ul'>
                                <li className='filter-li'>
                                    <a className='filter-a' href="">Quraşdırılan texnika</a>
                                </li>
                            </ul>

                            <ul className='filter-ul'>
                                <li className='filter-li'>
                                    <a className='filter-a' href="">İqlim texnikası</a>
                                </li>
                            </ul>

                            <ul className='filter-ul'>
                                <li className='filter-li'>
                                    <a className='filter-a' href="">Mətbəx üçün xırda texnika</a>
                                </li>
                            </ul>


                            <ul className='filter-ul'>
                                <li className='filter-li'>
                                    <a className='filter-a' href="">Ev üçün xırda texnika</a>
                                </li>
                            </ul>


                            <ul className='filter-ul'>
                                <li className='filter-li'>
                                    <a className='filter-a' href="">Audio video texnika</a>
                                </li>
                            </ul>

                            <ul className='filter-ul'>
                                <li className='filter-li'>
                                    <a className='filter-a' href="">Gözəllik, sağlamlıq, baxım</a>
                                </li>
                            </ul>


                            <ul className='filter-ul'>
                                <li className='filter-li'>
                                    <a className='filter-a' href="">Mebel</a>
                                </li>
                            </ul>


                        </div>
                    </div>

                </div>

                <div className="kompaniya-right">

                    <div className="kontakt-img1">
                        <img className='kontakt-pic1' src="https://kontakt.az/media/wysiwyg/24ay_az_13_.jpg" alt="" />
                    </div>

                    <div className="kontakt-endirim">
                        <div className="kontakt-endirim-sub">
                            <div className="endirim-textarea">
                                <p className='endirim-p1'> İstədiyini buradan seç.</p>
                                <p className='endirim-p2'>Çünki 14-31 oktyabr tarixlərində nağd alışda -50%-dək endirimin var. Üstəlik, bu endirimli qiyməti 24 ayadək bölüb faizsiz ödəyə bilərsən.</p>

                            </div>

                        </div>

                    </div>

                    <div className="kompaniya-content">
                        <h2 className='kompaniya-content-h2'>Smartfonlar</h2>
                        <div className="card-smartfonlar">

                            <div className="card1-smartfon">
                                <div className="card1-smartfon-sub">
                                    <div className="card1-smartup">
                                        <div className="card1-time">
                                            <FaTruckFast className='truck-icon' />
                                            <span className='time-span'> 2 saat / 0.0₼</span>
                                        </div>

                                        <div className="card1-compare">
                                            <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                        </div>

                                    </div>

                                    <div className="card1-smartfon-mid">
                                        <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-sbp-1105-sm-2968_2-33c6dab3.webp" alt="" />
                                    </div>

                                    <p className='smartfon-title'>Xiaomi Mix Flip 12/512 GB Black</p>
                                    <div className="discount-smartfon">
                                        <span className='smartfon-discount-sub'>-170₼</span>
                                    </div>

                                    <div className="active-price">
                                        <div className="price-side">
                                            <strong>
                                                <i className='price-i'>2.399,99 ₼</i>
                                                <b className='price-b'>2.229,99 ₼</b>
                                            </strong>
                                        </div>

                                        <span className='duration'>0% 18 ay</span>

                                    </div>

                                    <div className="card1-actions">
                                        <div className="heart-icon">
                                            <IoIosHeartEmpty className='heart-iconsub' />
                                        </div>

                                        <button className='action-btn'>
                                            <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                            <span className='btn-text'>Səbətə at</span>
                                        </button>

                                    </div>

                                </div>
                            </div>

                            <div className="card1-smartfon">
                                <div className="card1-smartfon-sub">
                                    <div className="card1-smartup">
                                        <div className="card1-time">
                                            <FaTruckFast className='truck-icon' />
                                            <span className='time-span'> 2 saat / 0.0₼</span>
                                        </div>

                                        <div className="card1-compare">
                                            <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                        </div>

                                    </div>

                                    <div className="card1-smartfon-mid">
                                        <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-sbp-1105-sm-2568_1-d0e2ce23.webp" alt="" />
                                    </div>

                                    <p className='smartfon-title'>OPPO A38 4/128 GB Gold</p>
                                    <div className="discount-smartfon">
                                        <span className='smartfon-discount-sub'>-130₼</span>
                                    </div>

                                    <div className="active-price">
                                        <div className="price-side">
                                            <strong>
                                                <i className='price-i'>359,99 ₼</i>
                                                <b className='price-b'>229,99 ₼</b>
                                            </strong>
                                        </div>

                                        <span className='duration'>0% 18 ay</span>

                                    </div>

                                    <div className="card1-actions">
                                        <div className="heart-icon">
                                            <IoIosHeartEmpty className='heart-iconsub' />
                                        </div>

                                        <button className='action-btn'>
                                            <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                            <span className='btn-text'>Səbətə at</span>
                                        </button>

                                    </div>

                                </div>
                            </div>

                            <div className="card1-smartfon">
                                <div className="card1-smartfon-sub">
                                    <div className="card1-smartup">
                                        <div className="card1-time">
                                            <FaTruckFast className='truck-icon' />
                                            <span className='time-span'> 2 saat / 0.0₼</span>
                                        </div>

                                        <div className="card1-compare">
                                            <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                        </div>

                                    </div>

                                    <div className="card1-smartfon-mid">
                                        <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/1/_/1_44__1_1-8ba9aec3.webp" alt="" />
                                    </div>

                                    <p className='smartfon-title'>OPPO A78 8/256 GB Green</p>
                                    <div className="discount-smartfon">
                                        <span className='smartfon-discount-sub'>-130₼</span>
                                    </div>

                                    <div className="active-price">
                                        <div className="price-side">
                                            <strong>
                                                <i className='price-i'>629,99 ₼</i>
                                                <b className='price-b'>499,99 ₼</b>
                                            </strong>
                                        </div>

                                        <span className='duration'>0% 18 ay</span>

                                    </div>

                                    <div className="card1-actions">
                                        <div className="heart-icon">
                                            <IoIosHeartEmpty className='heart-iconsub' />
                                        </div>

                                        <button className='action-btn'>
                                            <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                            <span className='btn-text'>Səbətə at</span>
                                        </button>

                                    </div>

                                </div>
                            </div>

                            <div className="card1-smartfon">
                                <div className="card1-smartfon-sub">
                                    <div className="card1-smartup">
                                        <div className="card1-time">
                                            <FaTruckFast className='truck-icon' />
                                            <span className='time-span'> 2 saat / 0.0₼</span>
                                        </div>

                                        <div className="card1-compare">
                                            <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                        </div>

                                    </div>

                                    <div className="card1-smartfon-mid">
                                        <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-sbp-1105-sm-2266_111-ff63c774.webp" alt="" />
                                    </div>

                                    <p className='smartfon-title'>Samsung Galaxy A24 (SM-A245) 6/128 GB Dark Red </p>
                                    <div className="discount-smartfon">
                                        <span className='smartfon-discount-sub'>-80₼</span>
                                    </div>

                                    <div className="active-price">
                                        <div className="price-side">
                                            <strong>
                                                <i className='price-i'>499,99 ₼</i>
                                                <b className='price-b'>419,99 ₼</b>
                                            </strong>
                                        </div>

                                        <span className='duration'>0% 18 ay</span>

                                    </div>

                                    <div className="card1-actions">
                                        <div className="heart-icon">
                                            <IoIosHeartEmpty className='heart-iconsub' />
                                        </div>

                                        <button className='action-btn'>
                                            <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                            <span className='btn-text'>Səbətə at</span>
                                        </button>

                                    </div>

                                </div>
                            </div>

                            <div className="card1-smartfon" style={{ marginTop: "10px" }}>
                                <div className="card1-smartfon-sub">
                                    <div className="card1-smartup">
                                        <div className="card1-time">
                                            <FaTruckFast className='truck-icon' />
                                            <span className='time-span'> 2 saat / 0.0₼</span>
                                        </div>

                                        <div className="card1-compare">
                                            <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                        </div>

                                    </div>

                                    <div className="card1-smartfon-mid">
                                        <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-sbp-1105-sm-2264_111-842a0794.webp" alt="" />
                                    </div>

                                    <p className='smartfon-title'>Samsung Galaxy A24 (SM-A245) 6/128 GB Black</p>
                                    <div className="discount-smartfon">
                                        <span className='smartfon-discount-sub'>-80₼</span>
                                    </div>

                                    <div className="active-price">
                                        <div className="price-side">
                                            <strong>
                                                <i className='price-i'>499,99 ₼</i>
                                                <b className='price-b'>419,99 ₼</b>
                                            </strong>
                                        </div>

                                        <span className='duration'>0% 18 ay</span>

                                    </div>

                                    <div className="card1-actions">
                                        <div className="heart-icon">
                                            <IoIosHeartEmpty className='heart-iconsub' />
                                        </div>

                                        <button className='action-btn'>
                                            <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                            <span className='btn-text'>Səbətə at</span>
                                        </button>

                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="more-offer">
                        <span className='sub-offer'>Daha çox təklif gör</span>
                    </div>

                    <div className="qulaqliqlar">
                        <h2 className='title-qulaqliq'>Qulaqlıqlar</h2>
                    </div>

                    <div className="card-smartfonlar">

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">
                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-acs-1109-tw-0664_1-43e51b52.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Qulaqlıq Xiaomi Open Wear Stereo Cosmic Gray BHR8474GL</p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-50₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>299,99 ₼</i>
                                            <b className='price-b'>249,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">
                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-acs-1109-tw-0561_1-bcd31036.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Qulaqlıq HUAWEI FreeClip Black 55037247</p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-50₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>399,99 ₼</i>
                                            <b className='price-b'>349,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">


                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-acs-1109-tw-0437-f714bc7e.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Qulaqlıq SBS Beat Free White / TEEARTWSBEATFREEBTW</p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-10₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>39,99 ₼</i>
                                            <b className='price-b'>29,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">
                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-acs-1109-tw-04065-160c09e0.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Qulaqlıq Energy Sistem Style 2 Graphite 451739 </p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-40₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>89,99 ₼</i>
                                            <b className='price-b'>49,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="more-offer">
                        <span className='sub-offer'>Daha çox təklif gör</span>
                    </div>

                    <div className="qulaqliqlar">
                        <h2 className='title-qulaqliq'>Smart saatlar</h2>
                    </div>

                    <div className="card-smartfonlar">

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">
                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-smw-1106-sw-0423_1-82b9a7da.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Blackview R30 Pro Fitness Smartwatch Black 7418</p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-40₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>99,99 ₼</i>
                                            <b className='price-b'>59,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">
                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-smw-1106-sw-0411_1-fe0ceba8.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Xiaomi Watch S3 Black BHR7874GL</p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-70₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>369,99 ₼</i>
                                            <b className='price-b'>299,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">


                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-smw-1106-sw-0377-1-d4908b3d.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Kieslect KR Pro LTD Silver / Gray-Black STRAP</p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-90₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>199,99 ₼</i>
                                            <b className='price-b'>109,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">
                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-smw-1106-sw-0374_11-0606ffcc.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Kieslect Ks2 Space Gray / Black Blue Strap </p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-100₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>249,99 ₼</i>
                                            <b className='price-b'>149,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="more-offer">
                        <span className='sub-offer'>Daha çox təklif gör</span>
                    </div>

                    <div className="qulaqliqlar">
                        <h2 className='title-qulaqliq'>Notbuklar</h2>
                    </div>

                    <div className="card-smartfonlar">

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">
                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-kot-1114-nb-2609_1-25b22268.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Notbuk HP Pavilion 15-EG3066CI (A5NZ7EA)</p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-300₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>1199,99 ₼</i>
                                            <b className='price-b'>899,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">
                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-kot-1114-nb-2535_1-73f2a5dc.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Notbuk Acer Nitro 5 ANV15-51 (NH.QNDER.002)</p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-250₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>1949,99 ₼</i>
                                            <b className='price-b'>1699,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">


                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-kot-1114-nb-2447_1-f683af36.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Notbuk HUAWEI MateBook D16 (53013WXD) Space Gray</p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-150₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>1249,99 ₼</i>
                                            <b className='price-b'>1099,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">
                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-kot-1114-nb-2362-9a277779.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Notbuk Lenovo IdeaPad Slim 3 15IAH8 83ER007QRK </p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-200₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>1449,99 ₼</i>
                                            <b className='price-b'>1149,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                        <div style={{ marginTop: "10px" }} className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">
                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/n/e/new-project-2021-09-15t172813.821-min-removebg-preview-164f3ade.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Notbuk Apple MacBook Air 13" MGN63RU/A Space Gray </p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-200₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>1999,99 ₼</i>
                                            <b className='price-b'>1799,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="more-offer">
                        <span className='sub-offer'>Daha çox təklif gör</span>
                    </div>

                    <div className="qulaqliqlar">
                        <h2 className='title-qulaqliq'>Televizorlar</h2>
                    </div>

                    <div className="card-smartfonlar">

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">
                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-tva-1118-tv-1228_1-cb062b67.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Televizor Hisense 32A4N</p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-120₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>449,99 ₼</i>
                                            <b className='price-b'>329,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">
                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-tva-1118-tv-1138_1-1c394a2e.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Televizor LG 55NANO80T6A.AMCN</p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-340₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>2239,99 ₼</i>
                                            <b className='price-b'>1899,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">


                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-tva-1118-tv-1127_1-f09bb7ee.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Televizor Samsung UE75DU8500UXRU</p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-800₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>4599,99 ₼</i>
                                            <b className='price-b'>3799,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">
                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-tva-1118-tv-09303-8e7fb0f3.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Televizor Sony KD-65X85L </p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-1800₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>4499,99 ₼</i>
                                            <b className='price-b'>2699,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="more-offer">
                        <span className='sub-offer'>Daha çox təklif gör</span>
                    </div>

                    <div className="qulaqliqlar">
                        <h2 className='title-qulaqliq'>Nəqliyyat</h2>
                    </div>

                    <div className="card-smartfonlar">

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">
                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-gaf-1106-es-0085_3-4828e20c.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Elektrosamokat Ninebot eKickScooter Zing C15E</p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-150₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>599,99 ₼</i>
                                            <b className='price-b'>449,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">
                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/_/e/_ertgfdc-0c8c9d42.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Hoverboard ZigZag K8 Hip Hop</p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-80₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>319,99 ₼</i>
                                            <b className='price-b'>239,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">


                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/s/t/stark-20-pusher-1-s-h000014185_1_-b06edbb7.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Velosiped Stark 20 Pusher 1S-Grey-Silver</p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-400₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>1499,99 ₼</i>
                                            <b className='price-b'>1099,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">
                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/p/r/pro_2_1-780185c1.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Elektrosamokat Mi Pro 2</p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-2500₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>1499,99 ₼</i>
                                            <b className='price-b'>1249,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="more-offer">
                        <span className='sub-offer'>Daha çox təklif gör</span>
                    </div>

                    <div className="qulaqliqlar">
                        <h2 className='title-qulaqliq'>Kompüter aksessuarları</h2>
                    </div>

                    <div className="card-smartfonlar">

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">
                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-acs-1109-lb-0541_6-353e5df0.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Bel çantası Viper LED Black PB03</p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-40₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>149,99 ₼</i>
                                            <b className='price-b'>109,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">
                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-acs-1109-lb-0516_1_1-f5cac9e0.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Backpack Viper Classic Slim 3IN1 14-15/ BPP882-GR/BLK</p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-20₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>39,99 ₼</i>
                                            <b className='price-b'>19,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">
                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/t/m/tm-dg-acs-1109-kb-0267-1-e17e6766.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Gaming Keyboard Canyon Deimos GK-4 US / CND-SKB4</p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-40₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>99,99 ₼</i>
                                            <b className='price-b'>59,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>

                        <div className="card1-smartfon">
                            <div className="card1-smartfon-sub">
                                <div style={{ display: "flex", justifyContent: "end" }} className="card1-smartup">


                                    <div className="card1-compare">
                                        <img className='compare' src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/compare.svg" alt="" />
                                    </div>

                                </div>

                                <div className="card1-smartfon-mid">
                                    <img className='mid-img' src="https://kontakt.az/media/catalog/product/cache/ec3348cd707f11bd7a951e83328510dc/k/-/k-h_-_2022-12-23t115048.210-5da3abd3.webp" alt="" />
                                </div>

                                <p className='smartfon-title'>Mouse Logitech Pop Blast-Yellow </p>
                                <div className="discount-smartfon">
                                    <span className='smartfon-discount-sub'>-60₼</span>
                                </div>

                                <div className="active-price">
                                    <div className="price-side">
                                        <strong>
                                            <i className='price-i'>99,99 ₼</i>
                                            <b className='price-b'>39,99 ₼</b>
                                        </strong>
                                    </div>

                                    <span className='duration'>0% 18 ay</span>

                                </div>

                                <div className="card1-actions">
                                    <div className="heart-icon">
                                        <IoIosHeartEmpty className='heart-iconsub' />
                                    </div>

                                    <button className='action-btn'>
                                        <i><img src="https://kontakt.az/static/version1729078510/frontend/Swissup/breeze-customized/az_Latn_AZ/images/icon/addto.svg" alt="" /></i>
                                        <span className='btn-text'>Səbətə at</span>
                                    </button>

                                </div>

                            </div>
                        </div>



                    </div>

                    <div className="more-offer">
                        <span className='sub-offer'>Daha çox təklif gör</span>
                    </div>

                </div>

            </div>

            {/* <Footer/> */}




        </section>

      

        </>

       

       
    )
}

export default Kampaniya

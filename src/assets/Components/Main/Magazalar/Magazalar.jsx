import React from "react";
import "./Magazalar.css";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

const Magazalar = () => {
  return (
    <>
    <Header/>
      <section className="magazalar">
        <div className="magazalar-top">
          <h1 className="magazalar-h1">Mağazalarımız</h1>
        </div>

        <div className="map-magaza">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1370972.154798971!2d47.51275921263635!3d40.48259829293837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030873df9684fcd%3A0x44c7e8d98597a6f!2sKontakt%20%22Azadl%C4%B1q%20metrosu%22!5e0!3m2!1sen!2saz!4v1729423131014!5m2!1sen!2saz"
            width="1080"
            height="600"
            className="map-iframe"
            title="Responsive google Map"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Magazalar;

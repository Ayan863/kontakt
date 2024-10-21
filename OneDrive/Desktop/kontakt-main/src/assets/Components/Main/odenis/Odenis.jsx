import React, { useState } from 'react';
import './odenis.css';

const Odenis = () => {
  const [showImages, setShowImages] = useState(false);

  const handleClick = () => {
    setShowImages(true);
  };

  const handleClose = () => {
    setShowImages(false);
  };

  return (
    <div className="app">
      <button onClick={handleClick}>Aylıq ödəniş</button>
      {showImages && (
        <div className="overlay">
          <div className="overlay-content">
            <button className="close-btn" onClick={handleClose}>X</button>
            <div className="images  flex-wrap items-center flex justify-center ">
<a href="https://www.million.az/attributes/KontaktHome">              <img className='' src="https://kontakt.az/media/wysiwyg/Payment_partners_logos/MilliOn_logo.png" alt="Image 1" />
</a>
<a href="https://portmanat.az/project/kontaktHome">              <img className='' src="https://kontakt.az/media/wysiwyg/Payment_partners_logos/Portmanataz_logo.png" alt="Image 2" />
</a>
<a href="https://www.e-pul.az/epay/az/category/online_store/kontakthome_r">              <img className='' src="https://kontakt.az/media/wysiwyg/Payment_partners_logos/epul_logo.png" alt="Image 3" />
</a>
<a href="https://hesab.az/unregistered/#/direct-pay/store/kontakthome/parameters?portalPay=kontakt&amp;lang=az">
<img className='' src="	https://kontakt.az/media/wysiwyg/Payment_partners_logos/hesab_az_logo_new_-1.png" alt="Image 4" />

</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Odenis;

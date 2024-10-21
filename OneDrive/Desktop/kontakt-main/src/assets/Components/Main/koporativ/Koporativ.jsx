import { useEffect, useState } from "react";
import "./koporativ.css";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

// const slides = [
//     { id: 1, src: myimg, alt: 'Şəkil 1' },
//     { id: 2, src: myyimg, alt: 'Şəkil 2' },
// ];
const slides = [
  {
    id: 1,
    src: "https://kontakt.az/media/wysiwyg/Artboard_1_copy_44_1x_1-2_1.png",
    alt: "Şəkil 1",
  },
  {
    id: 2,
    src: "https://kontakt.az/media/wysiwyg/korporativ_musterilere_sevindiren_kart_1.jpg",
    alt: "Şəkil 2",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 saniyə sonra keçid

    return () => clearInterval(interval); // Təmizləmə
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (event.key === "ArrowLeft") {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
        <>
        <Header/>
    <main>
      <section className="flex flex-col gap-4 justify-center items-center  ">
        <div className="secTop bg-white w-11/12 h-20 flex  items-center">
          <h3 className="p-3">Korporativ satışlar</h3>
        </div>

        <div className="secBottom rounded-md bg-white w-11/12 flex flex-col gap-20 h-4/6 ">
          <div className="slider   flex flex-col items-center py-7  ">
            <div
              className="slides"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div className="slide" key={slide.id}>
                  <img src={slide.src} alt={slide.alt} />
                </div>
              ))}
            </div>
          </div>

          <div className="texts flex flex-col gap-8 ">
            <p className="text1 ">
              Kontakt – müxtəlif növ yüksək keyfiyyətli rəqəmsal və məişət
              texnikasının, həmçinin mebellərin pərakəndə satışını həyata
              keçirməklə yanaşı korporativ müştərilərlə əməkdaşlığa xüsusi
              diqqət yetirir. <br />
              Hal-hazırda 2000-dən çox korporativ müştəri sayı ilə nəinki
              Azərbaycan bazarında, hətta Qafqazda da qısa müddət ərzində lider
              mövqelərdən birini tutmağı bacarıb.
            </p>
            <div>
              <p>
                Korporativ sahədə fərdi yanaşma prinsipi ilə hərəkət edən
                Kontakt-ın partnyor şirkətlər üçün eksklüziv şərtlərlə
                əməkdaşlıq təklifləri aşağıdakı kimidir:
              </p>
              <ul className="teklif">
                <li>
                  Əməkdaşlıq etdiyimiz şirkətlər üçün xüsusi endirimli
                  qiymətlər;
                </li>
                <li>Korporativ müştərilərə kreditlə satış xidməti;</li>
                <li>
                  Əməkdaşlıq müddətində ödənişlərini köçürmə yolu ilə edə bilmək
                  imkanı;
                </li>
                <li>
                  Telefon, notbuk, kondisioner, mikrodalğalı soba və bu kimi
                  digər elektrotexnika vasitələrinin təmini;
                </li>
                <li>
                  Dispenser, printer və bu kimi ofis avadanlıqlarını əldə etmək
                  imkanı;
                </li>
                <li>
                  Saytımızda əks olunan məhsullarla yanaşı, orada mövcud olmayan
                  məhsulları belə öncədən sifarişlə əldə edə bilmə imkanı.
                </li>
              </ul>
            </div>
            <p>
              Bizimlə əməkdaşlıq etmək üçün aşağıdakı əlaqə vasitələrindən sizə
              uyğun olanını seçə bilərsiniz:
            </p>

            <div>
              <ul className="elaqe ">
                <li> Aşağıdaki nömrələr ilə əlaqə saxlamaqla:</li>
              </ul>
              <ul className="numbers">
                <li>+994512505089</li>
                <li>+994512053262</li>
                <li>+994512505095</li>
              </ul>
              <ul className="post">
                <li>
                  Poçt ünvanımıza yazmaqla:{" "}
                  <a
                    className="text-sky-600"
                    href="mailto:corporate-sales@abc-telecom.az"
                  >
                    corporate-sales@abc-telecom.az
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-6 ">
            <div>
              <img src="https://kontakt.az/media/wysiwyg/Basqal_1.png" alt="" />
            </div>
            <div>
              <img src="https://kontakt.az/media/wysiwyg/Marxal_1.png" alt="" />
            </div>
            <div>
              <img
                src="https://kontakt.az/media/wysiwyg/Shabran_1.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://kontakt.az/media/wysiwyg/Aztelekom_1.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://kontakt.az/media/wysiwyg/Baktelecom_1.png"
                alt=""
              />
            </div>
            <div>
              <img src="https://kontakt.az/media/wysiwyg/Yelo_2.png" alt="" />
            </div>
            <div>
              <img
                src="https://kontakt.az/media/wysiwyg/Unibank_1.png"
                alt=""
              />
            </div>
            <div>
              <img src="https://kontakt.az/media/wysiwyg/UBOC_1.png" alt="" />
            </div>
            <div>
              <img
                src="https://kontakt.az/media/wysiwyg/AccessBank_1.png"
                alt=""
              />
            </div>
            <div>
              <img src="https://kontakt.az/media/wysiwyg/Stp_1.png" alt="" />
            </div>
            <div>
              <img src="https://kontakt.az/media/wysiwyg/ADY_1.png" alt="" />
            </div>
            <div>
              <img src="https://kontakt.az/media/wysiwyg/ARAZ_1.png" alt="" />
            </div>
            <div>
              <img
                src="	https://kontakt.az/media/wysiwyg/Millikart_1.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="	https://kontakt.az/media/wysiwyg/Workplace_1.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="	https://kontakt.az/media/wysiwyg/Kristal_1.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="	https://kontakt.az/media/wysiwyg/Papa_Johns_1.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://kontakt.az/media/wysiwyg/Veys_lo_lu_1.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="	https://kontakt.az/media/wysiwyg/Improtex_1.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="	https://kontakt.az/media/wysiwyg/Tabaterra_1.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://kontakt.az/media/wysiwyg/Pashakapital_1.png"
                alt=""
              />
            </div>
            <div>
              <img src="https://kontakt.az/media/wysiwyg/Azza_2.png" alt="" />
            </div>
            <div>
              <img src="https://kontakt.az/media/wysiwyg/Sirab_1.png" alt="" />
            </div>
            <div>
              <img
                src="	https://kontakt.az/media/wysiwyg/Rossman_1.png"
                alt=""
              />
            </div>
            <div>
              <img src="	https://kontakt.az/media/wysiwyg/_zs_t_1.png" alt="" />
            </div>
            <div>
              <img
                src="https://kontakt.az/media/wysiwyg/Agro-West_1.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="	https://kontakt.az/media/wysiwyg/Azercell_1.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://kontakt.az/media/wysiwyg/AzFinance_1.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://kontakt.az/media/wysiwyg/Coca-cola_2.png"
                alt=""
              />
            </div>
            <div>
              <img src="https://kontakt.az/media/wysiwyg/PFL_2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </main>
      <Footer/></>
  );
};

export default Slider;

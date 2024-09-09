import { useState, useRef, useEffect } from "react";
import style from "./Home.module.css";
import Covers from "../../components/Covers/Covers";
import Navbar from "../../components/Navbar/Navbar";
import Louder from "../../components/Louder/Louder";
import RecommendedProducts from "../../components/RecommendedProducts/RecommendedProducts";

/* Imágenes */
import imgF1 from "../../assets/images/Categorias/footer/1.jpg";
import imgF2 from "../../assets/images/Categorias/footer/2.jpg";
import imgF3 from "../../assets/images/Categorias/footer/3.jpg";
import imgF4 from "../../assets/images/Categorias/footer/4.jpg";
import imgF5 from "../../assets/images/Categorias/footer/5.jpg";
import imgF6 from "../../assets/images/Categorias/footer/6.jpg";
/*hotsale*/
import imgD1 from "../../assets/images/Categorias/hotSale/1.jpg";
import imgD2 from "../../assets/images/Categorias/hotSale/2.jpg";
import imgD3 from "../../assets/images/Categorias/hotSale/3.jpg";
import imgD4 from "../../assets/images/Categorias/hotSale/4.jpg";
import imgD5 from "../../assets/images/Categorias/hotSale/5.jpg";
import imgD6 from "../../assets/images/Categorias/hotSale/6.jpg";
/*new collection*/
import imgC1 from "../../assets/images/Categorias/newCollection/1.jpg";
import imgC2 from "../../assets/images/Categorias/newCollection/2.jpg";
import imgC3 from "../../assets/images/Categorias/newCollection/3.jpg";
import imgC4 from "../../assets/images/Categorias/newCollection/4.jpg";
import imgC5 from "../../assets/images/Categorias/newCollection/5.jpg";
import imgC6 from "../../assets/images/Categorias/newCollection/6.jpg";

import FeaturedGallery from "../../components/FeaturedGallery/FeaturedGallery";
import FeatureBlock from "../../components/FeatureBlock/FeatureBlock";
import NavbarMovile from "../../components/NavbarMovile/NavbarMovile";
import Footer from "../../components/Footer/Footer";

function Home({ sectionRef, isScrollingUp, currentSection }) {


  const sections = [
    {
      section: "NEW COLLECTION",
      buttonText: "Explorar",
      images: [imgC1, imgC2, imgC3, imgC4, imgC5, imgC6],
      title: "Nuevas colecciones disponibles.",
      description:
        "Explora nuestras últimas colecciones y mantente al día con las tendencias urbanas más recientes.",
    },
    {
      section: "HOT SALE",
      buttonText: "Hasta 30% OFF",
      images: [imgD1, imgD2, imgD3, imgD4, imgD5, imgD6],
      title: "Nuestras ofertas exclusivas.",
      description:
        "Aprovecha las mejores ofertas y actualiza tu guardarropa sin gastar de más.",
    },
    {
      section: "LOOKBOOK",
      buttonText: "Inspírate",
      images: [imgF1, imgF2, imgF3, imgF4, imgF5, imgF6],
      title: "Inspírate con nuestro Lookbook.",
      description:
        "Encuentra las mejores combinaciones y estilos para llevar la moda urbana a otro nivel.",
    },
  ];

  const [isLouding, setIsLouding] = useState(true);
  setTimeout(() => {
    setIsLouding(false);
  }, 4000);

  return (
    <section ref={sectionRef} className={style.home_main}>
      <Navbar isScrollingUp={isScrollingUp} currentSection={currentSection} />
      <section data-section="NEW COLLECTION">
        <FeaturedGallery
          images={sections[0].images}
          section={sections[0].section}
          buttonText={sections[0].buttonText}
          description={sections[0].description}
        />
      </section>
      <section data-section="NUESTRO CATALOGO">
        <FeatureBlock section={"NUESTRO CATALOGO"} />
      </section>
      <section data-section="HOT SALE">
        <FeaturedGallery
          images={sections[1].images}
          section={sections[1].section}
          buttonText={sections[1].buttonText}
          description={sections[1].description}
        />
      </section>
      <section data-section="CONTACTANOS">
        <FeatureBlock section={"CONTACTANOS"} />
      </section>
      <section data-section="FOOTER">
        <FeatureBlock section={"FOOTER"} />
      </section>
      <Footer />
    </section>
  );
}

export default Home;

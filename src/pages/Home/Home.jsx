import style from "./Home.module.css";
import Covers from "../../components/Covers/Covers";
import Navbar from "../../components/Navbar/Navbar";
import Louder from "../../components/Louder/Louder";
import { useState } from "react";
import RecommendedProducts from "../../components/RecommendedProducts/RecommendedProducts";
/*footer*/
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
/*hotsale*/
import imgC1 from "../../assets/images/Categorias/newCollection/1.jpg";
import imgC2 from "../../assets/images/Categorias/newCollection/2.jpg";
import imgC3 from "../../assets/images/Categorias/newCollection/3.jpg";
import imgC4 from "../../assets/images/Categorias/newCollection/4.jpg";
import imgC5 from "../../assets/images/Categorias/newCollection/5.jpg";
import imgC6 from "../../assets/images/Categorias/newCollection/6.jpg";

import FeaturedGallery from "../../components/FeaturedGallery/FeaturedGallery";
function Home({ handleSlideChange, currentSlide }) {
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
      images: [imgD1, imgD2, imgD3, imgD4, imgD5],
      title: "Nuestras ofertas exclusivas.",
      description:
        "Aprovecha las mejores ofertas y actualiza tu guardarropa sin gastar de más.",
    },
    {
      section: "Lookbook",
      buttonText: "Inspírate",
      images: [imgF1, imgF2, imgF3, , imgF4, , imgF5, imgF6],
      title: "Inspírate con nuestro Lookbook.",
      description:
        "Encuentra las mejores combinaciones y estilos para llevar la moda urbana a otro nivel.",
    },
  ];

  // const sections = [[imgF1,imgF2,imgF3,imgF4,imgF5,imgF6], [imgD1,imgD2,imgD3,imgD4,imgD5,imgD6],  [imgC1,imgC2,imgC3,imgC4,imgC5,imgC6]]
  const [isLouding, setIsLouding] = useState(true);
  setTimeout(() => {
    setIsLouding(false);
  }, 4000);
  return (
    <section className={style.home_main}>
      <Navbar
        sections={sections}
        handleSlideChange={handleSlideChange}
        currentSlide={currentSlide}
      />
      {sections.map((item, index) => (
        <FeaturedGallery
          images={item.images}
          section={item.section}
          buttonText={item.buttonText}
          description={item.description}
          key={index}
        />
      ))}

      {/* {isLouding ? (
        <Louder />
      ) : (
        <Covers
          sections={sections}
          handleSlideChange={handleSlideChange}
          currentSlide={currentSlide}
        />
      )} */}
    </section>
  );
}

export default Home;

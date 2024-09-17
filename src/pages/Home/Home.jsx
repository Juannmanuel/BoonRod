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
import { products } from "../../data";
import FeaturedGallery from "../../components/FeaturedGallery/FeaturedGallery";
import FeatureBlock from "../../components/FeatureBlock/FeatureBlock";
import NavbarMovile from "../../components/NavbarMovile/NavbarMovile";
import Footer from "../../components/Footer/Footer";
import About from "../About/About";
import CustomerSupport from "../../components/CustomerSupport/CustomerSupport";
import LaNavbar from "../../components/LaNavbar/LaNavbar";

function Home({}) {
  const sectionRef = useRef(null);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [currentSection, setCurrentSection] = useState(""); // Nueva variable para la sección actual

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = sectionRef.current.scrollTop; // Obtener la posición actual del scroll

      if (currentScrollTop < lastScrollTop) {
        setIsScrollingUp(true); // Scroll hacia arriba
      } else {
        setIsScrollingUp(false); // Scroll hacia abajo
      }

      // Actualizar la posición del scroll anterior
      setLastScrollTop(currentScrollTop);

      // Detectar la sección actual en pantalla
      const sectionsRef = document.querySelectorAll("section"); // Seleccionamos todas las secciones
      let foundSection = "NEW COLLECTION"; // Valor predeterminado
      sectionsRef.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          foundSection = section.getAttribute("data-section"); // Encontrar la sección visible
        }
      });
      setCurrentSection(foundSection); // Actualizar la sección actual
    };

    const sectionEl = sectionRef.current;

    if (sectionEl) {
      sectionEl.addEventListener("scroll", handleScroll); // Escuchar evento de scroll
    }

    // Cleanup: remover el evento cuando el componente se desmonte
    return () => {
      if (sectionEl) {
        sectionEl.removeEventListener("scroll", handleScroll);
      }
    };
  }, [lastScrollTop]);

  /*Funcion para filtrar los productos */
  let outfitUp = products.filter(
    (item) =>
      item.type == "Remera" || item.type == "Campera" || item.type == "Buzo"
  );

  /*Funcion para filtrar los productos */

  let outfitDown = products.filter(
    (item) => item.type == "Pantalon" || item.type == "Zapatillas"
  );
  console.log(outfitDown);
  /* Objeto de las secciones */

  const sectionsObj = [
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

  // const [isLouding, setIsLouding] = useState(true);
  // setTimeout(() => {
  //   setIsLouding(false);
  // }, 4000);

  return (
    <section ref={sectionRef} className={style.home_main}>
      {/* <Navbar
        sectionRef={sectionRef}
        isScrollingUp={isScrollingUp}
        currentSection={currentSection}
      /> */}
      <LaNavbar
        sectionRef={sectionRef}
        isScrollingUp={isScrollingUp}
        currentSection={currentSection}
      />
      <section data-section="NEW COLLECTION">
        <FeaturedGallery
          images={sectionsObj[0].images}
          section={sectionsObj[0].section}
          buttonText={sectionsObj[0].buttonText}
          description={sectionsObj[0].description}
        />
      </section>
      <section data-section="CATÁLOGO">
        <FeatureBlock
          title={"Tendencias Urbanas que Rompen Esquemas"}
          description={
            "Explorá lo último en moda urbana para destacar en la ciudad. Prendas pensadas para marcar tu estilo sin límites."
          }
          sectionProducs={outfitUp}
          section={"CATÁLOGO"}
        />
      </section>
      <section data-section="SOBRE NOSOTROS">
        <About />
      </section>
      <section data-section="LOOKBOOK">
        <FeaturedGallery
          images={sectionsObj[2].images}
          section={sectionsObj[2].section}
          buttonText={sectionsObj[2].buttonText}
          description={sectionsObj[2].description}
        />
      </section>
      <section data-section="CATÁLOGO">
        <FeatureBlock
          section={"CATÁLOGO"}
          title={"Outfits de la Parte Inferior"}
          description={
            "Elige los mejores complementos para tu look urbano con nuestra selección de ropa y calzado."
          }
          sectionProducs={outfitDown}
        />
      </section>
      <CustomerSupport />
      <Footer />
    </section>
  );
}

export default Home;

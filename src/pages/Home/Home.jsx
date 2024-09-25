import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setScrollDirection, setCurrentSection } from "../../redux/actions";
import style from "./Home.module.css";
import { products } from "../../data";
import FeaturedGallery from "../../components/FeaturedGallery/FeaturedGallery";
import FeatureBlock from "../../components/FeatureBlock/FeatureBlock";
import Footer from "../../components/Footer/Footer";
import About from "../About/About";
import CustomerSupport from "../../components/CustomerSupport/CustomerSupport";
import LaNavbar from "../../components/LaNavbar/LaNavbar";
import { getProductsByCategory, getAllSections } from "../../redux/actions";
function Home({}) {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.backUpSections);
  console.log(sections, "sections home");
  /*

id: "strin";_
description: "string";
buttonText: "string";
images: [4];
sectionName: "string"
title: "string"

  
  */
  const sectionRef = useRef(null);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [currentSection, setCurrentSection] = useState(""); // Nueva variable para la sección actual

  useEffect(() => {
    dispatch(getProductsByCategory());
    dispatch(getAllSections());
    const handleScroll = () => {
      const currentScrollTop = sectionRef.current.scrollTop; // Obtener la posición actual del scroll

      if (currentScrollTop < lastScrollTop) {
        setIsScrollingUp(true); // Scroll hacia arriba
        dispatch(setScrollDirection(isScrollingUp));
      } else {
        setIsScrollingUp(false); // Scroll hacia abajo
        dispatch(setScrollDirection(isScrollingUp));
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
      // dispatch(setCurrentSection(currentSection))
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
  }, [lastScrollTop, dispatch]);
  console.log(sections[0], "fe  a");

  return (
    <section ref={sectionRef} className={style.home_main}>
      <LaNavbar sectionRef={sectionRef} currentSection={currentSection} />
      <section data-section={sections[0].sectionName}>
      <FeaturedGallery sections={sections[0]} />
      </section>
      <section data-section="¿Quienes somos?">
      <About />
      </section>
      <section data-section={sections[1].sectionName}>
      <FeaturedGallery sections={sections[1]} />
      </section>
      <section data-section="Contactenos">
      <CustomerSupport/>
      </section>
      <section data-section={sections[2].sectionName}>
      <FeaturedGallery sections={sections[2]} />
      </section>
      <Footer />
    </section>
  );
}

export default Home;

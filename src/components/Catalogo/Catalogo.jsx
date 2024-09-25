import { useState, useRef, useEffect } from "react";
import style from "./Catalogo.module.css";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import logoImage from "../../assets/images/logo/logo_boonrod_claro.png";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts";
import NavbarMovile from "../NavbarMovile/NavbarMovile";
import LaNavbar from "../LaNavbar/LaNavbar";

function Catalogo({}) {
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

  return (
    <section ref={sectionRef} className={style.catalogo_main}>
      <LaNavbar/>
      <RecommendedProducts section={"catalogo"} />
      <Footer />
    </section>
  );
}

export default Catalogo;

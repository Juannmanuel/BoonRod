import { useState, useRef, useEffect } from "react";
import style from "./Catalogo.module.css";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import logoImage from "../../assets/images/logo/logo_boonrod_claro.png";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts";
import NavbarMovile from "../NavbarMovile/NavbarMovile";

function Catalogo({ currentPath }) {
  const sectionRef = useRef(null); 
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = sectionRef.current.scrollTop; // Obtener la posición actual del scroll

      if (currentScrollTop < lastScrollTop) {
        // Scroll hacia arriba
        setIsScrollingUp(true);
      } else {
        // Scroll hacia abajo
        setIsScrollingUp(false);
      }

      setLastScrollTop(currentScrollTop); // Actualizar la posición del scroll anterior
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
      <NavbarMovile isScrollingUp={isScrollingUp} />
      <RecommendedProducts section={"catalogo"} />
      <Footer />
    </section>
  );
}

export default Catalogo;

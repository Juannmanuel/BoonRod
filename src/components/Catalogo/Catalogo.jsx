import { useState, useEffect } from "react";
import style from "./Catalogo.module.css";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import logoImage from "../../assets/images/logo/logo_boonrod_claro.png";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts";

function Catalogo() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setNavbarVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const categorias = [
    "pantalones cortos",
    "remeras",
    "pantalones largos",
    "zapatillas",
    "accesorios",
    "camperas",
  ];
  return (
    <section className={style.catalogo_main}>
      <nav
        className={`${style.navbar} ${
          navbarVisible ? style.visible : style.hidden
        }`}
      >
        <section className={style.navbar_menu}>
          <IoMenu className={style.menu_icon} />
          <img src={logoImage} alt="Logo de la tienda" className={style.logo} />
          <CiSearch className={style.search_icon} />
        </section>
        <section className={style.navbar_options}>
          {categorias.map((item, index) => (
            <div key={index} className={style.category_item}>
              <span>{item}</span>
            </div>
          ))}
        </section>
      </nav>
      <RecommendedProducts />
      <Footer />
    </section>
  );
}

export default Catalogo;

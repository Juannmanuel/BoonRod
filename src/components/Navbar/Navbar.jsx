import React from "react";
import styles from "./Navbar.module.css";
import logoImage from "../../assets/images/logo/logo_boonrod_oscuro.png";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";

const Navbar = ({ sections, currentSlide, currentPath }) => {



  return (
    <nav className={styles.navbar}>
      <img src={logoImage} alt="Logo de la tienda" className={styles.logo} />
      <div className={styles.link}>
        { currentPath !== "/categories" ? sections.map((item, index) => (
          <button
            className={`${styles.cta} ${
              currentSlide === index ? styles.active : ""
            }`}
            key={index}
            id={index}
          >
            <span className={styles.hover_underline_animation}>{item.section}</span>
          </button>
        )) : null}
      </div>
    </nav>
  );
};

export default Navbar;

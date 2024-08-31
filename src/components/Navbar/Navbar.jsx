import React from "react";
import styles from "./Navbar.module.css";
import logoImage from "../../assets/images/logo/logo_boonrod_oscuro.png";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = ({ sections, currentSlide, currentPath }) => {
  return (
    <nav className={styles.navbar}>
      <img src={logoImage} alt="Logo de la tienda" className={styles.logo} />
      <div className={styles.link}>
        {currentPath === "/catalogo" || currentPath === "/detalle"
          ? null
          : sections.map((item, index) => (
              <Link to={"/catalogo"}>
                <button
                  className={`${styles.cta} ${
                    currentSlide === index ? styles.active : styles.inActive
                  }`}
                  key={index}
                  id={index}
                >
                  <span className={styles.hover_underline_animation}>
                    {item.section}
                  </span>
                </button>
              </Link>
            ))}
      </div>
    </nav>
  );
};

export default Navbar;

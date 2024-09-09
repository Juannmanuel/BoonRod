import React from "react";
import styles from "./Navbar.module.css";
import logoImage from "../../assets/images/logo/logo_boonrod_oscuro.png";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = ({ sections, currentSlide, currentPath, isScrollingUp }) => {
  return (
    <nav className={styles.nav_main_container}>
      <div className={styles.nav_actions_container}>
        <div className={styles.menu_button}>
          <IoMenu />
        </div>
        <div className={styles.cart_button}>
          <CiShoppingCart />
          <span>{`(0)`}</span>
        </div>
      </div>
      <div className={styles.image_and_categories_container}>
        <div className={styles.category_image}>
          <img
            src={logoImage}
            alt="logo"
            className={`${styles.image} ${
              isScrollingUp ? styles.visible : styles.hidden
            }`}
          />
          <span
            className={`${styles.title_secion} ${
              isScrollingUp ? styles.hidden : styles.visible
            }`}
          >
            NEW COLLECTION
          </span>
        </div>
        <div className={styles.categories_carousel}>
          {sections.map((item, index) => (
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
          ))}
        </div>
      </div>

      {/* <div className={styles.actions_buttons}>
      <img src={logoImage} alt="Logo de la tienda" className={styles.logo} />

      </div>
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
      </div> */}
    </nav>
  );
};

export default Navbar;

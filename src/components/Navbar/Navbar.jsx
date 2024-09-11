import React from "react";
import styles from "./Navbar.module.css";
import logoImage from "../../assets/images/logo/logo_boonrod_oscuro.png";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = ({ isScrollingUp, currentSection, sectionRef }) => {
  return (
    <nav ref={sectionRef} className={ isScrollingUp ? styles.nav_main_container : styles.nav_main_container_withBackground }>
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
            {currentSection}
          </span>
        </div>
        <div className={styles.categories_carousel}></div>
      </div>
    </nav>
  );
};

export default Navbar;

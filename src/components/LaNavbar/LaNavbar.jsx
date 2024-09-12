import React from "react";
import styles from "./LaNavbar.module.css";
import boonrodText from "../../assets/images/logo/logo_tipografia_boonrod_claro.png";
import { IoMenu } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";

const LaNavbar = ({ isScrollingUp, currentSection, sectionRef }) => {
  return (
    <nav
      ref={sectionRef}
      className={
        isScrollingUp
          ? styles.nav_main_container
          : styles.nav_main_container_withBackground
      }
    >
      <div className={styles.nav_actions_container}>
        <IoMenu
          style={{ color: isScrollingUp ? "black" : "white" }}
          className={styles.icon}
        />

        <span
          style={{ color: isScrollingUp ? "black" : "white" }}
          className={styles.categorie}
        >
          {isScrollingUp ? (
            <img src={boonrodText} />
          ) : (
            <h2>{currentSection}</h2>
          )}
        </span>
        <CiShoppingCart
          style={{ color: isScrollingUp ? "black" : "white" }}
          className={styles.icon}
        />
      </div>
    </nav>
  );
};

export default LaNavbar;

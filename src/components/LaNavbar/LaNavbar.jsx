import React from "react";
import style from "./LaNavbar.module.css";
import boonrodText from "../../assets/images/logo/logo_tipografia_boonrod_claro.png";
import { IoMenu } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useState } from "react";
const LaNavbar = ({ currentSection, ref }) => {
  const isScrollingUp = useSelector((state) => state.isScrollingUp);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu(){
    console.log("entré");
    setIsMenuOpen(!isMenuOpen)
    
  }
  return (
    <nav
      ref={ref}
      className={
        isScrollingUp
          ? style.nav_main_container
          : style.nav_main_container_withBackground
      }
    >
      <div className={style.nav_actions_container}>
        <IoMenu
          style={{ color: isScrollingUp ? "black" : "white" }}
          className={style.icon}
          onClick={()=> toggleMenu()}
        />

        <div className={style.categorie}>
          <img src={boonrodText} />
        </div>
        <CiShoppingCart className={style.icon} />
      </div>
      {/* menú amburgesa */}
      { isMenuOpen && <div className={`${style.hamburger_menu_container} ${isMenuOpen ? style.open : style.closed}`}>
        <div className={style.container_links}>

        </div>
      </div>
    }
    </nav>
  );
};

export default LaNavbar;

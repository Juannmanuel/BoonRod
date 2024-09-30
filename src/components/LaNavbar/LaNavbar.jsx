import React from "react";
import style from "./LaNavbar.module.css";
import boonrodText from "../../assets/images/logo/logo_tipografia_boonrod_claro.png";
import { IoMenu } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { useState } from "react";
import SocialLinks from "../SocialLinks/SocialLinks";
const LaNavbar = ({ currentSection, ref }) => {
  const sections = useSelector((state) => state.backUpSections);
  const isScrollingUp = useSelector((state) => state.isScrollingUp);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    console.log("entré");
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav ref={ref} className={style.nav_main_container}>
      <div className={style.nav_actions_container}>
        {isMenuOpen ? (
          <IoMdClose className={style.icon} onClick={() => toggleMenu()} />
        ) : (
          <IoMenu className={style.icon} onClick={() => toggleMenu()} />
        )}

        <div className={style.categorie}>
          <img src={boonrodText} />
        </div>
        <CiShoppingCart className={style.icon} />
      </div>
      {/* menú amburgesa */}
      {isMenuOpen && (
        <div
          className={`${style.hamburger_menu_container} ${
            isMenuOpen ? style.open : style.close
          }`}
        >
          <div className={style.container_links}>
            {sections?.map((item, index) => {
              return (
                <div key={index} className={style.link_item}>
                  <span>{item.sectionName}</span>
                </div>
              );
            })}
            <div className={style.link_item}>
              <SocialLinks />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default LaNavbar;

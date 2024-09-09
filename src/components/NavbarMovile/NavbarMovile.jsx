import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import style from "./NavbarMovile.module.css";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import logoImage from "../../assets/images/logo/logo_boonrod_claro.png";
import { Link } from "react-router-dom";

function NavbarMovile({isScrollingUp, sectionRef}) {
  console.log(isScrollingUp, "nav");
  
  const categorias = ["pantalones","remeras","buzos","camperas","zapatillas","accesorios"]

  return (
    <nav
      ref={sectionRef}
      className={`${style.navbar} ${
        isScrollingUp ? style.visible : style.hidden
      }`}
    >
      <section className={style.navbar_menu}>
        <IoMenu className={style.menu_icon} />
        <Link to={"/"}>
        <img src={logoImage} alt="Logo de la tienda" className={style.logo} />
        </Link>
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
  );
}

export default NavbarMovile;

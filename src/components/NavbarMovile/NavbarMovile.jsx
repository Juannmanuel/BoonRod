import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import style from "./NavbarMovile.module.css";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import logoImage from "../../assets/images/logo/logo_boonrod_claro.png";

function NavbarMovile({isScrollingUp}) {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath, "nav");
  const categorias = ["pantalones","remeras","buzos","camperas","zapatillas","accesorios"]

  return (
    <nav
      className={`${style.navbar} ${
        isScrollingUp ? style.visible : style.hidden
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
  );
}

export default NavbarMovile;

import { useState, useEffect } from "react";
import style from "./Catalogo.module.css";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import logoImage from "../../assets/images/logo/logo_boonrod_claro.png";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts";
import NavbarMovile from "../NavbarMovile/NavbarMovile";

function Catalogo({currentPath}) {


  return (
    <section className={style.catalogo_main}>
      <NavbarMovile/>
      <RecommendedProducts />
      <Footer />
    </section>
  );
}

export default Catalogo;

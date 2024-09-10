import { useState, useRef, useEffect } from "react";
import style from "./Catalogo.module.css";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import logoImage from "../../assets/images/logo/logo_boonrod_claro.png";
import Footer from "../Footer/Footer";
import Card from "../Card/Card";
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts";
import NavbarMovile from "../NavbarMovile/NavbarMovile";

function Catalogo({ currentPath , isScrollingUp, sectionRef }) {
 console.log(isScrollingUp);
 console.log(sectionRef)
 
  return (
    <section ref={sectionRef} className={style.catalogo_main}>
      <NavbarMovile sectionRef={sectionRef} isScrollingUp={isScrollingUp} />
      <RecommendedProducts section={"catalogo"} />
      <Footer />
    </section>
  );
}

export default Catalogo;

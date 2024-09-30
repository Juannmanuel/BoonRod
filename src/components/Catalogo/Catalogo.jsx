import { useState, useRef, useEffect } from "react";
import style from "./Catalogo.module.css";
import Footer from "../Footer/Footer";
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts";
import LaNavbar from "../LaNavbar/LaNavbar";
import { products } from "../../data";

function Catalogo({}) {
  console.log(products[0]);
  let typeOfProduct = ["Todo","Pantalones", "Camperas", "Buzos", "Remeras", "Zapatillas"];

  return (
    <section className={style.catalogo_main}>
      <nav className={style.nav_main}>
        <LaNavbar />
      </nav>
      <section className={style.container_filter_products}>
        <div className={style.container_types}>
          { typeOfProduct.map((item, index) => {
            return (
              <span className={style.type} key={index}>{item}</span>
            )
          }) }
        </div>
        <div className={style.container_button}></div>
      </section>
      <RecommendedProducts products={products} section={"catalogo"} />
      <Footer />
    </section>
  );
}

export default Catalogo;

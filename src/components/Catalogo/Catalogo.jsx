import { useState, useRef, useEffect } from "react";
import style from "./Catalogo.module.css";
import Footer from "../Footer/Footer";
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts";
import LaNavbar from "../LaNavbar/LaNavbar";
import { products, ledBanner } from "../../data";
import CustomerSupport from "../CustomerSupport/CustomerSupport";
import LedBanner from "../LedBanner/LedBanner";
function Catalogo({}) {
  const [selectedType, setSelectedType] = useState("Todo");
  const handleChange = (type) => {
    setSelectedType(type);
  };
  const filteredProducts =
    selectedType === "Todo"
      ? products
      : products.filter((item) => item.type == selectedType);
  console.log(products[0]);
  let typeOfProduct = [
    "Todo",
    "Pantalon",
    "Campera",
    "Buzo",
    "Remera",
    "Zapatillas",
  ];

  return (
    <section className={style.catalogo_main}>
      <nav className={style.nav_main}>
        <LaNavbar />
      </nav>
      <section className={style.container_filter_products}>
        <div className={style.container_types}>
          {typeOfProduct.map((item, index) => {
            return (
              <span
                onClick={() => handleChange(item)}
                className={`${style.type} ${
                  selectedType === item ? style.type_selected : ""
                }`}
                key={index}
              >
                {item}
              </span>
            );
          })}
        </div>
        <div className={style.container_button}></div>
      </section>
      <section className={style.container_products}>
      <RecommendedProducts products={filteredProducts} section={"catalogo"} />
      </section>
      <LedBanner text={ledBanner[0].text} />
      <CustomerSupport/>
      <Footer />
    </section>
  );
}

export default Catalogo;

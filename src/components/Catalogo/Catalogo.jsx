import { useState } from "react";
import style from "./Catalogo.module.css";
import Footer from "../Footer/Footer";
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts";
import LaNavbar from "../LaNavbar/LaNavbar";
import { products } from "../../data";

function Catalogo() {
  // Estado para manejar el tipo de producto seleccionado
  const [selectedType, setSelectedType] = useState("Todo");

  // Estado para manejar si se muestran solo productos en oferta
  const [showDiscounted, setShowDiscounted] = useState(false);

  // Array de tipos de producto
  let typeOfProduct = [
    "Todo",
    "Pantalon",
    "Campera",
    "Buzo",
    "Remera",
    "Zapatillas",
  ];

  // Función para manejar el cambio de tipo
  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  // Función para manejar el botón de ofertas
  const handleShowDiscounted = () => {
    setShowDiscounted(!showDiscounted);
  };

  // Filtrar productos por tipo seleccionado y ofertas
  const filteredProducts = products
    .filter(
      (product) => selectedType === "Todo" || product.type === selectedType
    )
    .filter((product) => !showDiscounted || product.discount.isDiscounted);

  return (
    <section className={style.catalogo_main}>
      <nav className={style.nav_main}>
        <LaNavbar />
        <section className={style.container_filter_products}>
          <div className={style.container_types}>
            {typeOfProduct.map((item, index) => {
              return (
                <span
                  className={`${style.type} ${
                    selectedType === item ? style.type_selected : ""
                  }`}
                  key={index}
                  onClick={() => handleTypeChange(item)}
                >
                  {item}
                </span>
              );
            })}
          </div>
          <div className={style.container_button}>
            <span
              className={`${style.type_discount} ${
                showDiscounted ? style.type_discount_selected : ""
              }`}
              onClick={handleShowDiscounted}
            >
              {showDiscounted ? "Todo" : "Ofertas"}
            </span>
          </div>
        </section>
      </nav>
      <section className={style.container_products}>
        <RecommendedProducts products={filteredProducts} section={"catalogo"} />
      </section>
      <Footer />
    </section>
  );
}

export default Catalogo;

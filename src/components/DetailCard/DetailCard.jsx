import RecommendedProducts from "../RecommendedProducts/RecommendedProducts";
import { CiCircleChevUp, CiCircleChevDown } from "react-icons/ci";
import style from "./DetailCard.module.css";
import { useEffect, useRef } from "react";

import Footer from "../Footer/Footer";

function DetailCard({ expanded }) {
  
  const cardRef = useRef(null);
  useEffect(() => {
    if (!expanded && cardRef.current) {
      // Cuando el componente se contrae, ajusta el scroll hacia la parte superior
      cardRef.current.scrollTop = 0;
    }
  }, [expanded]);
  const discountedPrice = 8500;
  const price = 10000;
  const discount = 1;
  return (
    <section ref={cardRef} className={style.detailCard_main}>
      <div
        className={
          expanded ? style.detail_product_expanding : style.detailCard_main
        }
      >
        <div className={style.productHeader}>
          <h2 className={style.productName}>PANTALÓN CHINO PLIEGUES </h2>
          <div className={style.priceContainer}>
            {discount > 0 && (
              <span className={style.productPriceOriginal}>${price}</span>
            )}
            <span className={style.productPriceDiscounted}>
              ${discount > 0 ? discountedPrice : price}
            </span>
          </div>
            <p className={style.productDescription}>
            Pantalón regular fit confeccionado en tejido de algodón con
              elasticidad. Cintura con detalle de pliegues frontales. Bolsillos
              en delantero y detalle de bolsillos traseros de vivo. Cierre
              frontal con cremallera y botón.
              
              
            </p>
        </div>
        <div className={style.productSizes}>
          <span style={{ textDecoration: "underline" }}>
            Talles disponibles:
          </span>
          <div className={style.sizes}>
            <span className={style.size}>S</span>
            <span className={style.size}>M</span>
            <span className={style.size}>L</span>
            <span className={style.size}>XL</span>
            <span className={style.size}>XL</span>
          </div>
        </div>
        <div className={style.cash_media}></div>
        <div className={style.cash_media}></div>
        <div className={style.productActions_btn}>
          <button>Añadir al carrito</button>
          <button>Comprar ahora</button>
        </div>
      </div>
      <div className={style.cash_media}></div>
      
    </section>
  );
}

export default DetailCard;

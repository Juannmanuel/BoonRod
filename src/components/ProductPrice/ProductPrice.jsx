import React from "react";
import style from "./ProductPrice.module.css";
import { useLocation } from "react-router-dom";

function ProductPrice({ price, percentage, isDiscounted, fontSize=1 }) {



  // Calcular el precio con descuento si está disponible
  const numericPrice = parseFloat(price);

  // Calcular el precio con descuento si está disponible
  const discountedPrice = isDiscounted
    ? numericPrice - numericPrice * (percentage / 100)
    : numericPrice;

  return (
    <div className={style.product_price} style={{fontSize: `${fontSize}rem`}}>
      {isDiscounted ? (
        <div className={style.product_price_details}>
          <span className={style.product_price_original}>${price}</span>
          <span className={style.product_price_discounted}>
            ${discountedPrice}
          </span>
        </div>
      ) : (
        <span className={style.product_price_normal}>${price}</span>
      )}
    </div>
  );
}

export default ProductPrice;

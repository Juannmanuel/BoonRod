import React from "react";
import style from "./ProductPrice.module.css";
import { useLocation } from "react-router-dom";

function ProductPrice({ price, percentage, isDiscounted }) {
 /*Accedemos al path, para poder ajustar los valores del fontsize dependiendo si está
 en el detalle o en la tarjeta*/
  const location = useLocation();
  console.log(location.pathname); // Te da la URL actual


  // Calcular el precio con descuento si está disponible
  const numericPrice = parseFloat(price);

  // Calcular el precio con descuento si está disponible
  const discountedPrice = isDiscounted
    ? numericPrice - numericPrice * (percentage / 100)
    : numericPrice;

  return (
    <div className={style.product_price}>
      {isDiscounted ? (
        <div className={location.pathname == "/louder" ? style.product_price_details_Detail_card : style.product_price_details}>
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

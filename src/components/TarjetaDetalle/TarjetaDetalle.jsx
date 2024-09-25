import style from "./TarjetaDetalle.module.css";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data.js";
import imgTC1 from "../../assets/images/Tarjetas/mastercard.png";
import imgTC2 from "../../assets/images/Tarjetas/mcredito.png";
import imgTC3 from "../../assets/images/Tarjetas/mp.png";
import imgTC4 from "../../assets/images/Tarjetas/visa.png";
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts";
import Footer from "../Footer/Footer";
import Louder from "../Louder/Louder.jsx";
import ProductPrice from "../ProductPrice/ProductPrice.jsx";

function TarjetaDetalle({
  expanded,
  name,
  price,
  description,
  sizes,
  percentage,
  isDiscounted,
}) {
  const { id } = useParams();
  const product = products.filter((item) => item.id == id);

  const tarjetaRef = useRef(null);
  useEffect(() => {
    if (!expanded && tarjetaRef.current) {
      tarjetaRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [expanded]);
  const discountedPrice = 8500;
  const discount = 1;
  const imgCards = [imgTC1, imgTC2, imgTC3, imgTC4];
  const colors = ["#2ecc71", "#3498db", "#8e44ad"];

  return (
    <section
      ref={tarjetaRef}
      className={expanded ? style.tarjeta_main_expanding : style.tarjeta_main}
    >
      <div className={style.productHeader}>
        <h2 className={style.productName}>{name}</h2>
        <div className={style.priceContainer}>
          <ProductPrice
            price={price}
            isDiscounted={isDiscounted}
            percentage={percentage}
          />
        </div>
        <p className={style.productDescription}>{description}</p>
      </div>
      <div className={style.productColorsContainer}>
        <span className={style.title_colors}>¿Qué color prefieres?</span>
        <div className={style.colors}>
          {colors.map((color, index) => (
            <div
              key={index}
              className={style.colorOption}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
      <div className={style.productSizes}>
        <span className={style.title_sizes}>¿Qué talle buscas?</span>
        <div className={style.sizes}>
          {sizes.map((item, index) => (
            <span key={index} className={style.size}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className={style.cash_media}>
        <span className={style.title_cash_media}>Medios de pago</span>
        <div className={style.cash_media_container_img}>
          <ul>
            <li>Tarjetas de crédito/débito (Visa, Mastercard)</li>
            <li>Transferencia bancaria</li>
            <li>Mercado Pago</li>
            <li>PayPal</li>
            <li>Efectivo en tienda</li>
          </ul>
          {imgCards.map((item, index) => (
            <img className={style.imgCard} key={index} src={item} />
          ))}
        </div>
      </div>

      <div className={style.productActions_btn}>
        <button>Añadir al carrito</button>
        <button>Comprar ahora</button>
      </div>

      <div className={style.reccomended}>
        <span style={{ margin: "0" }}>NUESTRAS RECOMENDACIONES</span>
        <RecommendedProducts />
      </div>

      <Footer />
    </section>
  );
}

export default TarjetaDetalle;

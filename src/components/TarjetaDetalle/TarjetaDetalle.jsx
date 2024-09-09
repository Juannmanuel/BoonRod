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

function TarjetaDetalle({ expanded, name, price, description, sizes }) {
  const { id } = useParams();
  const product = products.filter((item) => item.id == id);

  console.log(product[0].images[0].models);

  const tarjetaRef = useRef(null);
  useEffect(() => {
    if (!expanded && tarjetaRef.current) {
      tarjetaRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [expanded]);
  const discountedPrice = 8500;
  const discount = 1;
  const imgCards = [imgTC1, imgTC2, imgTC3, imgTC4];

  return (
    <section
      ref={tarjetaRef}
      className={expanded ? style.tarjeta_main_expanding : style.tarjeta_main}
    >
      <div className={style.shadow}></div>
      <div className={style.productHeader}>
        <h2 className={style.productName}>{name}</h2>
        <div className={style.priceContainer}>
          {discount > 0 && (
            <span className={style.productPriceOriginal}>${price}</span>
          )}
          <span className={style.productPriceDiscounted}>
            ${discount > 0 ? discountedPrice : price}
          </span>
        </div>
        <p className={style.productDescription}>{description}</p>
      </div>
      <div className={style.line}></div>
      <div className={style.productSizes}>
        <span>¿Qué talle buscas?</span>
        <div className={style.sizes}>
          {sizes.map((item, index) => (
            <span key={index} className={style.size}>
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className={style.line}></div>

      <div className={style.cash_media}>
        <span style={{ margin: "0" }}>Medios de pago</span>
        <div className={style.cash_media_container_img}>
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
      <div className={style.line}></div>

      <Footer />
    </section>
  );
}

export default TarjetaDetalle;

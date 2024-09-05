import style from "./TarjetaDetalle.module.css";
import imgTC1 from "../../assets/images/Tarjetas/mastercard.png";
import imgTC2 from "../../assets/images/Tarjetas/mcredito.png";
import imgTC3 from "../../assets/images/Tarjetas/mp.png";
import imgTC4 from "../../assets/images/Tarjetas/visa.png";

function TarjetaDetalle() {
  const discountedPrice = 8500;
  const price = 10000;
  const discount = 1;
  const imgCards = [imgTC1, imgTC2, imgTC3, imgTC4];

  return (
    <section className={style.tarjeta_main}>
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
          elasticidad. Cintura con detalle de pliegues frontales. Bolsillos en
          delantero y detalle de bolsillos traseros de vivo. Cierre frontal con
          cremallera y botón.
        </p>
      </div>
      <div className={style.productSizes}>
        <span style={{ textDecoration: "underline" }}>TALLES DISPONIBLES</span>
        <div className={style.sizes}>
          <span className={style.size}>S</span>
          <span className={style.size}>M</span>
          <span className={style.size}>L</span>
          <span className={style.size}>XL</span>
          <span className={style.size}>XL</span>
        </div>
      </div>
      <div className={style.cash_media}>
        <h3 style={{margin: "0"}}>MEDIOS DE PAGO</h3>
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
    </section>
  );
}

export default TarjetaDetalle;

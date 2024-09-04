import style from "./TarjetaDetalle.module.css";
import { CiBookmark } from "react-icons/ci";

function TarjetaDetalle() {
  return (
    <section className={style.tarjeta_main}>
      <div className={style.productInfoContainer}>
        <span className={style.productName}>
          CAMISA REGULAR FIT
          <CiBookmark />
        </span>
        <span className={style.productPrice}>29,95 EUR</span>
      </div>
      <div className={style.descriptionProduct}>
        <p>
          Camisa regular fit. Cuello italiano y manga larga acabada en puño con
          botón. Cierre frontal de botonadura.
          Camisa regular fit. Cuello italiano y manga larga acabada en puño con
          botón. Cierre frontal de botonadura.
          
        </p>
      </div>
      <div className={style.careInstructions}></div>
      {/* <div className={style.sizeGuide}></div> */}
      {/* <div className={style.relatedProductsCarousel}></div> */}
    </section>
  );
}

export default TarjetaDetalle;

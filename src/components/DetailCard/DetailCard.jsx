import RecommendedProducts from "../RecommendedProducts/RecommendedProducts";
import style from "./DetailCard.module.css";

function DetailCard() {
  return (
    <section className={style.detailCard_main}>
      <div className={style.detail_product}>
      <div className={style.productHeader}>
        <h2 className={style.productName}>PANTALÓN CHINO PLIEGUES</h2>
        <span className={style.productPrice}>$15.000</span>
        <p className={style.productDescription}>
        Pantalón regular fit confeccionado en tejido de algodón con elasticidad.
        Cintura con detalle de pliegues frontales. Bolsillos en delantero y
        detalle de bolsillos traseros de vivo. Cierre frontal con cremallera y
        botón.
      </p>
      </div>
      <div className={style.productSizes}>
        <span>Talles disponibles: S, M, L, XL</span>
      </div>
      <div className={style.productActions_btn}>
        <button>Añadir al carrito</button>
        <button>Comprar ahora</button>
      </div>
      </div>
      <div className={style.recommendedProductos_container}></div>
      {/* 
     
     
      <div className={style.recommendedProductos_container}>
        <RecommendedProducts />
      </div> */}
    </section>
  );
}

export default DetailCard;

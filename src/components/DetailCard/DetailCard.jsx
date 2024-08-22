import style from "./DetailCard.module.css";

function DetailCard() {
  return (
    <section className={style.detailCard_main}>
      <div className={style.productName}>
        <h3>PANTALÓN CHINO PLIEGUES</h3><hr/> <span>$15.000</span>
      </div>
      <div className={style.productDescription}>
        <p>
          Pantalón regular fit confeccionado en tejido de algodón con
          elasticidad. Cintura con detalle de pliegues frontales. Bolsillos en
          delantero y detalle de bolsillos traseros de vivo. Cierre frontal con
          cremallera y botón.
        </p>
      </div>
      <div className={style.productPrice}></div>
      <div className={style.productSizes}></div>
      <div className={style.productActions}></div>
    </section>
  );
}

export default DetailCard;

import style from "./Card.module.css";
import imagen from "../../assets/images/Ropa/Producto_5_Remera/Modelo/Modelo_2.jpg";
import { IoAddCircleOutline } from "react-icons/io5";
function Card({}) {
  return (
    <div className={style.card_main}>
      <img className={style.image} src={imagen} alt="" />
      <IoAddCircleOutline className={style.icon} />
      <span className={style.title}>BLAZER TRAJE PATA DE GALLO</span>
      <span className={style.price}>89,95 EUR</span>
    </div>
  );
}

export default Card;

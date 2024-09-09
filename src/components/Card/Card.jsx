import style from "./Card.module.css";
import imagen from "../../assets/images/Ropa/Producto_5_Remera/Modelo/Modelo_2.jpg";
import { IoAddCircleOutline } from "react-icons/io5";
function Card({images, title, price, section}) {

  
  return (
    <div className={style.card_main}>
      <img className={style.image} src={images} alt="" />
      <IoAddCircleOutline className={style.icon} />
      <span className={style.title}>{title}</span>
      <span className={style.price}>{price}EUR</span>
    </div>
  );
}

export default Card;

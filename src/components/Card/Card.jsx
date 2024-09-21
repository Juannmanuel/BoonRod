import style from "./Card.module.css";
import imagen from "../../assets/images/Ropa/Producto_5_Remera/Modelo/Modelo_2.jpg";
import { IoAddCircleOutline } from "react-icons/io5";
import ProductPrice from "../ProductPrice/ProductPrice";
function Card({ images, title, price, description,percentage, isDiscounted  }) {
  const {models} = images
  
  
  return (
    <div className={style.card_main}>
      <img className={style.image} src={models[0]} alt="" />
      <IoAddCircleOutline className={style.icon} />
      <span className={style.title}>{title}</span>
      <span className={style.description}>
        {description}
      </span>
      <ProductPrice
      price={price}
      percentage={percentage}
      isDiscounted={isDiscounted}
      />
    </div>
  );
}

export default Card;

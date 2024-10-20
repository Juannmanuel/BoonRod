import style from "./Card.module.css";
import imagen from "../../assets/images/Ropa/Producto_5_Remera/Modelo/Modelo_2.jpg";
import { IoAddCircleOutline } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import ProductPrice from "../ProductPrice/ProductPrice";
import { useInView } from "react-intersection-observer";


function Card({ images, title, price, description, percentage, isDiscounted }) {
  const { models } = images;
  const { ref, inView } = useInView();
  console.log(inView);

  return (
    <div ref={ref} className={style.card_main}>
      <div className={style.container_carrousel}>
        <img className={`${style.image} ${inView ? style.imageAnimated : null}`} src={models[0]} alt="" />
        <IoAddCircleOutline className={style.icon} />
        {isDiscounted ? (
          <div className={`${style.flag_discount} ${inView ? style.flag_discountAnimated : ""}`}>
            <span className={style.text_discount}>{percentage}%OFF</span>
          </div>
        ) : null}
      </div>

      <div className={style.description}>
        <span className={style.title}>{title}</span>
        <ProductPrice
          price={price}
          percentage={percentage}
          isDiscounted={isDiscounted}
          inView={inView}
        />
      </div>
    </div>
  );
}

export default Card;

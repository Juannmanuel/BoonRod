import style from "./Card.module.css"
import imagen from "../../assets/images/Categorias/footer/1.png"
import { IoAddCircleOutline } from "react-icons/io5";
function Card ({}) {


    return (
        <div className={style.card_main}>
        <img className={style.image} src={imagen} alt="" />
        <IoAddCircleOutline className={style.icon} />
        <span>Pantalon marron como para calsa </span>
        </div>
    )
}

export default Card
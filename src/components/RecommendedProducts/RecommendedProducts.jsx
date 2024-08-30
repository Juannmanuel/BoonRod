import style from "./RecommendedProducts.module.css";
import imagenModelo1 from "../../assets/images/Ropa/Producto_1_Camisa/Modelo/Modelo_1.jpg";
import imagenModelo2 from "../../assets/images/Ropa/Producto_1_Camisa/Modelo/Modelo_2.jpg";
import imagenModelo3 from "../../assets/images/Ropa/Producto_1_Camisa/Modelo/Modelo_3.jpg";
import Sliders from "../Sliders/Sliders";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function RecommendedProducts() {
  const images = [imagenModelo1, imagenModelo2, imagenModelo3];
  return (
    <section className={style.RecommendedProducts_main}>
      <div className={style.card}>
        <div  className={style.image_card}></div>
        <div className={style.description_card}></div>
      </div>
      <div className={style.card}>
        <div  className={style.image_card}></div>
        <div className={style.description_card}></div>
      </div>
      <div className={style.card}>
        <div  className={style.image_card}></div>
        <div className={style.description_card}></div>
      </div>
      <div className={style.card}>
        <div  className={style.image_card}></div>
        <div className={style.description_card}></div>
      </div>
      <div className={style.card}>
        <div  className={style.image_card}></div>
        <div className={style.description_card}></div>
      </div>
      <div className={style.card}>
        <div  className={style.image_card}></div>
        <div className={style.description_card}></div>
      </div>
      <div className={style.card}>
        <div  className={style.image_card}></div>
        <div className={style.description_card}></div>
      </div>
      <div className={style.card}>
        <div  className={style.image_card}></div>
        <div className={style.description_card}></div>
      </div>
      <div className={style.card}>
        <div  className={style.image_card}></div>
        <div className={style.description_card}></div>
      </div>
    </section>
  );
}

export default RecommendedProducts;

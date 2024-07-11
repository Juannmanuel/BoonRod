import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa los estilos de Swiper
import Sliders from "../Sliders/Sliders";
import style from "./Categories.module.css";

function Categories({ categories, handleSlideChange,  currentSlide }) {
  return (
    <Swiper
      className={style.Portada_main}
      direction="vertical"
      slidesPerView={1}
      spaceBetween={0}
      onSlideChange={(swiper) => handleSlideChange(swiper)}

    >
      {categories.map((item, index) => (
        <SwiperSlide className={style.container_slider} key={index}>
          <div className={style.container_cover}>

          </div>
          <Sliders item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Categories;

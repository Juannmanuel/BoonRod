import { useEffect, useRef } from "react";
import style from "./Covers.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa los estilos de Swiper
import Sliders from "../Sliders/Sliders";
import AnimatedTitle from "../Widges/AnimatedTitle/AnimatedTitle";
import { Autoplay } from "swiper/modules";

function Covers({ categories, handleSlideChange, currentSlide }) {
  return (
    <section>
      <Swiper
        className={style.categories_main}
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
      modules={[Autoplay]}
        speed={1000}
      >
        {categories.map((item, index) => (
          <SwiperSlide
            className={style.container_slider}
            key={`${currentSlide}-${index}`}
          >
            <div className={style.container_cover}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <div className={style.containerButton}>
                {/* <AnimatedTitle
                  title={item.buttonText}
                  currentSlide={currentSlide}
                  index={index}
                /> */}
              </div>
            </div>
            <Sliders images={item.images} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Covers;

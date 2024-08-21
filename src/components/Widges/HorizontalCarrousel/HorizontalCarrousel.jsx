import style from "./HorizontalCarrousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

function HorizontalCarrousel({ imagenes }) {
    console.log(imagenes);
    
  return (
    <Swiper
      className={style.carouselContainer}
      speed={500}
      loop={false}
      direction="horizontal"
      slidesPerView={1}
      spaceBetween={0}
      breakpoints={{
        768: {
          slidesPerView: 1,
        },
        920: {
          slidesPerView: 2,
        },
      }}
    >
      {imagenes.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <img
              src={item}
              className={style.image}
              alt={"imagen numero" + index}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default HorizontalCarrousel;

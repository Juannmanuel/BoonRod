import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Sliders.module.css";
import { Autoplay } from "swiper/modules";

function Sliders({ images }) {
  return (
    <Swiper
      className={style.sliders_main}
      direction="horizontal"
      speed={1000}
      loop={true}
      slidesPerView={1}
      spaceBetween={0}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      breakpoints={{
        920: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
        1366: {
          slidesPerView: 3,
        },
      }}
    >
      {images?.map((item, index) => (
        <SwiperSlide key={index}>
          <div className={style.slider}>
            <img src={item} alt="" className={style.image} />
            <div className={style.shadow}></div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Sliders;

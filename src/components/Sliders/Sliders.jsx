import { Swiper, SwiperSlide } from "swiper/react";
import style from "./Sliders.module.css";
import image from "../../assets/images/Ropa/Portadas/Portadas_Prendas/Portada_Prendas_3.jpg";
import { sections } from "../../data";
import { Autoplay } from "swiper/modules";

function Sliders({images}) {
  console.log(images);
  console.log(sections[0]);
  // let slider = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6];

  return (
    <Swiper
      className={style.sliders_main}
      direction="horizontal"
      loop={true}
      slidesPerView={1}
      spaceBetween={0}
      modules={Autoplay}
      breakpoints={{
        920: {
          slidesPerView: 2,
        },
        1040: {
          slidesPerView: 2,
        },
      }}
    >
      {images?.map((item, index) => (
        <SwiperSlide>
          <img src={item} alt="" style={{ width: "100%", height: "100%" }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Sliders;

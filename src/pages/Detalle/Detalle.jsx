import React, { useRef, useEffect } from "react";
import ExpandingSection from "../../components/ExpandingSection/ExpandingSection";
import style from "./Detalle.module.css";
import Sliders from "../../components/Sliders/Sliders.jsx";
import imagenModelo1 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_1.jpg";
import imagenModelo2 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_2.jpg";
import imagenModelo3 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_3.jpg";
import imagenModelo4 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_4.jpg";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Detalle() {
  let imagenes = [imagenModelo1, imagenModelo2, imagenModelo3, imagenModelo4];
  return (
    <section className={style.detail_main}>
        <Swiper
          className={style.carousel}
          direction="horizontal"
          speed={500}
          loop={true}
          slidesPerView={1}
          spaceBetween={0}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1366: {
              slidesPerView: 3,
            },
          }}
        >
          {imagenes?.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item} alt="" className={style.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      <ExpandingSection />
    </section>
  );
}

export default Detalle;

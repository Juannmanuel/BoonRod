import Navbar from "../../components/Navbar/Navbar";
import style from "./Detail.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from 'swiper/modules';
import imagenModelo1 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_1.jpg";
import imagenModelo2 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_2.jpg";
import imagenModelo3 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_3.jpg";
import imagenModelo4 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_4.jpg";

import imagenPrendas3 from "../../assets/images/Ropa/Producto_4_Pantalon/Prendas/Prenda_2.jpg";
import imagenPrendas2 from "../../assets/images/Ropa/Producto_4_Pantalon/Prendas/Prenda_1.jpg";
import imagenPrendas1 from "../../assets/images/Ropa/Producto_4_Pantalon/Prendas/Prenda_Principal.jpg";

function Detail({ sections, currentSlide }) {
  let imagenes = [
    imagenModelo1,
    imagenModelo2,
    imagenModelo3,
    imagenModelo4,
    imagenPrendas3,
    imagenPrendas2,
    imagenPrendas1,
  ];
  return (
    <section className={style.detai_main}>
      <Navbar sections={sections} currentSlide={currentSlide} />
      <div className={style.container_detail}>
        <Swiper className={style.carouselContainer}
          direction="horizontal"
          speed={500}
          loop={false}
          slidesPerView={1}
          spaceBetween={0}
          breakpoints={{
            720: {
              slidesPerView: 2,
            },
            920: {
              slidesPerView: 2,
            },
            1366: {
              slidesPerView: 2,
            },
          }}>
        {imagenes.map((item, index) => {
          return <SwiperSlide
          key={index}>
            <img src={item} className={style.image} alt={"imagen numero" + index} />
          </SwiperSlide>
        })}
        </Swiper>
        <section className={style.productCard}>
          <div className={style.card}></div>
        </section>
      </div>
    </section>
  );
}

export default Detail;

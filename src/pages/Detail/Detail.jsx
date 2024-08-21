import Navbar from "../../components/Navbar/Navbar";
import style from "./Detail.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import imagenModelo1 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_1.jpg";
import imagenModelo2 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_2.jpg";
import imagenModelo3 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_3.jpg";
import imagenModelo4 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_4.jpg";

import imagenPrendas3 from "../../assets/images/Ropa/Producto_4_Pantalon/Prendas/Prenda_2.jpg";
import imagenPrendas2 from "../../assets/images/Ropa/Producto_4_Pantalon/Prendas/Prenda_1.jpg";
import imagenPrendas1 from "../../assets/images/Ropa/Producto_4_Pantalon/Prendas/Prenda_Principal.jpg";
import DetailCard from "../../components/DetailCard/DetailCard";
import HorizontalCarrousel from "../../components/Widges/HorizontalCarrousel/HorizontalCarrousel";
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
  {/* <HorizontalCarrousel imagenes={imagenes} /> */}
  return (
    <section className={style.detai_main}>
      <div className={style.container_detail}>
        <div className={style.carrousel}>
          {imagenes.map((item, index) => <img src={item}/>)}
        </div>
        <div className={style.card}>
          <DetailCard />
        </div>
      </div>
    </section>
  );
}

export default Detail;

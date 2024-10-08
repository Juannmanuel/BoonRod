import ExpandingSection from "../../components/ExpandingSection/ExpandingSection";
import style from "./Detail.module.css";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import imagenModelo1 from "../../assets/images/Ropa/Producto_5_Remera/Modelo/Modelo_1.jpg";
import imagenModelo2 from "../../assets/images/Ropa/Producto_5_Remera/Modelo/Modelo_2.jpg";
import imagenModelo3 from "../../assets/images/Ropa/Producto_5_Remera/Modelo/Modelo_3.jpg";
import imagenModelo4 from "../../assets/images/Ropa/Producto_5_Remera/Modelo/Modelo_4.jpg";
import imagenPrenda1 from "../../assets/images/Ropa/Producto_5_Remera/Prendas/Prenda_1.jpg";
import imagenPrenda2 from "../../assets/images/Ropa/Producto_5_Remera/Prendas/Prenda_2.jpg";
import imagenPrenda3 from "../../assets/images/Ropa/Producto_5_Remera/Prendas/Prenda_Principal.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { products } from "../../data.js";

import logo from "../../assets/images/logo/logo_tipografia_boonrod_claro.png";
import LaNavbar from "../../components/LaNavbar/LaNavbar.jsx";
function Detail() {
  const { id } = useParams();
  useEffect(() => {}, [id]);
  const product = products.filter((item) => item.id == id);

  return (
    <section className={style.detail_main}>
      <LaNavbar />
      <Swiper
        className={style.carousel}
        direction="vertical"
        speed={500}
        loop={true}
        slidesPerView={1}
        spaceBetween={0}
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
        {product[0].images[0].models?.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item} alt="" className={style.image} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ExpandingSection
        name={product[0].name}
        price={product[0].price}
        description={product[0].description}
        sizes={product[0].sizes}
        isDiscounted={product[0].discount.isDiscounted}
        percentage={product[0].discount.percentage}

      />
    </section>
  );
}

export default Detail;

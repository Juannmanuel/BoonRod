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
function Detail() {
  const { id } = useParams();
  useEffect(() => {}, [id]);
  const product = products.filter((item) => item.id == id);
  let imagenes = [
    imagenModelo1,
    imagenModelo2,
    imagenModelo3,
    imagenModelo4,
    imagenPrenda1,
    ,
    imagenPrenda2,
    imagenPrenda3,
  ];
  return (
    <section className={style.detail_main}>
      <nav className={style.navbar}>
        <IoMenu className={style.menu_icon} />
        <Link to={"/"}>
          <img src={logo} alt="Logo de la tienda" className={style.logo} />
        </Link>

        <CiSearch className={style.menu_icon} />
      </nav>
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
      />
    </section>
  );
}

export default Detail;

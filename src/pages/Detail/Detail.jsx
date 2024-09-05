import ExpandingSection from "../../components/ExpandingSection/ExpandingSection";
import style from "./Detail.module.css";
import imagenModelo1 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_1.jpg";
import imagenModelo2 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_2.jpg";
import imagenModelo3 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_3.jpg";
import imagenModelo4 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import logo from "../../assets/images/logo/logo_tipografia_boonrod_claro.png"
function Detail() {
  let imagenes = [imagenModelo1, imagenModelo2, imagenModelo3, imagenModelo4];
  return (
    <section className={style.detail_main}>
      <nav className={style.navbar}>
        <IoMenu className={style.menu_icon} />
        <img src={logo} alt="Logo de la tienda" className={style.logo} />
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

export default Detail;

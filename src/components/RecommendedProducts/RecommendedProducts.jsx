import style from "./RecommendedProducts.module.css";
import imagenModelo1 from "../../assets/images/Ropa/Producto_1_Camisa/Modelo/Modelo_1.jpg";
import imagenModelo2 from "../../assets/images/Ropa/Producto_1_Camisa/Modelo/Modelo_2.jpg";
import imagenModelo3 from "../../assets/images/Ropa/Producto_1_Camisa/Modelo/Modelo_3.jpg";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

function RecommendedProducts() {
  const images = [
    imagenModelo1,
    imagenModelo2,
    imagenModelo3,
    imagenModelo1,
    imagenModelo2,
    imagenModelo3,
  ];
  const productos = [
    {
      id: 1,
      nombre: "Camisa Modelo 1",
      imagenes: [imagenModelo1, imagenModelo2, imagenModelo3],
      talles: ["S", "M", "L"],
      precio: 29.99,
    },
    {
      id: 2,
      nombre: "Camisa Modelo 2",
      imagenes: [imagenModelo1, imagenModelo2, imagenModelo3],
      talles: ["M", "L", "XL"],
      precio: 34.99,
    },
    {
      id: 3,
      nombre: "Camisa Modelo 3",
      imagenes: [imagenModelo1, imagenModelo2, imagenModelo3],
      talles: ["S", "M"],
      precio: 24.99,
    },
    {
      id: 3,
      nombre: "Camisa Modelo 3",
      imagenes: [imagenModelo1, imagenModelo2, imagenModelo3],
      talles: ["S", "M"],
      precio: 24.99,
    },
    {
      id: 3,
      nombre: "Camisa Modelo 3",
      imagenes: [imagenModelo1, imagenModelo2, imagenModelo3],
      talles: ["S", "M"],
      precio: 24.99,
    },
    {
      id: 3,
      nombre: "Camisa Modelo 3",
      imagenes: [imagenModelo1, imagenModelo2, imagenModelo3],
      talles: ["S", "M"],
      precio: 24.99,
    },
    {
      id: 3,
      nombre: "Camisa Modelo 3",
      imagenes: [imagenModelo1, imagenModelo2, imagenModelo3],
      talles: ["S", "M"],
      precio: 24.99,
    },
    {
      id: 3,
      nombre: "Camisa Modelo 3",
      imagenes: [imagenModelo1, imagenModelo2, imagenModelo3],
      talles: ["S", "M"],
      precio: 24.99,
    },
  ];
  return (
    <section className={style.RecommendedProducts_main}>
      {productos.map((item, index) => (
        <div className={style.card} key={index}>
          <div>
            {/*  */}
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              speed={500}
              loop={true}
              className={style.image_card}
              key={index}
            >
              {item.imagenes.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <img src={item} alt={`Modelo ${index + 1}`} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className={style.description_card}>
            <p>Descripción del producto {index + 1}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default RecommendedProducts;

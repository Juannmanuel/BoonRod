import React, { useState, useEffect } from 'react';
import ExpandingSection from "../../components/ExpandingSection/ExpandingSection";
import style from "./Detalle.module.css";
import imagenModelo1 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_1.jpg";
import imagenModelo2 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_2.jpg";
import imagenModelo3 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_3.jpg";
import imagenModelo4 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_4.jpg";

function Detalle() {
  const [isExpanded, setIsExpanded] = useState(false);
  const imagenes = [imagenModelo1, imagenModelo2, imagenModelo3, imagenModelo4];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsExpanded(true);
      } else {
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={style.detail_main}>
      <div className={`${style.carousel} ${isExpanded ? style.expanded : ''}`}>
        {imagenes.map((item, index) => (
          <img
            key={index}
            className={style.image}
            src={item}
            alt={`Modelo ${index + 1}`}
          />
        ))}
      </div>
      <div className={`${style.detail} ${isExpanded ? style.expanded : ''}`}>
        {/* Aquí va el contenido de la tarjeta */}
      </div>
      <ExpandingSection/>
    </section>
  );
}

export default Detalle;

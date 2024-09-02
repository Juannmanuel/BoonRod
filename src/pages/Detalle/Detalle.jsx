import { useState, useEffect, useRef } from "react";
import style from "./Detalle.module.css";
import imagenModelo1 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_1.jpg";
import imagenModelo2 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_2.jpg";
import imagenModelo3 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_3.jpg";
import imagenModelo4 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_4.jpg";

function Detalle() {
  const [scrollDirection, setScrollDirection] = useState(null);
  const lastScrollTop = useRef(0);
  const productInfoRef = useRef(null);

  let imagenes = [imagenModelo1, imagenModelo2, imagenModelo3];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollTop.current = currentScrollTop;

      // Para ver el comportamiento en consola
      console.log(`Scroll Direction: ${scrollDirection}`);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollDirection]);

  return (
    <section ref={productInfoRef} className={style.detalle_main}>
      <div className={style.carousel}>
        {imagenes.map((item, index) => (
          <img key={index} className={style.image} src={item} alt={`Modelo ${index + 1}`} />
        ))}
      </div>
      <div
        className={`${style.product_info} ${
          scrollDirection === 'down' ? style.product_info_expanded : ""
        }`}
      >
        {/* Aquí va el contenido de la carta del detalle */}
        <h1 style={{border: "1px solid black"}}>Hola</h1>
        <h1 style={{border: "1px solid black"}}>Hola</h1>
        <h1 style={{border: "1px solid black"}}>Hola</h1>
        <h1 style={{border: "1px solid black"}}>Hola</h1>
        <h1 style={{border: "1px solid black"}}>Hola</h1>
        <h1 style={{border: "1px solid black"}}>Hola</h1>
        <h1 style={{border: "1px solid black"}}>Hola</h1>
        <h1 style={{border: "1px solid black"}}>Hola</h1>
        <h1 style={{border: "1px solid black"}}>Hola</h1>
        <h1 style={{border: "1px solid black"}}>Hola</h1>
        <h1 style={{border: "1px solid black"}}>Hola</h1>
        <h1 style={{border: "1px solid black"}}>Hola</h1>
        <h1 style={{border: "1px solid black"}}>Hola</h1>
        <h1 style={{border: "1px solid black"}}>Hola</h1>
        <h1 style={{border: "1px solid black"}}>Hola</h1>
      </div>
    </section>
  );
}

export default Detalle;

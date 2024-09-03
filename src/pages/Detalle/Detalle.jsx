import ExpandingSection from "../../components/ExpandingSection/ExpandingSection"
import style from "./Detalle.module.css"
import imagenModelo1 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_1.jpg";
import imagenModelo2 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_2.jpg";
import imagenModelo3 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_3.jpg";
import imagenModelo4 from "../../assets/images/Ropa/Producto_4_Pantalon/Modelo/Modelo_4.jpg";

function Detalle(){
  const imagenes = [imagenModelo1, imagenModelo2, imagenModelo3, imagenModelo4];

  return (
    <section className={style.detail_main}>
      <div className={style.carousel}>
        {imagenes.map((item, index) => (
          <img
            key={index}
            className={style.image}
            src={item}
            alt={`Modelo ${index + 1}`}
          />
        ))}
      </div>
      <ExpandingSection/>
    </section>
  )
}


export default Detalle
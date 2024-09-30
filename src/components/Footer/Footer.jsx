import { Link } from "react-router-dom";
import SocialLinks from "../SocialLinks/SocialLinks";
import style from "./Footer.module.css";
import { PiTrademarkRegisteredLight } from "react-icons/pi";

function Footer() {
  return (
    <footer className={style.footer_main}>
      <h2 className={style.title}>
        BOONROD <PiTrademarkRegisteredLight />
      </h2>
      <SocialLinks />
      
      <div className={style.contact}>
        <h3>Contacto y Atención al Cliente</h3>
        <p>
          Para consultas, puedes llamarnos al (261) 123-4567 o enviarnos un correo a atencion@boonrod.com. Nuestro horario de atención es de lunes a viernes, de 9:00 a 18:00.
        </p>
        <p>
          También puedes visitar nuestra tienda en Aristides Villanueva 346, Mendoza, Argentina.
        </p>
      </div>

      <div className={style.policies}>
        <h3>Políticas de Devolución</h3>
        <p>
          Aceptamos devoluciones dentro de los 30 días posteriores a la compra. Para más información, consulta nuestras políticas de devolución en la sección de ayuda de nuestro sitio web.
        </p>
      </div>

      <Link
        style={{ color: "black", textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer"
        to={"https://juan-manuel.vercel.app"}
      >
        <div className={style.pageRequest}>Quiero mi página</div>
      </Link>
    </footer>
  );
}

export default Footer;

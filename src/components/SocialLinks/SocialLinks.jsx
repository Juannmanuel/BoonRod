import style from "./SocialLinks.module.css";
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
function SocialLinks({color = "white"}) {
  return (
    <div className={style.socialLinks_main}>
      <p className={style.title} style={{color: `${color}`}}>
        Síguenos en nuestras redes sociales:
      </p>
      <div className={style.socialMedia}>
        {/* Aquí agregarías los íconos o enlaces a las redes sociales */}
        <a
          href="https://www.facebook.com/boonrod.mza/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare className={style.icon} style={{color: `${color}`}} />
        </a>
        <a
          href="https://www.instagram.com/boonrod.mza/?hl=es-la"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className={style.icon} style={{color: `${color}`}} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className={style.icon} style={{color: `${color}`}} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className={style.icon} style={{color: `${color}`}} />
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;

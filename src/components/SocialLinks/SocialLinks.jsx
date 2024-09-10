import style from "./SocialLinks.module.css";
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
function SocialLinks() {
  return (
    <div className={style.socialLinks_main}>
      <p className={style.title}>
        Síguenos en nuestras redes sociales:
      </p>
      <div className={style.socialMedia}>
        {/* Aquí agregarías los íconos o enlaces a las redes sociales */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare className={style.icon} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className={style.icon} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className={style.icon} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className={style.icon} />
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;

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
      <Link
        style={{ color: "black", textDecoration: "none" }}
        target="_blank"
        rel="noopener noreferrer"
        to={"https://juan-manuel.vercel.app"}
      >
        <div className={style.contact}>Quiero mi página</div>
      </Link>
    </footer>
  );
}

export default Footer;

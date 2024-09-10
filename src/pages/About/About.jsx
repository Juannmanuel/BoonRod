import React from "react";
import style from "./About.module.css";

import SocialLinks from "../../components/SocialLinks/SocialLinks";

const About = () => {
  return (
    <div className={style.aboutContainer}>
      <h1 className={style.title}>¿Quiénes somos?</h1>
      <p className={style.description}>
        Somos una empresa dedicada a la venta de indumentaria masculina,
        enfocada en ofrecer productos de alta calidad que reflejan un estilo
        urbano y moderno.
      </p>

      <button
        className={style.mapButton}
        onClick={() => window.open("https://goo.gl/maps/xyz123", "_blank")}
      >
        Ver ubicación en Google Maps
      </button>
      <SocialLinks />
    </div>
  );
};

export default About;

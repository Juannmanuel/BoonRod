import React from "react";
import style from "./About.module.css";

import SocialLinks from "../../components/SocialLinks/SocialLinks";
import CustomerSupport from "../../components/CustomerSupport/CustomerSupport";

const About = () => {
  const latitude = "-32.89259531361538";
  const longitude = "-68.85343209005165";
  return (
    <div className={style.aboutContainer}>
      <div className={style.wave_container}></div>

      <h1 className={style.title}>¿Quiénes somos?</h1>
      <p className={style.description}>
        Somos una empresa dedicada a la venta de indumentaria masculina,
        enfocada en ofrecer productos de alta calidad que reflejan un estilo
        urbano y moderno.
        Somos una empresa dedicada a la venta de indumentaria masculina,
        enfocada en ofrecer productos de alta calidad que reflejan un estilo
        urbano y moderno.
        Somos una empresa dedicada a la venta de indumentaria masculina,
        enfocada en ofrecer productos de alta calidad que reflejan un estilo
        urbano y moderno.
      </p>


      <button
        className={style.mapButton}
        onClick={() =>
          window.open(
            `https://www.google.com/maps?q=${latitude},${longitude}`,
            "_blank"
          )
        }
      >
        Ver ubicación en Google Maps
      </button>
      <SocialLinks />
    </div>
  );
};

export default About;

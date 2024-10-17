import React from "react";
import style from "./About.module.css";
import imageLocal from "../../assets/images/logo/local_image.jpeg";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import CustomerSupport from "../../components/CustomerSupport/CustomerSupport";

const About = () => {
  const latitude = "-32.89259531361538";
  const longitude = "-68.85343209005165";
  return (
    <div className={style.aboutContainer}>
      <div className={style.wave_container}></div>
      <div className={style.container_content}>
        <h1 className={style.title}>¿Quiénes somos?</h1>
        <p className={style.description}>
          En <strong>Boonrod</strong>, nos especializamos en ropa urbana
          masculina de alta calidad, diseñada para hombres que buscan un estilo
          moderno y auténtico. Nuestra marca tiene raíces en{" "}
          <strong>Mendoza, Argentina</strong>, una provincia vibrante donde la
          moda urbana se encuentra con la cultura local. Actualmente, contamos
          con dos sucursales en Mendoza, ofreciendo a nuestros clientes prendas
          que combinan confort y estilo, pensadas para el día a día en la
          ciudad.
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
      <div className={style.wave_container_invertid}></div>
    </div>
  );
};

export default About;

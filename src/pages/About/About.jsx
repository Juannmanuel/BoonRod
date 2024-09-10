import React from "react";
import styles from "./About.module.css";
import {
  FaFacebookSquare,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>¿Quiénes somos?</h1>
      <p className={styles.description}>
        Somos una empresa dedicada a la venta de indumentaria masculina,
        enfocada en ofrecer productos de alta calidad que reflejan un estilo
        urbano y moderno.
      </p>
      <div className={styles.mapContainer}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434508511!2d144.95592841531558!3d-37.817209979751735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b1e43f80ee0!2sGoogle%20Australia!5e0!3m2!1sen!2sus!4v1614536649636!5m2!1sen!2sus"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
      <button
        className={styles.mapButton}
        onClick={() => window.open("https://goo.gl/maps/xyz123", "_blank")}
      >
        Ver ubicación en Google Maps
      </button>
      <p>Síguenos en nuestras redes sociales:</p>
      <div className={styles.socialMedia}>
        {/* Aquí agregarías los íconos o enlaces a las redes sociales */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare className={styles.icon} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className={styles.icon} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className={styles.icon} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className={styles.icon} />
        </a>
      </div>
    </div>
  );
};

export default About;

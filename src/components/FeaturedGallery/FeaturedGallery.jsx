import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import logo from "../../assets/images/logo/logo_boonrod_oscuro.png";
import style from "./FeaturedGallery.module.css";
import FeatureBlock from "../FeatureBlock/FeatureBlock";

function FeaturedGallery({ images, section, buttonText, description }) {
  return (
    <div className={style.home_container} id={section.section}>
      <div
        className={style.header}
        style={{ backgroundImage: `url(${images[0]})` }}
      >
        <div className={style.container_logo}>
          <img className={style.logo} src={logo} alt="boonrod" />
        </div>
        <div className={style.card}>
          <h2 className={style.title}>{section}</h2>

          <p className={style.description}>{description}</p>
          <Link
            to={`/catalogo`}
            style={{ textDecoration: "none" }}
            className={style.btnAction}
          >
            {buttonText}
          </Link>
        </div>
      </div>
      <div className={style.twoColumnsContainer}>
        <img src={images[1]} alt="" />
        {/* <IoAddCircleOutline className={style.icon} /> */}
        <img src={images[2]} alt="" />
        {/* <IoAddCircleOutline className={style.icon} /> */}
      </div>
      <div className={style.singleRowContainer}>
        <img src={images[3]} alt="" />
        {/* <IoAddCircleOutline className={style.icon} /> */}
      </div>
      <div className={style.twoColumnsContainer}>
        <img src={images[1]} alt="" />
        {/* <IoAddCircleOutline className={style.icon} /> */}
        <img src={images[2]} alt="" />
        {/* <IoAddCircleOutline className={style.icon} /> */}
      </div>
    </div>
  );
}

export default FeaturedGallery;

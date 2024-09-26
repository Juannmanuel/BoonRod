import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoAddCircleOutline } from "react-icons/io5";
import logo from "../../assets/images/logo/logo_boonrod_oscuro.png";
import style from "./FeaturedGallery.module.css";
import FeatureBlock from "../FeatureBlock/FeatureBlock";
import LedBanner from "../LedBanner/LedBanner";
import { products } from "../../data";

function FeaturedGallery({ sections }) {
  console.log(sections, "fea");

  return (
    <div className={style.home_container} id={sections?.id}>
      <div
        className={style.header}
        style={{ backgroundImage: `url(${sections?.images[0]})` }}
      >
        <div className={style.card}>
          <h2 className={style.title}>{sections?.title}</h2>

          <p className={style.description}>{sections?.description}</p>
          <Link
            to={`/catalogo`}
            style={{ textDecoration: "none" }}
            className={style.btnAction}
          >
            {sections?.buttonText}
          </Link>
        </div>
      </div>
      <div className={style.twoColumnsContainer}>
        <img src={sections.images[1]} alt="" />
        <img src={sections.images[2]} alt="" />
      </div>
      <div className={style.singleRowContainer}>
        <img src={sections.images[3]} alt="" />
      </div>
    </div>
  );
}

export default FeaturedGallery;

import { Link } from "react-router-dom";

import style from "./FeaturedGallery.module.css";

function FeaturedGallery({ images, section, buttonText, description }) {


  return (
    <div className={style.home_container}>
      <div
        className={style.header}
        style={{ backgroundImage: `url(${images[0]})` }}
      >
        <div className={style.card}>
          <h2 className={style.title}>{section}</h2>

          <p className={style.description}>{description}</p>
         <button className={style.btnAction}> <Link style={{color: "white", textDecoration: "none"}} to={"/asd"}>{buttonText}</Link></button>
        </div>
      </div>
      <div className={style.twoColumnsContainer}>
        <img src={images[1]} alt="" />
        <img src={images[2]} alt="" />
      </div>
      <div className={style.singleRowContainer}>
        <img src={images[3]} alt="" />
      </div>
      <div className={style.twoColumnsContainer}>
        <img src={images[4]} alt="" />
        <img src={images[5]} alt="" />
      </div>
    </div>
  );
}

export default FeaturedGallery;

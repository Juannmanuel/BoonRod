import style from "./FeaturedGallery.module.css";

function FeaturedGallery({ images, section, buttonText, description }) {
  // const sections = [

  //   {
  //     section: "NEW COLLECTION",
  //     buttonText: "Explorar",
  //     images: [
  //       imgC1,
  //       imgC2,
  //       imgC3,
  //       imgC4,
  //       imgC5,
  //       imgC6,
  //     ],
  //     title: "Nuevas colecciones disponibles.",
  //     description: "Explora nuestras últimas colecciones y mantente al día con las tendencias urbanas más recientes."
  //   }
  // ]

  return (
    <div className={style.home_container}>
      <div
        className={style.header}
        style={{ backgroundImage: `url(${images[0]})` }}
      >
        <div className={style.card}>
          <h2 className={style.title}>{section}</h2>
          <p className={style.description}>{description}</p>
          <button className={style.btnAction}>{buttonText}</button>
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

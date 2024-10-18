import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import style from "./FeaturedGallery.module.css";
import { useInView } from "react-intersection-observer";

function FeaturedGallery({ sections }) {
  const { ref, inView } = useInView();
  console.log(inView);

  return (
    <div className={style.galleryContainer} id={sections?.id}>
      <div className={style.header}>
        <img src={sections?.images[3]} alt="Image" />
        <div
          ref={ref}
          className={`${style.card} ${inView ? style.inamtionCard : ""}`}
        >
          <h2 className={style.title}>{sections?.title}</h2>
          <p className={style.description}>{sections?.description}</p>
        </div>
      </div>
      <div>
        <div className={style.twoColumns}>
          {sections.images.slice(1, 3).map((img, index) => (
            <div key={index} className={style.imageContainer}>
              <img src={img} alt={`Image ${index + 1}`} />
              <IoAddCircleOutline className={style.icon} />
            </div>
          ))}
        </div>
        <Link to={`/catalogo`} className={style.btnAction}>
          {sections?.buttonText.toUpperCase()}
        </Link>
        <div className={style.singleRow}>
          <div className={style.imageContainer}>
            <img src={sections.images[0]} alt="Image 0" />
            <IoAddCircleOutline className={style.icon} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedGallery;

import style from "./CollectionBanner.module.css";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

function CollectionBanner({ sections }) {
  const { ref, inView } = useInView();
  console.log(inView);

  return (
    <section className={style.main}>
      {/*Primera imagen junto con la carta dende está el titulo*/}
      <div className={style.header}>
        <img className={`${style.image} ${inView ? style.animationImage : ""}`} src={sections?.images[3]} alt="Image" />
        <div
          ref={ref}
          className={`${style.card} ${inView ? style.inamtionCard : ""}`}
        >
          <h2 className={style.title}>{sections?.title}</h2>
          <p className={style.description}>{sections?.description}</p>
          <button className={`${style.button} ${inView ? style.inamtionButton : ""}`}>
          <Link style={{textDecoration: "none", color: "black"}} to={`/catalogo`}>{sections?.buttonText.toUpperCase()}</Link>
        </button> 
        </div>
      </div>
    </section>
  );
}

export default CollectionBanner;

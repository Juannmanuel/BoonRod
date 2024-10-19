import Card from "../Card/Card";
import style from "./FeatureBlock.module.css";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

function FeatureBlock({ section, title, description, sectionProducs }) {
  const { ref, inView } = useInView();
  console.log(inView);

  return (
    <section ref={ref} className={`${style.featureBlock_main} ${inView ? style.featureBlock_main_animated: ""}`} data-section={section}>
      {/* <CircleAnimation/> */}
      <div className={style.container}>
        {/* <div className={style.heading}>
          <h2 className={`${style.title} ${inView ? style.titleAnimated : ""}`}>{title}</h2>
        </div> */}
        <div className={`${style.carousel} ${inView ? style.carrouselAnimated : ""}`}>
          {sectionProducs.slice(0, 6).map((item, index) => (
            <Link
              key={index}
              to={`/detalle/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <div className={style.container_card}>
                <Card
                  key={index}
                  title={item.name}
                  price={item.price}
                  description={item.description}
                  images={item.images[0]}
                  isDiscounted={item.discount.isDiscounted}
                  percentage={item.discount.percentage}
                />
              </div>
            </Link>
          ))}
          <div className={style.container_card_link}>
            <span className={style.title}>Ver más</span>
            <Link to={"/catalogo"}>
              <IoAddCircleOutline className={style.icon} />
            </Link>
          </div>
        </div>
        <Link
          style={{ color: "white", textDecoration: "none" }}
          to={"/catalogo"}
        >
          <div className={style.btnAction}>Ver catalogo</div>
        </Link>
      </div>
    </section>
  );
}

export default FeatureBlock;

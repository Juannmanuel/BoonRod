import Card from "../Card/Card";
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts";
import style from "./FeatureBlock.module.css";
import imageHotSale from "../../assets/images/Tarjetas/hotSale.jpg";
import logo from "../../assets/images/logo/logo_boonrod_oscuro.png";
import { Link } from "react-router-dom";
import { IoAddCircleOutline } from "react-icons/io5";

function FeatureBlock({ section, title, description, sectionProducs }) {
  return (
    <section className={style.featureBlock_main} data-section={section}>
      <div className={style.wave_container}></div>
      <div className={style.container}>
        <div className={style.heading}>
          <h2>{title}</h2>
          <div className={style.description}>{description}</div>
        </div>
        <div className={style.carousel}>
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
                />
              </div>
            </Link>
          ))}
          <div className={style.container_card_link}>
            <span className={style.title}>Ver más</span>
            <Link  to={"/catalogo"}>
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
      {/* <img className={style.img_hotSale} src={imageHotSale} alt="20%OFF" /> */}
    </section>
  );
}

export default FeatureBlock;

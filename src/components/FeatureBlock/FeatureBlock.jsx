import Card from "../Card/Card";
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts";
import style from "./FeatureBlock.module.css";
import image from "../../assets/images/imagesProductsAndModels/product-2/models/model-1.jpg";
import { products, sections } from "../../data";
import { Link } from "react-router-dom";

function FeatureBlock({ section, title, description, sectionProducs, id }) {
  console.log(id);

  return (
    <section className={style.featureBlock_main} data-section={section}>
      <div className={style.container}>
        <div className={style.heading}>{title}</div>
        <div className={style.description}>{description}</div>
        <div className={style.carousel}>
          {sectionProducs.map((item, index) => (
            <Link
              to={`/detalle/${item.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                key={index}
                title={item.name}
                price={item.price}
                description={item.description}
                images={item.images[0]}
              />
            </Link>
          ))}
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

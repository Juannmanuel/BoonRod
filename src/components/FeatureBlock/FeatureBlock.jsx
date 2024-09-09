import Card from "../Card/Card";
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts";
import style from "./FeatureBlock.module.css";
import image from "../../assets/images/imagesProductsAndModels/product-2/models/model-1.jpg";
import { products, sections } from "../../data";

function FeatureBlock({ section, title, description, sectionProducs }) {

  
  return (
    <section className={style.featureBlock_main} data-section={section}>
      <div className={style.container}>
        <div className={style.heading}>{title}</div>
        <div className={style.description}>{description}</div>
        <div className={style.carousel}>
          {sectionProducs.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              description={item.description}
              images={item.images[0]}
            />
          ))}
        </div>
        <div className={style.btnAction}>Ver catalogo</div>
      </div>
    </section>
  );
}

export default FeatureBlock;

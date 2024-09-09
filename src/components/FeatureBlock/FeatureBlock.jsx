import Card from "../Card/Card";
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts";
import style from "./FeatureBlock.module.css";
import image from "../../assets/images/imagesProductsAndModels/product-2/models/model-1.jpg";

function FeatureBlock({ section }) {
  const itemsRopa = [
    { images: image, title: "CAMISETA BOXY FIT", price: "1500" },
    { images:  image, title: "CAMISETA BOXY FIT", price: "1500" },
    { images:  image, title: "CAMISETA BOXY FIT", price: "1500" },
    { images:  image, title: "CAMISETA BOXY FIT", price: "1500" },
    { images:  image, title: "CAMISETA BOXY FIT", price: "1500" },
  ];
  return (
    <section className={style.featureBlock_main} data-section={section}>
      <div className={style.container}>
        <div className={style.heading}>Colección Urbana</div>
        <div className={style.description}>
          Vístete con las mejores tendencias de la moda urbana, inspiradas en el
          movimiento y la libertad de la vida moderna.
        </div>
        <div className={style.carousel}>
          {itemsRopa.map((item, index) => (
            <Card images={item.images} title={item.title}price={item.price} />
          ))}
        </div>
        <div className={style.btnAction}>
            Ver catalogo
        </div>
      </div>
    </section>
  );
}

export default FeatureBlock;

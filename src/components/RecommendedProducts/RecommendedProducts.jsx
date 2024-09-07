import style from "./RecommendedProducts.module.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { products } from "../../data.js"

function RecommendedProducts({ section }) {
  let tarjetas = [
    1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12,
    13,
  ];
  console.log(products[0].images,"recomendado")

  return (
    <section
      className={
        section == "catalogo" ||  section == "/"
          ? style.RecommendedProducts_main_white_navbar
          : style.RecommendedProducts_main
      }
    >
      {products?.map((item, index) => (
        <Link style={{textDecoration: "none"}} key={index} to={`/detalle/${item.id}`}>
          <Card section={section} images={item.images[0]} title={item.name} price={item.price} />
        </Link>
      ))}
    </section>
  );
}

export default RecommendedProducts;

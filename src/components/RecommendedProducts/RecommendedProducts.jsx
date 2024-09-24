import style from "./RecommendedProducts.module.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { products } from "../../data.js";

function RecommendedProducts({ section }) {


  return (
    <section
      className={
        section == "catalogo" || section == "/"
          ? style.RecommendedProducts_main_white_navbar
          : style.RecommendedProducts_main
      }
    >
      {products?.map((item, index) => (
        <Link
          style={{ textDecoration: "none" }}
          key={index}
          to={`/detalle/${item.id}`}
        >
            <Card
              section={section}
              images={item.images[0]}
              title={item.name}
              price={item.price}
              percentage={item.discount.percentage}
              isDiscounted={item.discount.isDiscounted}
            />
        </Link>
      ))}
    </section>
  );
}

export default RecommendedProducts;

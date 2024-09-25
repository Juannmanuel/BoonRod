import style from "./RecommendedProducts.module.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { products } from "../../data.js";
import ProductPrice from "../ProductPrice/ProductPrice.jsx";

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
          <div className={style.item}>
            <img src={item.images[0].models[0]} alt="" />
            {item.discount.isDiscounted ? (
              <div className={style.flag_discount}>
                <span className={style.text_discount}>
                  {item.discount.percentage}%OFF
                </span>
              </div>
            ) : null}
            <div className={style.description}>
              <span>{item.name}</span>
              <ProductPrice
                price={item.price}
                isDiscounted={item.discount.isDiscounted}
                percentage={item.discount.percentage}
                fontSize={.85}
              />
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}

export default RecommendedProducts;

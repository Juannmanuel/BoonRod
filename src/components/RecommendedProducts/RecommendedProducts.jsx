import style from "./RecommendedProducts.module.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

function RecommendedProducts({ section }) {
  let tarjetas = [
    1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12,
    13,
  ];

  return (
    <section
      className={
        section == "catalogo"
          ? style.RecommendedProducts_main_white_navbar
          : style.RecommendedProducts_main
      }
    >
      {tarjetas.map((item, index) => (
        <Link style={{textDecoration: "none"}} key={index} to={"/detalle"}>
          <Card />
        </Link>
      ))}
    </section>
  );
}

export default RecommendedProducts;

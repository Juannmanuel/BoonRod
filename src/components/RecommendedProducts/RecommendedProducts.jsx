import style from "./RecommendedProducts.module.css";
import Card from "../Card/Card";

function RecommendedProducts({section}) {

  return (
    <section className={section == "catalogo" ? style.RecommendedProducts_main_white_navbar : style.RecommendedProducts_main}>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </section>
  );
}

export default RecommendedProducts;

import RecommendedProducts from "../../components/RecommendedProducts/RecommendedProducts";
import style from "./CatalogGrid.module.css";

function CatalogGrid() {
  return (
    <section className={style.CatalogGrid_main}>
      <div className={style.primeraImagen}></div>
      <RecommendedProducts/>
    </section>
  );
}

export default CatalogGrid;

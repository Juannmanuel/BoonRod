import style from "./Catalogo.module.css";
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import logoImage from "../../assets/images/logo/logo_boonrod_claro.png";
import Footer from "../Footer/Footer";

function Catalogo() {
  const categorias = [
    "pantalones cortos",
    "remeras",
    "pantalones largos",
    "zapatillas",
    "accesorios",
    "camperas",
  ];
  return (
    <section className={style.catalogo_main}>
      <nav className={style.navbar}>
        <section className={style.navbar_menu}>
          <IoMenu className={style.menu_icon} />
          <img src={logoImage} alt="Logo de la tienda" className={style.logo} />
          <CiSearch className={style.search_icon} />
        </section>
        <section className={style.navbar_options}>
          {categorias.map((item, index) => (
            <div key={index} className={style.category_item}>
              <span>{item}</span>
            </div>
          ))}
        </section>
      </nav>
      {/*Catalogo Grid*/}
      <section className={style.catalogo}>
          <div className={style.item}></div>
          <div className={style.item}></div>
          <div className={style.item}></div>
          <div className={style.item}></div>
          <div className={style.item}></div>
          <div className={style.item}></div>
      </section>
      <Footer/>
    </section>
  );
}

export default Catalogo;

import logo from "../../assets/images/logo/logo_boonrod_oscuro.png";
import style from "./Louder.module.css";

function Louder() {
  return (
    <div className={style.loader}>
      <div className={style.circle}>
        <div className={style.dot}></div>
        <div className={style.outline}></div>
      </div>
      <div className={style.circle}>
        <div className={style.dot}></div>
        <div className={style.outline}></div>
      </div>
      <div className={style.circle}>
        <div className={style.dot}></div>
        <div className={style.outline}></div>
      </div>
      <div className={style.circle}>
        <div className={style.dot}></div>
        <div className={style.outline}></div>
      </div>
    </div>
  );
}

export default Louder;

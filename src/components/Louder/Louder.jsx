import NavbarMovile from "../NavbarMovile/NavbarMovile";
import style from "./Louder.module.css";

function Louder() {
  return (
    <div className={style.loaderAnimation}>
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
    </div>
  );
}

export default Louder;

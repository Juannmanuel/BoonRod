
import CircleAnimation from "../CircleAnimation/CircleAnimation";
import Louder from "../Louder/Louder";
import style from "./LoadingScreen.module.css";
import logo from "../../assets/images/logo/logo_boonrod_oscuro.png"

function LoadingScreen() {
  return (
    <section className={style.loadingScreen_main}>
      <CircleAnimation />
      <div className={style.container_content}>
        <img src={logo} alt="image" />
        <Louder />
      </div>
    </section>
  );
}

export default LoadingScreen;

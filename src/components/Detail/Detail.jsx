import Navbar from "../Navbar/Navbar";
import style from "./Detail.module.css";

function Detail({ sections, currentSlide }) {
  return (
    <section className={style.detai_main}>
      <Navbar sections={sections} currentSlide={currentSlide} />
      <div className={style.container_detail}>
        <section className={style.item}></section>
        <section className={style.item}></section>
      </div>
    </section>
  );
}

export default Detail;

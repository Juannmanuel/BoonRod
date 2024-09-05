import style from "./Home.module.css";
import Covers from "../../components/Covers/Covers";
import Navbar from "../../components/Navbar/Navbar";

function Home({ sections, handleSlideChange, currentSlide }) {
  return (
    <section className={style.home_main}>
      <Navbar
        sections={sections}
        handleSlideChange={handleSlideChange}
        currentSlide={currentSlide}
      />
      <Covers
        sections={sections}
        handleSlideChange={handleSlideChange}
        currentSlide={currentSlide}
      />
    </section>
  );
}

export default Home;

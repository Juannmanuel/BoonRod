import style from "./Home.module.css";
import Covers from "../../components/Covers/Covers";

function Home({ sections, handleSlideChange, currentSlide }) {
  return (
    <section>
      <Covers
        sections={sections}
        handleSlideChange={handleSlideChange}
        currentSlide={currentSlide}
      />
    </section>
  );
}

export default Home;

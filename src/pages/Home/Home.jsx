import style from "./Home.module.css";
import Covers from "../../components/Covers/Covers";
import Navbar from "../../components/Navbar/Navbar";
import Louder from "../../components/Louder/Louder";
import { useState } from "react";

function Home({ sections, handleSlideChange, currentSlide }) {
  const [isLouding, setIsLouding] = useState(true);
  setTimeout(() => {
    setIsLouding(false);
  }, 4000);
  return (
    <section className={style.home_main}>
      <Navbar
        sections={sections}
        handleSlideChange={handleSlideChange}
        currentSlide={currentSlide}
      />
      {isLouding ? (
        <Louder />
      ) : (
        <Covers
          sections={sections}
          handleSlideChange={handleSlideChange}
          currentSlide={currentSlide}
        />
      )}
    </section>
  );
}

export default Home;

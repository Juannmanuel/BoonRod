import React, { useState } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Covers from "./components/Covers/Covers";
import { sections } from "./data";
import "./App.css";

function App() {
  let categories = ["Nosotros", "New", "Sale", "Footer"];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    const slideName = categories[swiper.activeIndex];
    console.log(`Estás en el slider "${slideName}"`);
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <div className="App">
      <Navbar sections={categories} currentSlide={currentSlide} />
      <Covers
        categories={sections}
        handleSlideChange={handleSlideChange}
        currentSlide={currentSlide}
      />
    </div>
  );
}

export default App;

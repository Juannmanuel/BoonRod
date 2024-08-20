import React, { useState } from "react";
import Navbar from "../src/components/Navbar/Navbar";
import Covers from "./components/Covers/Covers";
import Detail from "./pages/Detail/Detail";
import { sections } from "./data"; // Importamos los datos de las secciones desde un archivo de datos
import "./App.css";
import Home from "./pages/Home/Home";

function App() {

  // Estado para manejar el slide actual
  const [currentSlide, setCurrentSlide] = useState(0);

  // Función para manejar el cambio de slide
  const handleSlideChange = (swiper) => {
    const slideName = sections[swiper.activeIndex].section;
    console.log(`Estás en el slider "${slideName}"`);
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <div className="App">
      {/* Pasamos las secciones y el slide actual al componente Navbar */}
      <Navbar sections={sections} currentSlide={currentSlide} />
      {/* Pasamos las categorías, la función de cambio de slide y el slide actual al componente Covers */}
      {/* <Covers
        sections={sections}
        handleSlideChange={handleSlideChange}
        currentSlide={currentSlide}
      /> */}
      {/* <Detail sections={sections} currentSlide={currentSlide}/> */}
      <Home sections={sections} handleSlideChange={handleSlideChange} currentSlide={currentSlide}/>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { Route, Routes } from "react-router";
import Navbar from "../src/components/Navbar/Navbar";
import Detail from "./pages/Detail/Detail";
import { sections } from "./data"; // Importamos los datos de las secciones desde un archivo de datos
import "./App.css";
import Home from "./pages/Home/Home";
import { useLocation } from "react-router-dom";
import TarjetaDetalle from "./components/TarjetaDetalle/TarjetaDetalle";
import Catalogo from "./components/Catalogo/Catalogo";
import Louder from "./components/Louder/Louder";


function App() {
  // Estado para manejar el slide actual
  const [currentSlide, setCurrentSlide] = useState(0);
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath, "app");

  // Función para manejar el cambio de slide
  const handleSlideChange = (swiper) => {
    const slideName = sections[swiper.activeIndex].section;
    console.log(`Estás en el slider "${slideName}"`);
    setCurrentSlide(swiper.activeIndex);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              sections={sections}
              handleSlideChange={handleSlideChange}
              currentSlide={currentSlide}
            />
          }
        />
        <Route
          path="/catalogo"
          element={<Catalogo sections={sections} currentSlide={currentSlide} />}
        />
        <Route path="/detalle/:id" element={<Detail />} />
        <Route path="/louder" element={<Louder />} />
      </Routes>
    </div>
  );
}

export default App;

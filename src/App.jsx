import React, { useState, useRef, useEffect } from "react";
import { Route, Routes } from "react-router";
import Detail from "./pages/Detail/Detail";
import { products } from "./data";
import "./App.css";
import Home from "./pages/Home/Home";
import { useLocation } from "react-router-dom";
import Catalogo from "./components/Catalogo/Catalogo";
import Louder from "./components/Louder/Louder";

function App() {
  // Estado para manejar el slide actual
  const [currentSlide, setCurrentSlide] = useState(0);
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath, "app");
  const sectionRef = useRef(null);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [currentSection, setCurrentSection] = useState("NEW COLLECTION"); // Nueva variable para la sección actual

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = sectionRef.current.scrollTop; // Obtener la posición actual del scroll

      if (currentScrollTop < lastScrollTop) {
        setIsScrollingUp(true); // Scroll hacia arriba
      } else {
        setIsScrollingUp(false); // Scroll hacia abajo
      }

      // Actualizar la posición del scroll anterior
      setLastScrollTop(currentScrollTop);

      // Detectar la sección actual en pantalla
      const sectionsRef = document.querySelectorAll("section"); // Seleccionamos todas las secciones
      let foundSection = "NEW COLLECTION"; // Valor predeterminado
      sectionsRef.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          foundSection = section.getAttribute("data-section"); // Encontrar la sección visible
        }
      });
      setCurrentSection(foundSection); // Actualizar la sección actual
    };

    const sectionEl = sectionRef.current;

    if (sectionEl) {
      sectionEl.addEventListener("scroll", handleScroll); // Escuchar evento de scroll
    }

    // Cleanup: remover el evento cuando el componente se desmonte
    return () => {
      if (sectionEl) {
        sectionEl.removeEventListener("scroll", handleScroll);
      }
    };
  }, [lastScrollTop]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              currentSlide={currentSlide}
              sectionRef={sectionRef}
              isScrollingUp={isScrollingUp}
              currentSection={currentSection}
            />
          }
        />
        <Route
          path="/catalogo"
          element={
            <Catalogo
              sectionRef={sectionRef}
              isScrollingUp={isScrollingUp}
              currentSlide={currentSlide}
            />
          }
        />
        <Route path="/detalle/:id" element={<Detail />} />
        <Route path="/louder" element={<Louder />} />
      </Routes>
    </div>
  );
}

export default App;

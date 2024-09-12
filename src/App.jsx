import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router";
import Detail from "./pages/Detail/Detail";
import { products } from "./data";
import "./App.css";
import Home from "./pages/Home/Home";
import Catalogo from "./components/Catalogo/Catalogo";
import Louder from "./components/Louder/Louder";
import DesktopView from "./components/DesktopView/DesktopView"; // Asegurate de tener este componente
import CustomerSupport from "./components/CustomerSupport/CustomerSupport";
function App() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 780);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 780); // Actualiza el estado si la pantalla es menor o igual a 780px
    };

    window.addEventListener("resize", handleResize); // Agrega el evento al cambiar el tamaño de la ventana

    return () => {
      window.removeEventListener("resize", handleResize); // Limpia el evento al desmontar el componente
    };
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            isMobileView ? (
              <Home products={products} /> // Renderiza Home en pantallas pequeñas
            ) : (
              <DesktopView /> // Renderiza DesktopView en pantallas grandes
            )
          }
        />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/detalle/:id" element={<Detail />} />
        <Route path="/louder" element={<CustomerSupport />} />
      </Routes>
    </div>
  );
}

export default App;

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
import FeatureBlock from "./components/FeatureBlock/FeatureBlock";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory, getAllSections } from "./redux/actions";
import Dashboard from "./pages/Dashboard/dashboard";
import ProductForm from "./pages/Dashboard/dashboard";
import TarjetaDetalle from "./components/TarjetaDetalle/TarjetaDetalle";
function App() {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 780);
  const dispatch = useDispatch();

  useEffect(() => {

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 780); // Actualiza el estado si la pantalla es menor o igual a 780px
    };

    window.addEventListener("resize", handleResize); // Agrega el evento al cambiar el tamaño de la ventana

    return () => {
      window.removeEventListener("resize", handleResize); // Limpia el evento al desmontar el componente
    };
  }, [dispatch]);

  let products = useSelector((state) => state.products);
  let sections = useSelector((state) => state.sections);
  console.log(products, "products");
  console.log(sections, "sections");

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
        <Route
          path="/louder"
          element={<TarjetaDetalle   expanded={true}
            name={"CAMISETA BOXY FIT"}
            price={"18900"}
            description={"Camiseta boxy fit. Cuello redondo y manga corta. Efecto lavado. La prenda tiene una apariencia única gracias a su especial proceso de lavado. Por este motivo, puede diferir ligeramente en color con respecto al de la foto."}
            sizes={["S", "M", "L", "XL"]}
            percentage={20}
            isDiscounted={true}
            />}

        />
      </Routes>
    </div>
  );
}

export default App;

import { useState, useRef, useEffect } from "react";
import style from "./ExpandingSection.module.css";
import DetailCard from "../DetailCard/DetailCard";
import TarjetaDetalle from "../TarjetaDetalle/TarjetaDetalle";

function ExpandingSection({name, price, description, sizes}) {
  console.log(name,price,description,sizes,"expanding");
  
  const [startTouchY, setStartTouchY] = useState(0);
  const [currentTouchY, setCurrentTouchY] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    /*Esta funcion es para que la carta se deslice hacia abajo cuando carga*/
    setTimeout(() => {
     setExpanded(false)
    }, 250);
    const handleTouchMove = (e) => {
      setCurrentTouchY(e.touches[0].clientY);
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });

      return () => {
        section.removeEventListener("touchmove", handleTouchMove);
      };
    }
  }, []);

  const handleTouchStart = (e) => {
    setStartTouchY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    const deltaY = startTouchY - currentTouchY;
    if (Math.abs(deltaY) > 30) {
      if (deltaY > 0 && !expanded) {
        setExpanded(true);
      } else if (deltaY < 0 && expanded) {
        setExpanded(false);
      }
    }
  };

  return (
    <div
      ref={sectionRef}
      className={style.expandingSection}
      style={{
        height: expanded ? "80vh" : "20vh",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <TarjetaDetalle name={name} price={price} description={description} sizes={sizes} expanded={expanded} />
    </div>
  );
}

export default ExpandingSection;

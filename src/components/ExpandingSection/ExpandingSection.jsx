import { useState, useRef, useEffect } from "react";
import style from "./ExpandingSection.module.css";
import DetailCard from "../DetailCard/DetailCard";

function ExpandingSection() {
  const [startTouchY, setStartTouchY] = useState(0);
  const [currentTouchY, setCurrentTouchY] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleTouchMove = (e) => {
      const detailCard = sectionRef.current.querySelector(`.${style.detailCard_main}`);
      const scrollTop = detailCard.scrollTop;
      const scrollHeight = detailCard.scrollHeight;
      const offsetHeight = detailCard.offsetHeight;

      if (
        (scrollTop === 0 && e.touches[0].clientY > startTouchY) || // Evita el scroll hacia abajo en el límite superior
        (scrollTop + offsetHeight >= scrollHeight && e.touches[0].clientY < startTouchY) // Evita el scroll hacia arriba en el límite inferior
      ) {
        e.preventDefault(); // Solo previene el scroll si está en un límite
      }
      setCurrentTouchY(e.touches[0].clientY);
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("touchmove", handleTouchMove, { passive: false });

      return () => {
        section.removeEventListener("touchmove", handleTouchMove);
      };
    }
  }, [startTouchY]);

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
      <DetailCard />
    </div>
  );
}

export default ExpandingSection;

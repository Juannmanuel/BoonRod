import { useState, useRef } from "react";
import style from "./ExpandingSection.module.css";

function ExpandingSection() {
  const [startTouchY, setStartTouchY] = useState(0);
  const [currentTouchY, setCurrentTouchY] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef(null);

  const handleTouchStart = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado
    setStartTouchY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado
    setCurrentTouchY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    e.preventDefault(); // Evita el comportamiento predeterminado
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
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <h1>lore</h1>
    </div>
  );
}

export default ExpandingSection;

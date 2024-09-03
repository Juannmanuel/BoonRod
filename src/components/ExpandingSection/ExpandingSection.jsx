import { useState, useRef } from "react";
import style from "./ExpandingSection.module.css";

function ExpandingSection() {
  const [startTouchY, setStartTouchY] = useState(0);
  const [currentTouchY, setCurrentTouchY] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef(null);

  const handleTouchStart = (e) => {
    setStartTouchY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setCurrentTouchY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    const deltaY = startTouchY - currentTouchY;
    if (deltaY > 50 && !expanded) { // Threshold to expand
      setExpanded(true);
    } else if (deltaY < -50 && expanded) { // Threshold to contract
      setExpanded(false);
    }
  };

  return (
    <div
      ref={sectionRef}
      className={style.expandingSection}
      style={{
        height: expanded ? "90vh" : "20vh",
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >

    </div>
  );
}

export default ExpandingSection;

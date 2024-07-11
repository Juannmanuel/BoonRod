import { useRef, useEffect } from "react";

import style from "./AnimatedTitle.module.css";


function AnimatedTitle({ title, index, currentSlide }) {
  const headingsRef = useRef([]);

  useEffect(() => {
    if (headingsRef.current[currentSlide]) {
      const heading = headingsRef.current[currentSlide];
      heading.classList.remove(style.hover);
      heading.classList.add(style.hidden); // Añadir clase hidden para ocultar temporalmente

      // Usar requestAnimationFrame para asegurar que la clase hidden se ha aplicado
      requestAnimationFrame(() => {
        heading.classList.remove(style.hidden);
        setTimeout(() => {
          heading.classList.add(style.hover);
        }, 10);
      });
    }
  }, [currentSlide]);

  return (
    <h2
      ref={(el) => (headingsRef.current[index] = el)}
      className={`${style.learnMore} ${style.hidden}`}
    >
      <span className={style.circle} aria-hidden="true">
        <span className={`${style.icon} ${style.arrow}`}></span>
      </span>
      <span className={style.buttonText}>{title}</span>
    </h2>
  );
}

export default AnimatedTitle;

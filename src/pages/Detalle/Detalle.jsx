import ExpandingSection from "../../components/ExpandingSection/ExpandingSection"
import style from "./Detalle.module.css"


function Detalle(){


  return (
    <section className={style.detail_main}>
      <div className={style.carrousel}></div>
      <ExpandingSection/>
    </section>
  )
}


export default Detalle
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts"
import style from "./FeatureBlock.module.css"


function FeatureBlock ({section}) {



    return (
        <section className={style.featureBlock_main} data-section={section}>
        {/* <RecommendedProducts/> */}
        </section>
    )
}



export default FeatureBlock
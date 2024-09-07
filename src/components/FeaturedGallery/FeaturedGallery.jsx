import style from "./FeaturedGallery.module.css"

function FeaturedGallery({images}){



    return (
        <div className={style.home_container}>
        <div className={style.header}>
          <img loading="lazy" src={images[0]} alt="" />
        </div>
        <div className={style.twoColumnsContainer}>
          <img src={images[1]} alt="" />
          <img src={images[2]} alt="" />
        </div>
        <div className={style.singleRowContainer}>
          <img src={images[3]} alt="" />
        </div>
        <div className={style.twoColumnsContainer}>
          <img src={images[4]} alt="" />
          <img src={images[5]} alt="" />
        </div>
      </div>
    )
}

export default FeaturedGallery
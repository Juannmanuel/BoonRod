import style from "./DetailCard.module.css"


function DetailCard () {


    return (
        <section className={style.detailCard_main}>
            <div className={style.productName}></div>
            <div className={style.productDescription}></div>
            <div className={style.productPrice}></div>
            <div className={style.productSizes}></div>
            <div className={style.productActions }></div>

        </section>
    )
}

export default DetailCard
import style from "./About.module.css"


function About({section}){

    return (
        <section  data-section={section} className={style.about_main}>
        <div className={style.title}></div>
        <div className={style.description}></div>
        <div className={style.container_map}></div>
        <div className={style.btn_map}></div>
        <div className={style.social}></div>
        </section>
    )
}
export default About
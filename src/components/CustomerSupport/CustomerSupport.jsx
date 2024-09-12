import styles from "./CustomerSupport.module.css";
import { BsWhatsapp, BsClock, BsEnvelopeAt, BsArrowDown } from "react-icons/bs";
const CustomerSupport = () => {
  return (
    <div className={styles.contactInfoContainer}>
      <h2 className={styles.title}>Atencion al Cliente</h2>
      <div className={styles.contactItem}>
        <i className={styles.contactIcon}>
          <BsWhatsapp style={{color: "green"}} />
        </i>
        <div className={styles.container_text}>
          <span className={styles.contactText_title}>+123 456 789</span>
          <span className={styles.contactText}>Mensaje de WhatsApp</span>
        </div>
      </div>
      <div className={styles.contactItem}>
        <i className={styles.contactIcon}>
          <BsEnvelopeAt />
        </i>
        <div className={styles.container_text}>
          <span className={styles.contactText_title}>info@ejemplo.com</span>
          <span className={styles.contactText}>Mandanos un mail</span>
        </div>
      </div>
      <div className={styles.contactItem}>
        <i className={styles.contactIcon}>
          <BsClock />
        </i>
        <div className={styles.container_text}>
          <span className={styles.contactText_title}>Horario de atencion</span>
          <span className={styles.contactText}>Lunes a Viernes 9 a 18 hs</span>
        </div>
      </div>

      <div className={styles.faqContainer}>
        <details className={styles.faqItem}>
          <summary className={styles.faqHeader}>
            Compra segura <BsArrowDown />
          </summary>
          <p className={styles.faqContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            quibusdam at, ducimus similique quas pariatur, aliquid ullam cumque
            temporibus repellendus consequuntur iure minima exercitationem. Ea
            assumenda debitis dolor harum perspiciatis?
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary className={styles.faqHeader}>
            Envíos y devoluciones <BsArrowDown />
          </summary>
          <p className={styles.faqContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            quibusdam at, ducimus similique quas pariatur, aliquid ullam cumque
            temporibus repellendus consequuntur iure minima exercitationem. Ea
            assumenda debitis dolor harum perspiciatis?
          </p>
        </details>

        <details className={styles.faqItem}>
          <summary className={styles.faqHeader}>
            Política de privacidad <BsArrowDown />
          </summary>
          <p className={styles.faqContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            quibusdam at, ducimus similique quas pariatur, aliquid ullam cumque
            temporibus repellendus consequuntur iure minima exercitationem. Ea
            assumenda debitis dolor harum perspiciatis?
          </p>
        </details>
      </div>
    </div>
  );
};

export default CustomerSupport;

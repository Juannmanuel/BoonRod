import style from "./DesktopView.module.css";
import qr from "../../assets/images/QR/qr.png";
function DesktopView() {
  return (
    <div className={style.desktopViewContainer}>
      <div className={style.container_content}>
        <h1 className={style.desktopViewTitle}>
          Esta página está en mantenimiento
          <br />
          <strong>Actualmente solo está disponible en la vista móvil.</strong>
          <br />
          Escanea el siguiente código QR con tu celular para acceder al sitio:
        </h1>
      </div>
      <div className={style.container_qr}>
        <img
          className={style.qrImage}
          src={qr}
          alt="Código QR para acceder al sitio"
        />
      </div>
    </div>
  );
}

export default DesktopView;

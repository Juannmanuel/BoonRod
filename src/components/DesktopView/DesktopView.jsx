import style from "./DesktopView.module.css";
import qr from "../../assets/images/QR/qr.png"
function DesktopView() {
  return (
    <div className={style.desktopViewContainer}>
      <h1 className={style.desktopViewTitle}>Esta página está en mantenimiento</h1>
      <p className={style.desktopViewText}>
        Actualmente solo está disponible en la vista móvil.
      </p>
      <p className={style.desktopViewText}>
        Escanea el siguiente código QR con tu celular para acceder al sitio:
      </p>
      <img
        className={style.qrImage}
        src={qr}
        alt="Código QR para acceder al sitio"
      />
    </div>
  );
}

export default DesktopView;

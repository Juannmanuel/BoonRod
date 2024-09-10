import style from "./DesktopView.module.css"

function DesktopView()  {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1>Esta página está en mantenimiento</h1>
        <p>Actualmente solo está disponible en la vista móvil.</p>
        <p>Escanea el siguiente código QR con tu celular para acceder al sitio:</p>
        <img src="ruta-del-codigo-QR.png" alt="Código QR para acceder al sitio" />
      </div>
    );
  };

  export default DesktopView
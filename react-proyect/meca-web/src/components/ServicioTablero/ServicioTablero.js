import './ServicioTablero.css';
import servicioTablero from '../../imagenes/tableros-servicios.png';
/*SVG Tableros*/
import linea16Tablero from '../../imagenes/lineas-tableros/Line 16conjunto-lineas-tableros.svg';
import linea17Tablero from '../../imagenes/lineas-tableros/Line 17conjunto-lineas-tableros.svg';
import linea18Tablero from '../../imagenes/lineas-tableros/Line 18conjunto-lineas-tableros.svg';
import linea19Tablero from '../../imagenes/lineas-tableros/Line 19conjunto-lineas-tableros.svg';
import linea20Tablero from '../../imagenes/lineas-tableros/Line 20conjunto-lineas-tableros.svg';
import linea21Tablero from '../../imagenes/lineas-tableros/Line 21conjunto-lineas-tableros.svg';
import linea22Tablero from '../../imagenes/lineas-tableros/Line 22conjunto-lineas-tableros.svg';
import linea23Tablero from '../../imagenes/lineas-tableros/Line 23conjunto-lineas-tableros.svg';


function ServicioTablero({onAdd}) {

    return (
        <div className="section-servicios">
            <h3 className='section-servicos-tittle'>Tableros Eléctricos</h3>
            <div className="container-section-servicios-tablero">
                <div className="servicios" onClick={() => onAdd()}>
                    <img className='servicio-tableros' alt='Logo Servicio Tablero' src={servicioTablero}></img>
                </div>
                <div className="container-section-servicios-tablero-lineas">
                    <div className="container-section-servicios-tablero-linea-1"><img alt='Linea 18' src={linea18Tablero}></img><span>Tableros de distribución en media y baja tensión.</span></div>
                    <div className="container-section-servicios-tablero-linea-2"><img alt='Linea 19' src={linea19Tablero}></img><span>Tableros de generación.</span></div>
                    <div className="container-section-servicios-tablero-linea-3"><img alt='Linea 20' src={linea20Tablero}></img><span>Tableros petroleros.</span></div>
                    <div className="container-section-servicios-tablero-linea-4"><img alt='Linea 16' src={linea16Tablero}></img><span>Tableros hospitalarios.</span></div>
                    <div className="container-section-servicios-tablero-linea-5"><img alt='Linea 17' src={linea17Tablero}></img><span>Tableros de transferencia automática.</span></div>
                    <div className="container-section-servicios-tablero-linea-6"><img alt='Linea 21' src={linea21Tablero}></img><span>Tableros de automatismos para sistemas de generación</span></div>
                    <div className="container-section-servicios-tablero-linea-7"><img alt='Linea 22' src={linea22Tablero}></img><span>Tableros de monitoreo de parámetros eléctricos.</span></div>
                    <div className="container-section-servicios-tablero-linea-8"><img alt='Linea 23' src={linea23Tablero}></img><span>Tableros para BMS y domótica.</span></div>
                </div>
            </div>
        </div>
    )
}

export default ServicioTablero;
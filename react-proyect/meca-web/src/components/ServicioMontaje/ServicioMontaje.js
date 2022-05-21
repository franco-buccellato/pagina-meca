import './ServicioMontaje.css';
import serviciomontaje from '../../imagenes/montaje-servicios.png';
/*SVG Montajes*/
import linea20Montaje from '../../imagenes/lineas-montaje/Line 20despliegue-montaje-servicios.svg';
import linea21Montaje from '../../imagenes/lineas-montaje/Line 21despliegue-montaje-servicios.svg';
import linea22Montaje from '../../imagenes/lineas-montaje/Line 22despliegue-montaje-servicios.svg';
import linea23Montaje from '../../imagenes/lineas-montaje/Line 23despliegue-montaje-servicios.svg';

function ServicioMontaje({onAdd}) {

    return (
        <div className="section-servicios">
            <h3 className='section-servicos-tittle'>Montaje e Instalación</h3>
            <div className="container-section-servicios-montaje">
                <div className="servicios" onClick={() => onAdd()}>
                    <img className='servicio-montaje' alt='Logo Servicio Montaje' src={serviciomontaje}></img>
                </div>
                <div className="container-section-servicios-montaje-lineas">
                    <div className="container-section-servicios-montaje-linea-1"><img alt='Linea 20 montaje' src={linea20Montaje}></img><span>Tableros petroleros.</span></div>
                    <div className="container-section-servicios-montaje-linea-2"><img alt='Linea 21 montaje' src={linea21Montaje}></img><span>Tableros de automatismos para sistemas de generación</span></div>
                    <div className="container-section-servicios-montaje-linea-3"><img alt='Linea 22 montaje' src={linea22Montaje}></img><span>Tableros de monitoreo de parámetros eléctricos.</span></div>
                    <div className="container-section-servicios-montaje-linea-4"><img alt='Linea 23 montaje' src={linea23Montaje}></img><span>Tableros para BMS y domótica.</span></div>
                </div>
            </div>
        </div>
    )
}

export default ServicioMontaje;
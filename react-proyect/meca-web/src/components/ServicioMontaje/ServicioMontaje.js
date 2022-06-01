import './ServicioMontaje.css';
import servicioTablero from '../../imagenes/tableros-servicios.webp';
import serviciomontaje from '../../imagenes/montaje-servicios.webp';
import servicioMas from '../../imagenes/mas-servicios.webp';
/*SVG Montajes*/
import linea20Montaje from '../../imagenes/lineas-montaje/Line 20despliegue-montaje-servicios.svg';
import linea21Montaje from '../../imagenes/lineas-montaje/Line 21despliegue-montaje-servicios.svg';
import linea22Montaje from '../../imagenes/lineas-montaje/Line 22despliegue-montaje-servicios.svg';
import linea23Montaje from '../../imagenes/lineas-montaje/Line 23despliegue-montaje-servicios.svg';
import {getTextServicios} from '../repositorioServicios.js';

function ServicioMontaje({onAdd}) {

    const textosServicios = getTextServicios();

    return (
        <div className="section-servicios" id='section-servicios-montaje'>
            <div className="servicios-aux-mobile" onClick={() => onAdd()}>
                <img className='servicio-tableros' alt='Logo Servicio Tablero' src={servicioTablero}></img>
            </div>
            <h3 className='section-servicos-tittle'>{textosServicios.servicio2}</h3>
            <div className="container-section-servicios-montaje">
                <div className="container-section-servicios-montaje-lineas">
                    <div className="container-section-servicios-montaje-linea-1"><span>{textosServicios.servicio2Detalle1}</span><img alt='Linea 22 montaje' src={linea22Montaje}></img></div>
                    <div className="container-section-servicios-montaje-linea-2"><span>{textosServicios.servicio2Detalle2}</span><img alt='Linea 23 montaje' src={linea23Montaje}></img></div>
                </div>
                <div className="servicios-aux" onClick={() => onAdd()}>
                        <img className='servicio-tableros' alt='Logo Servicio Tablero' src={servicioTablero}></img>
                </div>
                <div className='card-montaje'>
                    <div className="servicios" onClick={() => onAdd()}>
                        <img className='servicio-montaje' alt='Logo Servicio Montaje' src={serviciomontaje}></img>
                    </div>
                    <div className="container-section-servicios-montaje-lineas">
                        <div className="container-section-servicios-montaje-linea-3"><img alt='Linea 20 montaje' src={linea20Montaje}></img><span>{textosServicios.servicio2Detalle3}</span></div>
                        <div className="container-section-servicios-montaje-linea-4"><img alt='Linea 21 montaje' src={linea21Montaje}></img><span>{textosServicios.servicio2Detalle4}</span></div>
                    </div>
                    <div className="container-section-servicios-montaje-responsive">
                        <ul className="lista-servicios-montaje">
                            <li className="linea-servicios-montaje">{textosServicios.servicio2Detalle1}</li>
                            <li className="linea-servicios-montaje">{textosServicios.servicio2Detalle2}</li>
                            <li className="linea-servicios-montaje">{textosServicios.servicio2Detalle3}</li>
                            <li className="linea-servicios-montaje">{textosServicios.servicio2Detalle4}</li>
                        </ul>
                    </div>
                </div>
                <div className="servicios-aux" onClick={() => onAdd()}>
                    <img className='servicio-mas' alt='Logo Servicio Mas' src={servicioMas}></img>
                </div>
                <div className="servicios-aux-mobile" onClick={() => onAdd()}>
                    <img className='servicio-mas' alt='Logo Servicio Mas' src={servicioMas}></img>
                </div>
            </div>
        </div>
    )
}

export default ServicioMontaje;
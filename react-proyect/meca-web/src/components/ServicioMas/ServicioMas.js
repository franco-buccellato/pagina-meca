import './ServicioMas.css';
import servicioTablero from '../../imagenes/tableros-servicios.webp';
import serviciomontaje from '../../imagenes/montaje-servicios.webp';
import servicioMas from '../../imagenes/mas-servicios.webp';
import {getTextServicios} from '../repositorioServicios.js';

/*SVG Mas*/
import linea16Mas from '../../imagenes/lineas-mas/Line 16despliegue-mas-servicios.svg';
import linea17Mas from '../../imagenes/lineas-mas/Line 17despliegue-mas-servicios.svg';
import linea20Mas from '../../imagenes/lineas-mas/Line 20despliegue-mas-servicios.svg';
import linea21Mas from '../../imagenes/lineas-mas/Line 21despliegue-mas-servicios.svg';
import linea22Mas from '../../imagenes/lineas-mas/Line 22despliegue-mas-servicios.svg';


function ServicioMas({onAdd}) {

    const textosServicios = getTextServicios();

    return (
        <div className="section-servicios" id='section-servicios-mas'>
            <div className="servicios-aux-mobile" onClick={() => onAdd()}>
                <img className='servicio-tableros' alt='Logo Servicio Tablero' src={servicioTablero}></img>
            </div>
            <div className="servicios-aux-mobile" onClick={() => onAdd()}>
                <img className='servicio-montaje' alt='Logo Servicio Mas' src={serviciomontaje}></img>
            </div>
            <h3 className='section-servicos-tittle'>{textosServicios.servicio3}</h3>
            <div className="container-section-servicios-mas">
                <div className="servicios-aux" onClick={() => onAdd()}>
                    <img className='servicio-tableros' alt='Logo Servicio Tablero' src={servicioTablero}></img>
                </div>
                <div className="servicios-aux" onClick={() => onAdd()}>
                    <img className='servicio-montaje' alt='Logo Servicio Mas' src={serviciomontaje}></img>
                </div>
                <div className='card-mas'>
                    <div className="container-section-servicios-mas-lineas">
                        <div className="container-section-servicios-mas-linea-1"><span>{textosServicios.servicio3Detalle1}</span><img alt='Linea 21 mas' src={linea21Mas}></img></div>
                        <div className="container-section-servicios-mas-linea-2"><span>{textosServicios.servicio3Detalle2}</span><img alt='Linea 17 mas' src={linea17Mas}></img></div>
                        <div className="container-section-servicios-mas-linea-3"><span>{textosServicios.servicio3Detalle3}</span><img alt='Linea 22 mas' src={linea22Mas}></img></div>
                        <div className="container-section-servicios-mas-linea-4"><span>{textosServicios.servicio3Detalle4}</span><img alt='Linea 16 mas' src={linea16Mas}></img></div>
                        <div className="container-section-servicios-mas-linea-5"><span>{textosServicios.servicio3Detalle5}</span><img alt='Linea 20 mas' src={linea20Mas}></img></div>
                    </div>
                    <div className="servicios" onClick={() => onAdd()}>
                        <img className='servicio-mas' alt='Logo Servicio Mas' src={servicioMas}></img>
                    </div>
                    <div className="container-section-servicios-mas-responsive">
                        <ul className="lista-servicios-mas">
                            <li className="linea-servicios-mas">{textosServicios.servicio3Detalle1}</li>
                            <li className="linea-servicios-mas">{textosServicios.servicio3Detalle2}</li>
                            <li className="linea-servicios-mas">{textosServicios.servicio3Detalle3}</li>
                            <li className="linea-servicios-mas">{textosServicios.servicio3Detalle4}</li>
                            <li className="linea-servicios-mas">{textosServicios.servicio3Detalle5}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicioMas;
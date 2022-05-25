import './ServicioMas.css';
import servicioMas from '../../imagenes/mas-servicios.png';
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
        <div className="section-servicios">
            <h3 className='section-servicos-tittle'>{textosServicios.servicio3}</h3>
            <div className="container-section-servicios-mas">
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
            </div>
        </div>
    )
}

export default ServicioMas;
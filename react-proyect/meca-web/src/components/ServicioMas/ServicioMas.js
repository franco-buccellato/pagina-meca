import './ServicioMas.css';
import servicioMas from '../../imagenes/mas-servicios.png';


/*SVG Mas*/
import linea16Mas from '../../imagenes/lineas-mas/Line 16despliegue-mas-servicios.svg';
import linea17Mas from '../../imagenes/lineas-mas/Line 17despliegue-mas-servicios.svg';
import linea20Mas from '../../imagenes/lineas-mas/Line 20despliegue-mas-servicios.svg';
import linea21Mas from '../../imagenes/lineas-mas/Line 21despliegue-mas-servicios.svg';
import linea22Mas from '../../imagenes/lineas-mas/Line 22despliegue-mas-servicios.svg';


function ServicioMas({onAdd}) {

    return (
        <div className="section-servicios">
        <h3 className='section-servicos-tittle'>Más Servicios</h3>
        <div className="container-section-servicios-mas">
            <div className="servicios" onClick={() => onAdd()}>
                <img className='servicio-mas' alt='Logo Servicio Mas' src={servicioMas}></img>
            </div>
            <div className="container-section-servicios-mas-lineas">
                <div className="container-section-servicios-mas-linea-1"><img alt='Linea 16 mas' src={linea16Mas}></img><span>Tableros hospitalarios.</span></div>
                <div className="container-section-servicios-mas-linea-2"><img alt='Linea 17 mas' src={linea17Mas}></img><span>Tableros de transferencia automática.</span></div>
                <div className="container-section-servicios-mas-linea-3"><img alt='Linea 21 mas' src={linea20Mas}></img><span>Tableros de automatismos para sistemas de generación</span></div>
                <div className="container-section-servicios-mas-linea-4"><img alt='Linea 22 mas' src={linea21Mas}></img><span>Tableros de monitoreo de parámetros eléctricos.</span></div>
                <div className="container-section-servicios-mas-linea-5"><img alt='Linea 23 mas' src={linea22Mas}></img><span>Tableros para BMS y domótica.</span></div>
            </div>
        </div>
    </div>
    )
}

export default ServicioMas;
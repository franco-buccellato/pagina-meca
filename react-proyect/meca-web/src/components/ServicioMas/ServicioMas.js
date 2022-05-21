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
                <div className="container-section-servicios-mas-lineas">
                    <div className="container-section-servicios-mas-linea-1"><span>Medición y mantenimiento de sistemas de puesta a tierra.</span><img alt='Linea 21 mas' src={linea21Mas}></img></div>
                    <div className="container-section-servicios-mas-linea-2"><span>Instalación de sistemas de puesta a tierra.</span><img alt='Linea 17 mas' src={linea17Mas}></img></div>
                    <div className="container-section-servicios-mas-linea-3"><span>Tendido de conductores de media y baja tensión con sus canalizaciones.</span><img alt='Linea 22 mas' src={linea22Mas}></img></div>
                    <div className="container-section-servicios-mas-linea-4"><span>Instalaciones eléctricas en Datacenters.</span><img alt='Linea 16 mas' src={linea16Mas}></img></div>
                    <div className="container-section-servicios-mas-linea-5"><span>Retrofit / Ecofit de interruptores.</span><img alt='Linea 20 mas' src={linea20Mas}></img></div>
                </div>
                <div className="servicios" onClick={() => onAdd()}>
                    <img className='servicio-mas' alt='Logo Servicio Mas' src={servicioMas}></img>
                </div>
            </div>
        </div>
    )
}

export default ServicioMas;
import './SectionServicios.css';
//import servicioTablero from '../../imagenes/tableros-servicios-small-min.webp';
import servicioTablero from '../../imagenes/tableros-servicios-imagen2.png';
//import serviciomontaje from '../../imagenes/montaje-servicios-small-min.webp';
import serviciomontaje from '../../imagenes/montajes-servicios-imagen.png';
//import servicioMas from '../../imagenes/mas-servicios-small-min.webp';
import servicioMas from '../../imagenes/mas-servicios-imagen.png';
/* import {useState} from 'react'; */
/* import ServicioTablero from '../ServicioTablero/ServicioTablero';
import ServicioMontaje from '../ServicioMontaje/ServicioMontaje';
import ServicioMas from '../ServicioMas/ServicioMas'; */
import {getTextServicios} from '../repositorioServicios.js';

function SectionServicios() {

    /* const [servicio, setServicio] = useState(); */

    const textosServicios = getTextServicios();

/*     const setServicioTablero = () => {
        setServicio('tableros');
    }
    const setServicioMontaje = () => {
        setServicio('montaje');
    }
    const setServicioMas = () => {
        setServicio('mas');
    } */
/*     const setServicioNinguno = () => {
        setServicio();
    } */

/*     switch(servicio) {
        case 'tableros':
            return (
                <ServicioTablero onAdd={() => setServicioNinguno()}/>
            )
        case 'montaje':
            return (
                <ServicioMontaje onAdd={() => setServicioNinguno()}/>
            )
        case 'mas':
            return (
                <ServicioMas onAdd={() => setServicioNinguno()}/>
            )
        default: */
            return (
                <div className="section-servicios" id='section-servicios'>
                    <h3 className='section-servicos-tittle'>Nuestros Servicios</h3>
                    <div className="container-section-servicios-base">
                        {/* <div className="servicios" onClick={() => setServicioTablero()}> */}
                        <div className="servicios">
                            <img className='servicio-base' alt='Logo Servicio Tablero' src={servicioTablero} width={240} height={240}></img>
                            <h4 className='servicio-text'>{textosServicios.servicio1}</h4>
                            <ul className="lista-servicios-montaje-general">
                                <li className="linea-servicios-tablero">-{textosServicios.servicio1Detalle1}</li>
                                <li className="linea-servicios-tablero">-{textosServicios.servicio1Detalle2}</li>
                                <li className="linea-servicios-tablero">-{textosServicios.servicio1Detalle3}</li>
                                <li className="linea-servicios-tablero">-{textosServicios.servicio1Detalle4}</li>
                                <li className="linea-servicios-tablero">-{textosServicios.servicio1Detalle5}</li>
                                <li className="linea-servicios-tablero">-{textosServicios.servicio1Detalle6}</li>
                                <li className="linea-servicios-tablero">-{textosServicios.servicio1Detalle7}</li>
                                <li className="linea-servicios-tablero">-{textosServicios.servicio1Detalle8}</li>
                            </ul>
                        </div>
                        {/* <div className="servicios" onClick={() => setServicioMontaje()}> */}
                        <div className="servicios">
                            <img className='servicio-base' alt='Logo Servicio Montaje' src={serviciomontaje} width={240} height={240}></img>
                            <h4 className='servicio-text'>{textosServicios.servicio2}</h4>
                            <ul className="lista-servicios-tablero-general">
                                <li className="linea-servicios-montaje">-{textosServicios.servicio2Detalle1}</li>
                                <li className="linea-servicios-montaje">-{textosServicios.servicio2Detalle2}</li>
                                <li className="linea-servicios-montaje">-{textosServicios.servicio2Detalle3}</li>
                                <li className="linea-servicios-montaje">-{textosServicios.servicio2Detalle4}</li>
                            </ul>
                        </div>
                        {/* <div className="servicios" onClick={() => setServicioMas()}> */}
                        <div className="servicios">
                            <img className='servicio-base' alt='Logo Servicio Mas' src={servicioMas} width={240} height={240}></img>
                            <h4 className='servicio-text'>{textosServicios.servicio3}</h4>
                            <ul className="lista-servicios-mas-general">
                                <li className="linea-servicios-mas">-{textosServicios.servicio3Detalle1}</li>
                                <li className="linea-servicios-mas">-{textosServicios.servicio3Detalle2}</li>
                                <li className="linea-servicios-mas">-{textosServicios.servicio3Detalle3}</li>
                                <li className="linea-servicios-mas">-{textosServicios.servicio3Detalle4}</li>
                                <li className="linea-servicios-mas">-{textosServicios.servicio3Detalle5}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
/*     } */
}

export default SectionServicios;
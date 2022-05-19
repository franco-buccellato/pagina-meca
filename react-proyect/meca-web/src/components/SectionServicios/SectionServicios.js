import './SectionServicios.css';
import servicioTablero from '../../imagenes/tableros-servicios.png';
import serviciomontaje from '../../imagenes/montaje-servicios.png';
import servicioMas from '../../imagenes/mas-servicios.png';
import {useState} from 'react';
import linea16 from '../../imagenes/lineas-tableros/Line 16conjunto-lineas-tableros.svg';
import linea17 from '../../imagenes/lineas-tableros/Line 17conjunto-lineas-tableros.svg';
import linea18 from '../../imagenes/lineas-tableros/Line 18conjunto-lineas-tableros.svg';
import linea19 from '../../imagenes/lineas-tableros/Line 19conjunto-lineas-tableros.svg';
import linea20 from '../../imagenes/lineas-tableros/Line 20conjunto-lineas-tableros.svg';
import linea21 from '../../imagenes/lineas-tableros/Line 21conjunto-lineas-tableros.svg';
import linea22 from '../../imagenes/lineas-tableros/Line 22conjunto-lineas-tableros.svg';
import linea23 from '../../imagenes/lineas-tableros/Line 23conjunto-lineas-tableros.svg';


function SectionServicios() {

    const [servicio, setServicio] = useState();

    const setServicioTablero = () => {
        setServicio('tableros');
    }
    const setServicioMontaje = () => {
        setServicio('montaje');
    }
    const setServicioMas = () => {
        setServicio('mas');
    }
    const setServicioNinguno = () => {
        setServicio();
    }

    switch(servicio) {
        case 'tableros':
            return (
                <div className="section-servicios">
                    <h3 className='section-servicos-tittle'>Tableros Eléctricos</h3>
                    <div className="container-section-servicios-tablero ">
                        <div className="servicios" onClick={() => setServicioNinguno()}>
                            <img className='servicio-tableros' alt='Logo Servicio Tablero' src={servicioTablero}></img>
                        </div>
                        <div className="container-section-servicios-tablero-lineas">
                            <div className="container-section-servicios-tablero-linea-1"><img alt='Linea 18' src={linea18}></img><span>Tableros de distribución en media y baja tensión.</span></div>
                            <div className="container-section-servicios-tablero-linea-2"><img alt='Linea 19' src={linea19}></img><span>Tableros de generación.</span></div>
                            <div className="container-section-servicios-tablero-linea-3"><img alt='Linea 20' src={linea20}></img><span>Tableros petroleros.</span></div>
                            <div className="container-section-servicios-tablero-linea-4"><img alt='Linea 16' src={linea16}></img><span>Tableros hospitalarios.</span></div>
                            <div className="container-section-servicios-tablero-linea-5"><img alt='Linea 17' src={linea17}></img><span>Tableros de transferencia automática.</span></div>
                            <div className="container-section-servicios-tablero-linea-6"><img alt='Linea 21' src={linea21}></img><span>Tableros de automatismos para sistemas de generación</span></div>
                            <div className="container-section-servicios-tablero-linea-7"><img alt='Linea 22' src={linea22}></img><span>Tableros de monitoreo de parámetros eléctricos.</span></div>
                            <div className="container-section-servicios-tablero-linea-8"><img alt='Linea 23' src={linea23}></img><span>Tableros para BMS y domótica.</span></div>
                        </div>
                    </div>
                </div>
            )
        case 'montaje':
            return (
                <div className="section-servicios">
                    <h3 className='section-servicos-tittle'>Montaje e Instalación</h3>
                    <div className="container-section-servicios-montaje">
                        <div className="servicios" onClick={() => setServicioNinguno()}>
                            <img className='servicio-montaje' alt='Logo Servicio Montaje' src={serviciomontaje}></img>
                        </div>
                    </div>
                </div>
            )
        case 'mas':
            return (
                <div className="section-servicios">
                    <h3 className='section-servicos-tittle'>Más Servicios</h3>
                    <div className="container-section-servicios-mas">
                        <div className="servicios" onClick={() => setServicioNinguno()}>
                            <img className='servicio-mas' alt='Logo Servicio Mas' src={servicioMas}></img>
                        </div>
                    </div>
                </div>
            )
        default:
            return (
                <div className="section-servicios">
                    <h3 className='section-servicos-tittle'>Nuestros Servicios</h3>
                    <div className="container-section-servicios-base">
                        <div className="servicios" onClick={() => setServicioTablero()}>
                            <img className='servicio-base' alt='Logo Servicio Tablero' src={servicioTablero}></img>
                            <h4 className='servicio-text'>Tableros Eléctricos</h4>
                        </div>
                        <div className="servicios" onClick={() => setServicioMontaje()}>
                            <img className='servicio-base' alt='Logo Servicio Montaje' src={serviciomontaje}></img>
                            <h4 className='servicio-text'>Montaje e Instalación</h4>
                        </div>
                        <div className="servicios" onClick={() => setServicioMas()}>
                            <img className='servicio-base' alt='Logo Servicio Mas' src={servicioMas}></img>
                            <h4 className='servicio-text'>Más Servicios</h4>
                        </div>
                    </div>
                </div>
            );
    }
}

export default SectionServicios;
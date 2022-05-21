import './SectionServicios.css';
import servicioTablero from '../../imagenes/tableros-servicios.png';
import serviciomontaje from '../../imagenes/montaje-servicios.png';
import servicioMas from '../../imagenes/mas-servicios.png';
import {useState} from 'react';
import ServicioTablero from '../ServicioTablero/ServicioTablero';
import ServicioMontaje from '../ServicioMontaje/ServicioMontaje';
import ServicioMas from '../ServicioMas/ServicioMas';

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
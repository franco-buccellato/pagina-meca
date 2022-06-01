import './ServicioTablero.css';
import servicioTablero from '../../imagenes/tableros-servicios.webp';
import serviciomontaje from '../../imagenes/montaje-servicios.webp';
import servicioMas from '../../imagenes/mas-servicios.webp';
/*SVG Tableros*/
import linea16Tablero from '../../imagenes/lineas-tableros/Line 16conjunto-lineas-tableros.svg';
import linea17Tablero from '../../imagenes/lineas-tableros/Line 17conjunto-lineas-tableros.svg';
import linea18Tablero from '../../imagenes/lineas-tableros/Line 18conjunto-lineas-tableros.svg';
import linea19Tablero from '../../imagenes/lineas-tableros/Line 19conjunto-lineas-tableros.svg';
import linea20Tablero from '../../imagenes/lineas-tableros/Line 20conjunto-lineas-tableros.svg';
import linea21Tablero from '../../imagenes/lineas-tableros/Line 21conjunto-lineas-tableros.svg';
import linea22Tablero from '../../imagenes/lineas-tableros/Line 22conjunto-lineas-tableros.svg';
import linea23Tablero from '../../imagenes/lineas-tableros/Line 23conjunto-lineas-tableros.svg';
import {getTextServicios} from '../repositorioServicios.js';


function ServicioTablero({onAdd}) {

    const textosServicios = getTextServicios();

    return (
        <div className="section-servicios" id='section-servicios-tablero'>
            <h3 className='section-servicos-tittle'>{textosServicios.servicio1}</h3>
            <div className="container-section-servicios-tablero">
                <div className='card-tablero'>
                    <div className="servicios" onClick={() => onAdd()}>
                        <img className='servicio-tableros' alt='Logo Servicio Tablero' src={servicioTablero}></img>
                    </div>
                    <div className="container-section-servicios-tablero-lineas">
                        <div className="container-section-servicios-tablero-linea-1">
                            <img alt='Linea 18' src={linea18Tablero}></img><span>{textosServicios.servicio1Detalle1}</span>
                        </div>
                        <div className="container-section-servicios-tablero-linea-2">
                            <img alt='Linea 19' src={linea19Tablero}></img><span>{textosServicios.servicio1Detalle2}</span>
                        </div>
                        <div className="container-section-servicios-tablero-linea-3">
                            <img alt='Linea 20' src={linea20Tablero}></img><span>{textosServicios.servicio1Detalle3}</span>
                        </div>
                        <div className="container-section-servicios-tablero-linea-4">
                            <img alt='Linea 16' src={linea16Tablero}></img><span>{textosServicios.servicio1Detalle4}</span>
                        </div>
                        <div className="container-section-servicios-tablero-linea-5">
                            <img alt='Linea 17' src={linea17Tablero}></img><span>{textosServicios.servicio1Detalle5}</span>
                        </div>
                        <div className="container-section-servicios-tablero-linea-6">
                            <img alt='Linea 21' src={linea21Tablero}></img><span>{textosServicios.servicio1Detalle6}</span>
                        </div>
                        <div className="container-section-servicios-tablero-linea-7">
                            <img alt='Linea 22' src={linea22Tablero}></img><span>{textosServicios.servicio1Detalle7}</span>
                        </div>
                        <div className="container-section-servicios-tablero-linea-8">
                            <img alt='Linea 23' src={linea23Tablero}></img><span>{textosServicios.servicio1Detalle8}</span>
                        </div>
                    </div>
                    <div className="container-section-servicios-tablero-responsive">
                        <ul className="lista-servicios-tablero">
                            <li className="linea-servicios-tablero">{textosServicios.servicio1Detalle1}</li>
                            <li className="linea-servicios-tablero">{textosServicios.servicio1Detalle2}</li>
                            <li className="linea-servicios-tablero">{textosServicios.servicio1Detalle3}</li>
                            <li className="linea-servicios-tablero">{textosServicios.servicio1Detalle4}</li>
                            <li className="linea-servicios-tablero">{textosServicios.servicio1Detalle5}</li>
                            <li className="linea-servicios-tablero">{textosServicios.servicio1Detalle6}</li>
                            <li className="linea-servicios-tablero">{textosServicios.servicio1Detalle7}</li>
                            <li className="linea-servicios-tablero">{textosServicios.servicio1Detalle8}</li>
                        </ul>
                    </div>
                </div>
                <div className="servicios-aux" onClick={() => onAdd()}>
                    <img className='servicio-montaje' alt='Logo Servicio Montaje' src={serviciomontaje}></img>
                </div>
                <div className="servicios-aux" onClick={() => onAdd()}>
                    <img className='servicio-mas' alt='Logo Servicio Mas' src={servicioMas}></img>
                </div>
                <div className="servicios-aux-mobile" onClick={() => onAdd()}>
                    <img className='servicio-montaje' alt='Logo Servicio Montaje' src={serviciomontaje}></img>
                </div>
                <div className="servicios-aux-mobile" onClick={() => onAdd()}>
                    <img className='servicio-mas' alt='Logo Servicio Mas' src={servicioMas}></img>
                </div>
            </div>
        </div>
    )
}

export default ServicioTablero;
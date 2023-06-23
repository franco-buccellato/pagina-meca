import './SectionClientes.css'; 
import iconoClientes from '../../imagenes/escudo-clientes.webp'
import CarrouselClientes from '../CarrouselClientes/CarrouselClientes';
import iconoExperiencias from '../../imagenes/experiencias-icono.webp'
import { getTextosClientes } from '../repositorioClientes';

function SectionClientes() {

    const textosPaginaClientes = getTextosClientes();

    return (
        <div className="container-section-clientes">
            <div className='container-banner-clientes'>
                <div className='container-banner-icono'>
                    <img alt='Icono Clientes' src={iconoClientes}></img>
                </div>
                <div className='container-banner-background'>
                    <div className='container-banner-background-imagen'>
                        <div className='container-banner-background-texto'>
                            <span>{textosPaginaClientes.titulo}</span>
                        </div>
                    </div>
                    <div className='container-banner-carrousel'>
                        <CarrouselClientes/>
                    </div>
                </div>
            </div>
            <div className='container-experiencias'>
                <div className='container-experiencias-subtitulo'>
                    <span className='container-experiencias-subtitulo-1'>{textosPaginaClientes.subTitulo1}</span>
                    <span className='container-experiencias-subtitulo-2'>{textosPaginaClientes.subTitulo2}</span>
                </div>
                <div className='container-experiencias-icono'>
                    <img alt='Icono Experiencias' src={iconoExperiencias}></img>
                </div>
                <div className='container-experiencias-comentarios'>
                    <div className='container-experiencias-comentario-columna-1'>
                        <div className='container-experiencias-comentario-linea-1'>
                            <div className='container-experiencias-comentario'>
                                <div className='experiencias-comentario-puntaje'>
                                    <ion-icon name="star" size='large'></ion-icon>
                                    <ion-icon name="star" size='large'></ion-icon>
                                    <ion-icon name="star" size='large'></ion-icon>
                                    <ion-icon name="star" size='large'></ion-icon>
                                    <ion-icon name="star" size='large'></ion-icon>
                                </div>
                                <div className='experiencias-comentario-comentario'>
                                    <span>{textosPaginaClientes.comentario1}</span>
                                </div>
                                <div className='experiencias-comentario-persona'>
                                    <ion-icon name="person-circle" size='large'></ion-icon>
                                    <span>{textosPaginaClientes.persona1}</span>
                                </div>
                            </div>
                        </div>
                        <div className='container-experiencias-comentario-linea-2'>
                            <div className='container-experiencias-comentario'>
                                <div className='experiencias-comentario-puntaje'>
                                    <ion-icon name="star" size='large'></ion-icon>
                                    <ion-icon name="star" size='large'></ion-icon>
                                    <ion-icon name="star" size='large'></ion-icon>
                                    <ion-icon name="star" size='large'></ion-icon>
                                    <ion-icon name="star" size='large'></ion-icon>
                                </div>
                                <div className='experiencias-comentario-comentario'>
                                    <span>{textosPaginaClientes.comentario2}</span>
                                </div>
                                <div className='experiencias-comentario-persona'>
                                    <ion-icon name="person-circle" size='large'></ion-icon>
                                    <span>{textosPaginaClientes.persona2}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='container-experiencias-comentario-columna-2'>
                        <div className='container-experiencias-comentario-linea-3'>
                            <div className='container-experiencias-comentario'>
                                <div className='experiencias-comentario-puntaje'>
                                    <ion-icon name="star" size='large'></ion-icon>
                                    <ion-icon name="star" size='large'></ion-icon>
                                    <ion-icon name="star" size='large'></ion-icon>
                                    <ion-icon name="star" size='large'></ion-icon>
                                    <ion-icon name="star" size='large'></ion-icon>
                                </div>
                                <div className='experiencias-comentario-comentario'>
                                    <span>{textosPaginaClientes.comentario3}</span>
                                </div>
                                <div className='experiencias-comentario-persona'>
                                    <ion-icon name="person-circle" size='large'></ion-icon>
                                    <span>{textosPaginaClientes.persona3}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionClientes;

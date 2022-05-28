import './SectionClientes.css'; 
import iconoClientes from '../../imagenes/escudo-clientes.png'
import CarrouselClientes from '../CarrouselClientes/CarrouselClientes';
import iconoExperiencias from '../../imagenes/experiencias-icono.png'

function SectionClientes() {
    return (
        <div className="container-section-clientes" id='section-clientes'>
            <div className='container-banner-clientes'>
                <div className='container-banner-icono'>
                    <img alt='Icono Clientes' src={iconoClientes}></img>
                </div>
                <div className='container-banner-background'>
                    <div className='container-banner-background-imagen'>
                        <div className='container-banner-background-texto'>
                            <span>Nos enorgullece  poder contar con una amplia gama de clientes a los que podemos recurrir para que validen nuestra experiencia, nuestros servicios y nuestro profesionalismo.</span>
                        </div>
                    </div>
                    <div className='container-banner-carrousel'>
                        <CarrouselClientes/>
                    </div>
                </div>
            </div>
            <div className='container-experiencias'>
                <div className='container-experiencias-subtitulo'>
                    <span className='container-experiencias-subtitulo-1'>#Experiencias</span>
                    <span className='container-experiencias-subtitulo-2'>de nuestros clientes</span>
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
                                    <span>Honestamente nunca ví a una empresa trabajar tan profesionalmente como Meca, desde las primeras reuniones hasta la entrega llave en mano de la solución presentada, no hubo desvíos ni de tiempo ni de precios! Recomendables 100%.</span>
                                </div>
                                <div className='experiencias-comentario-persona'>
                                    <ion-icon name="person-circle" size='large'></ion-icon>
                                    <span>Ariel</span>
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
                                    <span>Una gran empresa que se caracteriza por la excelencia en todo sentido, desde el departamento técnico, el personal hasta el producto terminado, están en todos los detalles. Sin duda número 1 en su gremio.</span>
                                </div>
                                <div className='experiencias-comentario-persona'>
                                    <ion-icon name="person-circle" size='large'></ion-icon>
                                    <span>Nícolas</span>
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
                                    <span>MECA es todo lo que está bien. Una empresa muy profesional que se destaca por su ética, por sus valores y por la excelencia de todos sus productos. Sin dudas, el mejor en su rubro. 100% recomendable.</span>
                                </div>
                                <div className='experiencias-comentario-persona'>
                                    <ion-icon name="person-circle" size='large'></ion-icon>
                                    <span>Francisco</span>
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

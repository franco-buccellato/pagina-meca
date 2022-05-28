import './SectionClientes.css'; 
import iconoClientes from '../../imagenes/escudo-clientes.png'
import CarrouselClientes from '../CarrouselClientes/CarrouselClientes';

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

                </div>
                <div className='container-experiencias-icono'>

                </div>
                <div className='container-experiencias-comentarios'>
                    <div className='container-experiencias-comentario-1'>

                    </div>
                    <div className='container-experiencias-comentario-2'>

                    </div>
                    <div className='container-experiencias-comentario-3'>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionClientes;

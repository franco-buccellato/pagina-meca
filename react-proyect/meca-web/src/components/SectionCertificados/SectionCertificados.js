import './SectionCertificados.css'; 
import IconoCertificado from '../../imagenes/icono-certificados.png'
import Certificado from '../Certificado/Certificado';
import {getCertificadosSchneider, getCertificadosIram} from '../repositorioCertificados.js';
import arrowBack from '../../imagenes/icono-arrow-back.png';
import arrowNext from '../../imagenes/icono-arrow-next.png';
import logoCertificacionSchneider from '../../imagenes/titulo-schneider-certificaciones.png';
import logoCertificacionIram from '../../imagenes/titulo-iram-certificaciones.png';

function SectionCertificados() {

    const certificadoSea = getCertificadosSchneider();
    const certificadosIram = getCertificadosIram();

    let indiceCarrouselIram = 0;
    let indiceCarrouselSea = 0;

    function prevSlide() {

    }

    function nextSlide() {
        
    }

    return (
        <div className="container-section-certificados" id='section-certificados'>
            <div className="container-certificados">
                <div className='container-certificados-title'>
                    <img alt='Icono Certificados' src={IconoCertificado}></img>
                    <h4>Nuestros Certificados</h4>
                </div>
                <div className='certificados'>
                    <div className='componente-carrousel'>
                        <div className='arrow-back'>
                            <div className='arrow-back-icono' onClick={() => prevSlide()}>
                                <img alt='Arrow Back' src={arrowBack}></img>
                            </div>
                        </div>
                        <div className='certificados-carrousel'>
                            {/* {
                                certificadoSea.map((certificado, index) => <Certificado key={index} {...certificado}/>)
                            } */}
                            <Certificado key={certificadoSea[indiceCarrouselSea].certificadoId} {...certificadoSea[indiceCarrouselSea]}/>
                        </div>
                        <div className='arrow-next'>
                            <div className='arrow-next-icono' onClick={() => nextSlide()}>
                                <img alt='Arrow Next' src={arrowNext}></img>
                            </div>
                        </div>
                    </div>
                    <div className='componente-carrousel'>
                        <div className='arrow-back'>
                            <div className='arrow-back-icono'>
                                <img alt='Arrow Back' src={arrowBack}></img>
                            </div>
                        </div>
                        <div className='certificados-carrousel'>
                            {/*  {
                                certificadosIram.map((certificado, index) => <Certificado key={index} {...certificado}/>)
                            } */}
                            <Certificado key={certificadosIram[indiceCarrouselIram].certificadoId} {...certificadosIram[indiceCarrouselIram]}/>
                        </div>
                        <div className='arrow-next'>
                            <div className='arrow-next-icono'>
                                <img alt='Arrow Next' src={arrowNext}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='logos-certificados'>
                    <div className='logo-certificado'>
                        <img alt='Logo Sea' src={logoCertificacionSchneider}></img>
                    </div>
                    <div className='logo-certificado-iram'>
                        <img alt='Logo Iram' src={logoCertificacionIram}></img>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionCertificados;

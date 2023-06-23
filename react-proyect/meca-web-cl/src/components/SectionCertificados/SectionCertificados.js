import './SectionCertificados.css'; 
import IconoCertificado from '../../imagenes/Certificaciones/icono-certificados.webp'
import Certificado from '../Certificado/Certificado';
import {getCertificadosSchneider, getCertificadosIram} from '../repositorioCertificados.js';
import arrowBack from '../../imagenes/icono-arrow-back.webp';
import arrowNext from '../../imagenes/icono-arrow-next.webp';
import logoCertificacionSchneider from '../../imagenes/Certificaciones/titulo-schneider-certificaciones.webp';
import logoCertificacionIram from '../../imagenes/Certificaciones/titulo-iram-certificaciones.webp';
import { useEffect, useState } from 'react';

function SectionCertificados() {

    const certificadoSea = getCertificadosSchneider();
    const certificadosIram = getCertificadosIram();

    const [indiceSea, setIndiceSea] = useState(0);
    const [indiceIram, setIndiceIram] = useState(0);

    useEffect(
        () => {
        },
        [indiceSea]
    )

    useEffect(
        () => {
        },
        [indiceIram]
    )

    const prevSlideSea = () => {
        indiceSea >= 1 ? setIndiceSea(indiceSea - 1) : console.log('Primer certificado Sea.');
    }

    const nextSlideSea = () => {
        indiceSea < certificadoSea.length - 1 ? setIndiceSea(indiceSea + 1) : console.log("Último certificado Sea.");
    }

    const prevSlideIram = () => {
        indiceIram >= 1 ? setIndiceIram(indiceIram - 1) : console.log('Primer certificado Iram.');
    }

    const nextSlideIram = () => {
        indiceIram < certificadosIram.length - 1 ? setIndiceIram(indiceIram + 1) : console.log("Último certificado  Iram.");
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
                            <div className='arrow-back-icono' onClick={() => prevSlideSea()}>
                                <img alt='Arrow Back' src={arrowBack}></img>
                            </div>
                        </div>
                        <div className='certificados-carrousel'>
                            {/* {
                                certificadoSea.map((certificado, index) => <Certificado key={index} {...certificado}/>)
                            } */}
                            <Certificado key={certificadoSea[indiceSea].certificadoId} {...certificadoSea[indiceSea]}/>
                        </div>
                        <div className='arrow-next'>
                            <div className='arrow-next-icono' onClick={() => nextSlideSea()}>
                                <img alt='Arrow Next' src={arrowNext}></img>
                            </div>
                        </div>
                    </div>
                    <div className='logos-certificados-responsive'>
                        <div className='logo-certificado'>
                            <img alt='Logo Sea' src={logoCertificacionSchneider}></img>
                        </div>
                    </div>
                    <div className='componente-carrousel'>
                        <div className='arrow-back'>
                            <div className='arrow-back-icono' onClick={() => prevSlideIram()}>
                                <img alt='Arrow Back' src={arrowBack}></img>
                            </div>
                        </div>
                        <div className='certificados-carrousel'>
                            {/*  {
                                certificadosIram.map((certificado, index) => <Certificado key={index} {...certificado}/>)
                            } */}
                            <Certificado key={certificadosIram[indiceIram].certificadoId} {...certificadosIram[indiceIram]}/>
                        </div>
                        <div className='arrow-next'>
                            <div className='arrow-next-icono' onClick={() => nextSlideIram()}>
                                <img alt='Arrow Next' src={arrowNext}></img>
                            </div>
                        </div>
                    </div>
                    <div className='logos-certificados-responsive'>
                        <div className='logo-certificado-iram'>
                            <img alt='Logo Iram' src={logoCertificacionIram}></img>
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
            <div id='section-clientes'></div>
        </div>
    );
}

export default SectionCertificados;

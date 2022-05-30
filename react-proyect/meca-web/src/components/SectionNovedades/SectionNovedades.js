import './SectionNovedades.css';
import YoutubeEmbed from '../YoutubeEmbed/YoutubeEmbed';
import { useEffect, useState } from 'react';
import arrowBack from '../../imagenes/icono-arrow-back.png';
import arrowNext from '../../imagenes/icono-arrow-next.png';
import {getIdVideos} from '../repositorioNovedadesVideos';


const SectionNovedades = () => {

    const listIdVideos = getIdVideos();

    const [indiceVideo, setIndiceVideo] = useState(0);

    useEffect(
        () => {
            console.log('Se modifico el count.')
        },
        [indiceVideo]
    )

    const prevVideo = () => {
        indiceVideo >= 1 ? setIndiceVideo(indiceVideo - 1) : console.log('Primer video.');
    }

    const nextVideo = () => {
        indiceVideo < listIdVideos.length - 1 ? setIndiceVideo(indiceVideo + 1) : console.log("Último video.");
    }

    return (
        <div className="container-section-novedades" id='section-novedades'>
            <div className='container-background-imagen'>
                <div className='container-novedades'>
                    <div className='novedades-title'>
                        <span className='novedades-titulo'>Novedades</span>
                        <span className='novedades-subtitulo'>¡Enterate de todas las noticias dentro de la #ExperienciaMECA! </span>
                    </div>
                    <div className='arrow-back-video'  onClick={prevVideo}>
                        <div className='arrow-back-video-icono'>
                            <img alt='Arrow Back' src={arrowBack}></img>
                        </div>
                    </div>
                    <div className='novedades-videos'>
                        <div className='novedades-video'>
                            <YoutubeEmbed embedId={listIdVideos[indiceVideo].idVideo} />
                        </div>
                    </div>
                    <div className='arrow-next-video' onClick={nextVideo}>
                        <div className='arrow-next-video-icono'>
                            <img alt='Arrow Next' src={arrowNext}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionNovedades;

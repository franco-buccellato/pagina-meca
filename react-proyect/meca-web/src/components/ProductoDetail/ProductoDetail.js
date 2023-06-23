import './ProductoDetail.css';
import arrowBack from '../../imagenes/icono-arrow-back.webp';
import arrowNext from '../../imagenes/icono-arrow-next.webp';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll} from 'react-scroll';
const imagenProducto = require.context('../../imagenes/Productos/', true);


const ProductoDetail = ({tableroId, titulo, cliente, obra, descripcion, link_imagenes}) => {

    scroll.scrollToTop();

    const [indiceImagen = 1, setIndiceImagen] = useState(0);

    useEffect(
        () => {
        },
        [indiceImagen]
    )

    const prevImagen = () => {
        indiceImagen >= 1 ? setIndiceImagen(indiceImagen - 1) : console.log('Primer Imagen.');
        indiceImagen >= 2 ? console.log('Falta') : ocultarArrowBack();
        mostrarArrowNext();
    }

    const nextImagen = () => {
        indiceImagen < link_imagenes.length - 1 ? setIndiceImagen(indiceImagen + 1) : console.log("Última Imagen.");
        indiceImagen < link_imagenes.length - 2 ? console.log('Falta') : ocultarArrowNext();
        mostrarArrowBack();
    }

    const ocultarArrowNext = () =>  {
        //document.getElementById('arrow-next-id').style = 'display:none';
        document.getElementById('arrow-next-id').style = 'visibility: hidden';
    }
    const mostrarArrowNext = () =>  {
        document.getElementById('arrow-next-id').style = 'visibility:visible';
    }
    const ocultarArrowBack = () =>  {
        document.getElementById('arrow-back-id').style = 'visibility:hidden';
    }
    const mostrarArrowBack = () =>  {
        document.getElementById('arrow-back-id').style = 'visibility:visible';
    }

    return (
        <div className="container-producto">
            <div className="container-atras">
                <Link to ={`/productos`}>
                    <div className="atras-boton">
                        <img alt='Arrow Back' src={arrowBack}></img>
                        <span><b>Atrás</b></span>
                    </div>
                </Link>
            </div>
            <div className="producto-detail">
                <div className="producto-carrousel">
                    <div className='arrow-back-producto-detail' id='arrow-back-id'>
                        <div className='arrow-back-icono-producto-detail' onClick={() => prevImagen()}>
                            <img alt='Arrow Back' src={arrowBack}></img>
                        </div>
                    </div>
                    <div className="producto-imagen">
                        <div className='producto-detail-count'>
                            <span><b>{indiceImagen + 1} / {link_imagenes.length}</b></span>
                        </div>
                        <img
                            alt={tableroId}
                            src = {imagenProducto(`./` + link_imagenes[indiceImagen])}
                            width={600}
                            height={500}
                        ></img>
                    </div>
                    <div className='arrow-next-producto-detail' id='arrow-next-id'>
                        <div className='arrow-next-icono-producto-detail' onClick={() => nextImagen()}>
                            <img alt='Arrow Next' src={arrowNext}></img>
                        </div>
                    </div>
                </div>
                <div className="producto-titulo">
                    <h5>{titulo}</h5>
                </div>
                <div className="producto-descripcion">
                    <span><b>Cliente:</b></span>
                    <span>{cliente}</span>
                    <span><b>Obra:</b></span>
                    <span>{obra}</span>
                    <span><b>Descripción:</b></span>
                    <span>{descripcion}</span>
                </div>
            </div>
        </div>
    )

}
export default ProductoDetail;
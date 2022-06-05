import './ProductoDetail.css';
import arrowBack from '../../imagenes/icono-arrow-back.webp';
import arrowNext from '../../imagenes/icono-arrow-next.webp';
import { useEffect, useState } from 'react';
const imagenProducto = require.context('../../imagenes/Productos/', true);

const ProductoDetail = ({tableroId, titulo, cliente, obra, descripcion, link_imagenes}) => {

    const [indiceImagen, setIndiceImagen] = useState(0);

    useEffect(
        () => {
        },
        [indiceImagen]
    )

    const prevImagen = () => {
        indiceImagen >= 1 ? setIndiceImagen(indiceImagen - 1) : console.log('Primer Imagen.');
    }

    const nextImagen = () => {
        indiceImagen < link_imagenes.length - 1 ? setIndiceImagen(indiceImagen + 1) : console.log("Última Imagen.");
    }

    return (
        <div className="container-producto">
            <div className="producto-detail">
                <div className="producto-carrousel">
                    <div className='arrow-back-producto-detail'>
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
                    <div className='arrow-next-producto-detail'>
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
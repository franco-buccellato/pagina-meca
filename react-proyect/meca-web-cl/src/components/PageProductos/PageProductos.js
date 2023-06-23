import './PageProductos.css';
import {useState, useEffect} from 'react';
import {getProductos} from '../repositorioProductos';
import Loader from '../Loader/Loader';
import PageProductoList from './PageProductoList/PageProductoList';
import fondoTest from '../../imagenes/fondo-encabezado-PageProduct.webp';
import { animateScroll as scroll} from 'react-scroll';

function PageProductos() {

    scroll.scrollToTop();

    const [productos, setProductos] = useState([]);

    useEffect(
        () => {
            getProductos().then(
                listaProductos => {
                    setProductos(listaProductos)
                }
            )
        }, [productos]
    )

    return (
        <div className="page-container">
            <div className="page-productos-container">
                <div className="background-page-productos">
                    <img alt='fondo' src={fondoTest} width={'100%'} height={'100%'}></img>
                </div>
                <div className="page-productos-title">
                    <h4>Nuestros Productos</h4>
                </div>
            </div>
            <div className='list-container'>
                {
                    productos.length > 0 ? <PageProductoList productos = {productos}/> : <Loader/>
                }
            </div>
        </div>
    );
}

export default PageProductos;
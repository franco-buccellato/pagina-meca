import './ProductoList.css';
import Producto from '../Producto/Producto';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import arrowBack from '../../imagenes/icono-arrow-back.webp';
import arrowNext from '../../imagenes/icono-arrow-next.webp';

const ProductoList = ({productos}) => {

    const [indexProducto, setIndexProducto] = useState(0);

    useEffect(
        () => {
            console.log('Se corrio el Producto.');
        },
        [indexProducto]
    )
    const prevProdcut = () => {
        indexProducto >= 1 ? setIndexProducto(indexProducto - 1) : console.log('Primer Poducto.');
    }

    const nextProduct = () => {
        indexProducto < productos.length - 1 ? setIndexProducto(indexProducto + 1) : console.log("Último Producto.");
    }


    return (
        <div className="container-productos-list">
            <div className="container-productos-list-back-rectangle-1">
                <div className="container-productos-list-back-rectangle-2">
                    <div className="container-productos-title">
                        <div className='section-productos-tittle'>
                            <h3 className='productos-tittle'>Nuestros productos</h3>
                        </div>
                        <div className="container-productos">
                            {productos.map((producto, index) => <Producto key={producto.tableroId} {...producto} index={index}/>)}
                        </div>
                        <div className="container-productos-responsive">
                            <div className='arrow-back-product' onClick={() => prevProdcut()}>
                                <div className='arrow-back-icono-product'>
                                    <img alt='Arrow Back' src={arrowBack}></img>
                                </div>
                            </div>
                            <Producto key={productos[indexProducto].tableroId} {...productos[indexProducto]} index={0}/>
                            <div className='arrow-next-product' onClick={() => nextProduct()}>
                                <div className='arrow-next-icono-product'>
                                    <img alt='Arrow Next' src={arrowNext}></img>
                                </div>
                            </div>
                        </div>
                        <div className='section-productos-ver-mas'>
                            <Link to ={`/productos`}>
                                <div className='productos-ver-mas'>
                                    <span className='productos-ver-mas-span'>Ver más</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductoList;
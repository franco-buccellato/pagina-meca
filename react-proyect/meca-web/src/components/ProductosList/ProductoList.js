import './ProductoList.css';
import Producto from '../Producto/Producto';
import { Link } from 'react-router-dom';

const ProductoList = ({productos}) => {
    return (
        <div className="container-productos-list">
            <div className="container-productos-list-back-rectangle-1">
                <div className="container-productos-list-back-rectangle-2">
                    <div className="container-productos-title">
                        <div className='section-productos-tittle'>
                            <h3 className='productos-tittle'>Nuestros Productos</h3>
                        </div>
                        <div className="container-productos">
                            {productos.map(producto => <Producto key={producto.tableroId} {...producto}/>)}
                        </div>
                        <Link to ={`/productos`}>
                            <div className='section-productos-ver-mas'>
                                <div className='productos-ver-mas'>
                                    <span className='productos-ver-mas-span'>Ver mas</span>
                                    </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductoList;
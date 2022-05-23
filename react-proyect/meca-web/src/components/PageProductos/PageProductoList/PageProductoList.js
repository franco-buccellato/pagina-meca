import './PageProductoList.css';
import { Link } from 'react-router-dom';


function PageProductoList({productos}) {

    return (
        <div className="page-container-productos-list">
            <div className="page-container-productos-list-back-rectangle-1">
                <div className="page-container-productos-list-back-rectangle-2">
                    <div className="page-container-productos-title">
                        <div className='page-section-productos-tittle'>
                            <h3 className='page-productos-tittle'>Nuestros Productos</h3>
                        </div>
                        <div className="page-container-productos">
                            {/* {productos.map(producto => <Producto key={producto.productoId} {...producto}/>)} */}
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

export default PageProductoList;
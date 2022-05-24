import './PageProductoList.css';
import Producto from '../../Producto/Producto';

const PageProductoList = ({productos}) => {
    return (
        <div className='page-products-list-container'>
            {productos.map(producto => <Producto key={producto.productoId} {...producto}/>)}
        </div>
    );
}

export default PageProductoList;
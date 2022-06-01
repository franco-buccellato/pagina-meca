import { useEffect, useState } from 'react';
import ProductoDetail from '../ProductoDetail/ProductoDetail';
import Loader from '../Loader/Loader';
import { useParams } from 'react-router-dom';
import { getProductoById } from '../repositorioProductos';

const ProductoDetailContainer = () => {

    const {productId} = useParams();

    const [producto, setProducto] = useState();

    useEffect(
        () => {
            getProductoById(productId).then(
                producto => {
                    setProducto(producto)
                }
            )
        }, [productId]
    )

    return (
        <div className="container-producto-detail-container">
            {
                producto ? <ProductoDetail key={producto.tableroId} {...producto}/> : <Loader />
            }
        </div>
    );
}
export default ProductoDetailContainer;
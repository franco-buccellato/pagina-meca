import {useState, useEffect} from 'react';
import {getProductos} from '../repositorioProductos';
import Loader from '../Loader/Loader';
import PageProductoList from '../PageProductoList/PageProductoList';


function PageProductos() {

    const [productos, setProductos] = useState([]);

    useEffect(
        () => {
            getProductos().then(
                productos => {
                    setProductos(productos)
                }
            )
        }, [productos]
    )

    return (
        <div className="page-productos-container">
            {
                productos.length > 0 ? <PageProductoList productos = {productos}/> : <Loader/>
            }
        </div>
    );
}

export default PageProductos;
import {useState, useEffect} from 'react';
import {getProductos} from '../repositorioProductos';
import Loader from '../Loader/Loader';
import ProductoList from '../ProductosList/ProductoList';


function SectionProductosListContainer() {

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
        <div className="section-productos">
            {
                productos.length > 0 ? <ProductoList productos = {productos}/> : <Loader/>
            }
        </div>
    );
}

export default SectionProductosListContainer;
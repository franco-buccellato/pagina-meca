import './Producto.css';
import { Link } from 'react-router-dom';
/* const imagenProducto = require.context('../../imagenes/Productos/', true); */

const Producto = ({tableroId, titulo, cliente, obra, descripcion, link_imagenes, index}) => {

    return (
        <div className={'container-producto'+index}>
            <Link to ={`/productDetail/${tableroId}`}>
                <div className="container-producto-background-1">
{/*                     <img
                        alt={tableroId}
                        src = {imagenProducto(`./` + link_imagenes[0])}
                    ></img> */}
                    <div className="container-producto-imagen-degrade"></div>
                    <div className="container-producto-background-2">
                        <h5>{titulo}</h5>
                    </div>
                </div>
            </Link>
        </div>
    )

}
export default Producto;
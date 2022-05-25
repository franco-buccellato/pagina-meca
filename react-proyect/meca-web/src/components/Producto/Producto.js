import './Producto.css';
import { Link } from 'react-router-dom';

const Producto = ({tableroId, link_imagenes, titulo, index}) => {

    return (
        <div className={'container-producto'+index}>
            <Link to ={`/productDetail/${tableroId}`}>
                <div className="container-producto-background-1">
                    <img className='container-producto-imagen' alt='test' src={link_imagenes[0]}></img>
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
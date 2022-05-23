import './ProductoDetail.css';

const ProductoDetail = ({tableroId, link_imagenes, titulo, descripcion}) => {

    return (
        <div className="container-producto">
            <span>{titulo}</span>
            <img alt='test' src={link_imagenes[0]}></img>
            <span>{descripcion}</span>
        </div>
    )

}
export default ProductoDetail;
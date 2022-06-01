import './ProductoDetail.css';

const ProductoDetail = ({tableroId, link_imagenes, titulo, descripcion}) => {

    return (
        <div className="container-producto">
            <div className="producto-detail">
                <div className="producto-imagen">
                    <img alt='test' src={link_imagenes[0]} width={700}></img>
                </div>
                <div className="producto-titulo">
                    <h5>{titulo}</h5>
                </div>
                <div className="producto-descripcion">
                    <span>{descripcion}</span>
                </div>
            </div>
        </div>
    )

}
export default ProductoDetail;
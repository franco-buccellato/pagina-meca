import fotoPrueba from '../imagenes/TABLERO-DE-CONTROL-ITAU-4-768x576 1.png';

const listProductos = [
    {
        tableroId : 'TABLERO_1',
        link_imagenes : [
            fotoPrueba,
            fotoPrueba,
            fotoPrueba
        ],
        titulo : 'Tablero Test de Test',
        descripcion : "TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST"
    },
    {
        tableroId : 'TABLERO_2',
        link_imagenes : [
            fotoPrueba,
            fotoPrueba,
            fotoPrueba,
        ],
        titulo : 'Tablero Test de Test',
        descripcion : "TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST"
    },
    {
        tableroId : 'TABLERO_3',
        link_imagenes : [
            fotoPrueba,
            fotoPrueba,
            fotoPrueba
        ],
        titulo : 'Tablero Test de Test',
        descripcion : "TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST TEST"
    }
]

export const getProductos = () => {
    return new Promise (
        resolve => {
            setTimeout(
                () => {
                    resolve(listProductos)
                }, 2000
            )
        }
    )
}

export const getProductoById = (idProducto) => {
    return new Promise (
        resolve => {
            setTimeout(
                () => {
                    resolve(
                        listProductos.find(
                            producto => producto.tableroId === idProducto
                        )
                    )
                }, 2000
            )
        }
    )
}
import fotoPrueba from '../imagenes/TABLERO-DE-CONTROL-ITAU-4-768x576-1.webp';

const listProductos = [
    {
        tableroId : 'TABLERO_1',
        link_imagenes : [
            fotoPrueba,
            fotoPrueba,
            fotoPrueba
        ],
        titulo : 'Tablero de Baja Tensión',
        descripcion : "Tablero de Baja tensión para distribución en los 8 pisos del nuevo edificio que va a ser sede de Google.kdmfksdmfñ kañfkaokaoñs kaoñsk fkdmfksdmfñ kañfkaokaoñs kaoñsk fñosdkfoñdks oñfkds oñ fkdsoñkfño dskf oñdskfoñksdoñ kdmfksdmfñ kañfkaokaoñs kaoñsk fñosdkfoñdks oñfkds oñ fkdsoñkfño dskf oñdskfoñksdoñ kdmfksdmfñ kañfkaokaoñs kaoñsk fñosdkfoñdks oñfkds oñ fkdsoñkfño dskf oñdskfoñksdoñ kdmfksdmfñ kañfkaokaoñs kaoñsk fñosdkfoñdks oñfkds oñ fkdsoñkfño dskf oñdskfoñksdoñ kdmfksdmfñ kañfkaokaoñs kaoñsk fñosdkfoñdks oñfkds oñ fkdsoñkfño dskf oñdskfoñksdoñ kdmfksdmfñ kañfkaokaoñs kaoñsk fñosdkfoñdks oñfkds oñ fkdsoñkfño dskf oñdskfoñksdoñ kdmfksdmfñ kañfkaokaoñs kaoñsk fñosdkfoñdks oñfkds oñ fkdsoñkfño dskf oñdskfoñksdoñ kdmfksdmfñ kañfkaokaoñs kaoñsk fñosdkfoñdks oñfkds oñ fkdsoñkfño dskf oñdskfoñksdoñ kdmfksdmfñ kañfkaokaoñs kaoñsk fñosdkfoñdks oñfkds oñ fkdsoñkfño dskf oñdskfoñksdoñ kdmfksdmfñ kañfkaokaoñs kaoñsk fñosdkfoñdks oñfkds oñ fkdsoñkfño dskf oñdskfoñksdoñ ."
    },
    {
        tableroId : 'TABLERO_2',
        link_imagenes : [
            fotoPrueba,
            fotoPrueba,
            fotoPrueba,
        ],
        titulo : 'Tablero 2',
        descripcion : "TEST 2"
    },
    {
        tableroId : 'TABLERO_3',
        link_imagenes : [
            fotoPrueba,
            fotoPrueba,
            fotoPrueba
        ],
        titulo : 'Tablero 3',
        descripcion : "TEST 3"
    },
    {
        tableroId : 'TABLERO_4',
        link_imagenes : [
            fotoPrueba,
            fotoPrueba,
            fotoPrueba
        ],
        titulo : 'Tablero 4',
        descripcion : "TEST 4"
    },
    {
        tableroId : 'TABLERO_5',
        link_imagenes : [
            fotoPrueba,
            fotoPrueba,
            fotoPrueba,
        ],
        titulo : 'Tablero 5',
        descripcion : "TEST 5"
    },
    {
        tableroId : 'TABLERO_6',
        link_imagenes : [
            fotoPrueba,
            fotoPrueba,
            fotoPrueba
        ],
        titulo : 'Tablero 6',
        descripcion : "TEST 6"
    }
]

export const getProductos = () => {
    return new Promise (
        resolve => {
            setTimeout(
                () => {
                    resolve(listProductos)
                }, 100
            )
        }
    )
}

export const getFirstProductos = () => {
    return new Promise (
        resolve => {
            setTimeout(
                () => {
                    resolve(listProductos.slice(0,3))
                }, 100
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
                }, 100
            )
        }
    )
}
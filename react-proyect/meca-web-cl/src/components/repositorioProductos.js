const listProductos = [
    {
        tableroId : 'TABLERO_1',
        titulo : 'TABLERO GENERAL DE BAJA TENSIÓN',
        cliente: 'RED MASTER',
        obra: 'FACEBOOK',
        descripcion : 'Tablero General de Baja Tensión con transferencia automática RED-GRUPO.',
        link_imagenes: [
            'TABLERO_1/1.webp',
            'TABLERO_1/2.webp',
            'TABLERO_1/3.webp',
            'TABLERO_1/4.webp',
            'TABLERO_1/5.webp',
        ]
    },
    {
        tableroId : 'TABLERO_2',
        titulo : 'RETROFIT',
        cliente: 'CENTURYLINK ',
        obra: 'CLS LAS TONINAS',
        descripcion : 'Retrofit de interruptores Masterpact M por Masterpact MTZ en Tableros SET y TGBT.',
        link_imagenes: [
            'TABLERO_2/1.jpg',
            'TABLERO_2/2.jpg',
            'TABLERO_2/3.jpg',
            'TABLERO_2/4.jpg',
            'TABLERO_2/5.jpg',
        ]
    },
    {
        tableroId : 'TABLERO_3',
        titulo : 'TABLEROS DE GENERACIÓN',
        cliente: 'TOTAL AUSTRAL',
        obra: 'Plataformas Offshore – Río Cullen – Tierra del Fuego',
        descripcion : 'Tableros de generación para cuatro (4) plataformas offshore.',
        link_imagenes: [
            'TABLERO_3/1.jpg',
            'TABLERO_3/2.jpg',
            'TABLERO_3/3.jpg',
            'TABLERO_3/4.jpg',
            'TABLERO_3/5.jpg',
            'TABLERO_4/5.jpg',
        ]
    },
    {
        tableroId : 'TABLERO_4',
        titulo : 'TABLEROS RPP GERENCIABLES',
        cliente: 'LUMEN',
        obra: '',
        descripcion : 'Tablero para monitoreo de salidas individuales.',
        link_imagenes: [
            'TABLERO_4/1.jpg',
            'TABLERO_4/2.jpg',
            'TABLERO_4/3.jpg',
            'TABLERO_4/4.jpg',
            'TABLERO_4/5.jpg',
            'TABLERO_4/6.jpg'
        ]
    },
    {
        tableroId : 'TABLERO_5',
        titulo : 'TABLEROS PETROLEROS',
        cliente: 'METALÚIRGICA SIAM-ARCÓN',
        obra: 'YPF - NEUQUÉN',
        descripcion : 'Tableros tipo petrolero equipados con sendos Variadores de Velocidad (VDF) para arranque de motores eléctricos de impulsión de bombas de 300 HP.',
        link_imagenes: [
            'TABLERO_5/1.jpg',
            'TABLERO_5/2.jpg',
            'TABLERO_5/3.jpg',
            'TABLERO_5/4.jpg',
            'TABLERO_5/5.jpg',
            'TABLERO_5/6.jpg'
        ]
    },
    {
        tableroId : 'TABLERO_6',
        titulo : 'TABLERO DE CONTROL Y SINCRONISMO',
        cliente: 'FINNING ARGENTINA',
        obra: 'PLANTA ITAÚ - BOLIVIA',
        descripcion : 'Tablero de Control, Sincronismo y Potencia para tres (3) grupos electrógenos CAT de 450 kVA.',
        link_imagenes: [
            'TABLERO_6/1.jpg',
            'TABLERO_6/2.jpg',
            'TABLERO_6/3.jpg',
            'TABLERO_6/4.jpg'
        ]
    },
    {
        tableroId : 'TABLERO_7',
        titulo : 'CELDAS DE MEDIA TENSIÓN',
        cliente: 'LUMEN',
        obra: 'HEAD END ARTIGAS',
        descripcion : 'Tablero de Control, Sincronismo y Potencia para tres (3) grupos electrógenos CAT de 450 kVA.',
        link_imagenes: [
            'TABLERO_7/1.jpg',
            'TABLERO_7/2.jpg',
            'TABLERO_7/3.jpg',
            'TABLERO_7/4.jpg',
            'TABLERO_7/5.jpg',
            'TABLERO_7/6.jpg'
        ]
    },
    {
        tableroId : 'TABLERO_8',
        titulo : 'RACKS OUTDOOR',
        cliente: 'CENTURYLINK',
        obra: 'HEAD END ARTIGAS',
        descripcion : 'Rack outdoor de doble cuerpo con aire acondicionado.',
        link_imagenes: [
            'TABLERO_8/1.jpg',
            'TABLERO_8/2.jpg',
            'TABLERO_8/3.jpg',
            'TABLERO_8/4.jpg',
            'TABLERO_8/5.jpg',
            'TABLERO_8/6.jpg',
            'TABLERO_8/7.jpg',
            'TABLERO_8/8.jpg',
            'TABLERO_8/9.jpg'
        ]
    },
    {
        tableroId : 'TABLERO_9',
        titulo : 'TABLERO DE DOMÓTICA',
        cliente: 'VIVIR INTELIGENTE',
        obra: 'HOGAR RESIDENCIAL',
        descripcion : 'Tablero con módulos domóticos para control de iluminación y fuerza motriz.',
        link_imagenes: [
            'TABLERO_9/1.jpg',
            'TABLERO_9/2.jpg',
            'TABLERO_9/3.jpg',
            'TABLERO_9/4.jpg'
        ]
    },
    {
        tableroId : 'TABLERO_12',
        titulo : 'SET COMPACTA',
        cliente: 'TOTAL AUSTRAL',
        obra: 'Estación Transformadora Alfa Sur',
        descripcion : 'Subestación transformadora compacta modelo Biosco.',
        link_imagenes: [
            'TABLERO_12/1.jpg',
            'TABLERO_12/2.jpg',
            'TABLERO_12/3.jpg',
            'TABLERO_12/4.jpg',
            'TABLERO_12/5.jpg'
        ]
    },
    {
        tableroId : 'TABLERO_13',
        titulo : 'TABLERO DE CORRIENTE NOMINAL 5000A',
        cliente: 'CENTURYLINK',
        obra: 'AMPLIACIÓN ARTIGAS I',
        descripcion : 'Tablero de potencia para transformadores 3150kVA.',
        link_imagenes: [
            'TABLERO_13/1.jpg',
            'TABLERO_13/2.jpg',
            'TABLERO_13/3.jpg',
            'TABLERO_13/4.jpg',
            'TABLERO_13/5.jpg',
            'TABLERO_13/6.jpg',
            'TABLERO_13/7.jpg',
            'TABLERO_13/8.jpg',
            'TABLERO_13/9.jpg'
        ]
    },
    {
        tableroId : 'TABLERO_14',
        titulo : 'BLINDOBARRAS',
        cliente: 'CENTURYLINK',
        obra: 'AMPLIACIÓN ARTIGAS I',
        descripcion : 'Ducto de barras para interconexión entre TGBT y transformador de potencia de 3150Kva.',
        link_imagenes: [
            'TABLERO_14/1.jpg',
            'TABLERO_14/2.jpg',
            'TABLERO_14/3.jpg',
            'TABLERO_14/4.jpg',
            'TABLERO_14/5.jpg',
            'TABLERO_14/6.jpg'
        ]
    },
/*     {
        tableroId : 'TABLERO_15',
        titulo : 'MANTENIMIENTO DE SET',
        cliente: 'ASOCIACIÓN ESCUELAS LINCOLN',
        obra: 'MANTENIMIENTO ANUAL',
        descripcion : 'Mantenimiento en celdas de media tensión, transformador y TGBT.',
        link_imagenes: [
        ]
    },
    {
        tableroId : 'TABLERO_16',
        titulo : 'MANTENIMIENTO DE PAT',
        cliente: 'TOTAL AUSTRAL',
        obra: 'YACIMIENTOS EN NEQUÉN Y TIERRA DEL FUEGO ANUAL',
        descripcion : 'Medición y mantenimiento de PAT en Yacimientos y Plataformas Offshore.',
        link_imagenes: [
        ]
    }, */
    {
        tableroId : 'TABLERO_17',
        titulo : 'MONTAJES DE BANDEJAS DE FIBRA ÓPTICA',
        cliente: 'CENTURYLINK',
        obra: 'SALA GOOGLE - ARTIGAS',
        descripcion : 'Montaje e instalación de bandejas para cable de fibra óptica.',
        link_imagenes: [
            'TABLERO_17/1.jpg',
            'TABLERO_17/2.jpg'
        ]
    },
    {
        tableroId : 'TABLERO_18',
        titulo : 'MONTAJES Y TENDIDO DE CONDUCTORES EN BANDEJAS PORTACABLES',
        cliente: 'CENTURYLINK',
        obra: 'SALA AMAZON - ARTIGAS',
        descripcion : 'Montaje y tendido de conductores en bandejas portacables.',
        link_imagenes: [
            'TABLERO_18/1.jpg',
            'TABLERO_18/2.jpg',
            'TABLERO_18/3.jpg',
            'TABLERO_18/4.jpg'
        ]
    },
    {
        tableroId : 'TABLERO_19',
        titulo : 'INGENIERÍA, INSTALACIÓN Y PUESTA EN MARCHA',
        cliente: 'CENTURYLINK',
        obra: 'AMPLIACIÓN ARTIGAS I',
        descripcion : 'Montaje e instalación de celdas de MT, nuevo TGBT, tableros seccionales, grupos electrógenos, canalizaciones aéreas y bajo piso técnico y puesta en marcha del sistema.',
        link_imagenes: [
            'TABLERO_19/1.jpeg',
            'TABLERO_19/2.jpg',
            'TABLERO_19/3.jpg',
            'TABLERO_19/4.jpg',
            'TABLERO_19/5.jpg',
            'TABLERO_19/6.jpg',
            'TABLERO_19/7.jpg',
            'TABLERO_19/8.jpg',
            'TABLERO_19/9.jpg',
            'TABLERO_19/10.jpg',
            'TABLERO_19/11.jpg',
            'TABLERO_19/12.jpg',
            'TABLERO_19/13.jpg',
            'TABLERO_19/14.jpg',
            'TABLERO_19/15.jpg',
            'TABLERO_19/16.jpg',
            'TABLERO_19/17.jpg',
            'TABLERO_19/18.jpg',
            'TABLERO_19/19.jpg',
            'TABLERO_19/20.jpg'
        ]
    },
    {
        tableroId : 'TABLERO_20',
        titulo : 'TABLERO PARA FILTRADO DE ARMÓNICOS',
        cliente: 'ENAP',
        obra: 'PLATAFORMAS OFFSHORE – RÍO GALLEGOS',
        descripcion : 'Montaje e instalación filtros de armónicos.',
        link_imagenes: [
            'TABLERO_20/1.jpg',
            'TABLERO_20/2.jpg',
            'TABLERO_20/3.jpg',
            'TABLERO_20/4.jpg',
            'TABLERO_20/5.jpg'
        ]
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
                }, 1000
            )
        }
    )
}
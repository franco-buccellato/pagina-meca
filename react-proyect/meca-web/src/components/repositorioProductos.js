const listProductos = [
    {
        tableroId : 'TABLERO_1',
        titulo : 'TABLERO GENERAL DE BAJA TENSIÓN',
        cliente: 'RED MASTER',
        obra: 'FACEBOOK',
        descripcion : 'Tablero General de Baja Tensión con transferencia automática RED-GRUPO.',
        link_imagenes: [
            'TABLERO_1/1.jpg',
            'TABLERO_1/2.jpg',
            'TABLERO_1/3.jpg',
            'TABLERO_1/4.jpg',
            'TABLERO_1/5.jpg',
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
        ]
    },
    {
        tableroId : 'TABLERO_4',
        titulo : 'TABLEROS RPP GERENCIABLES',
        cliente: 'LUMEN',
        obra: '',
        descripcion : 'Tablero para monitoreo de salidas individuales.',
        link_imagenes: [
        ]
    },
    {
        tableroId : 'TABLERO_5',
        titulo : 'TABLERO PETROLEROS',
        cliente: 'METALÚIRGICA SIAM-ARCÓN',
        obra: 'YPF - NEUQUÉN',
        descripcion : 'Tableros tipo petrolero equipados con sendos Variadores de Velocidad (VDF) para arranque de motores eléctricos de impulsión de bombas de 300 HP.',
        link_imagenes: [
        ]
    },
    {
        tableroId : 'TABLERO_6',
        titulo : 'TABLERO DE CONTROL Y SINCRONISMO',
        cliente: 'FINNING ARGENTINA',
        obra: 'PLANTA ITAÚ - BOLIVIA',
        descripcion : 'Tablero de Control, Sincronismo y Potencia para tres (3) grupos electrógenos CAT de 450 kVA.',
        link_imagenes: [
        ]
    },
    {
        tableroId : 'TABLERO_7',
        titulo : 'CELDAS DE MEDIA TENSIÓN',
        cliente: 'LUMEN',
        obra: 'HEAD END ARTIGAS',
        descripcion : 'Tablero de Control, Sincronismo y Potencia para tres (3) grupos electrógenos CAT de 450 kVA.',
        link_imagenes: [
        ]
    },
    {
        tableroId : 'TABLERO_8',
        titulo : 'RACKS OUTDOOR',
        cliente: 'CENTURYLINK',
        obra: 'HEAD END ARTIGAS',
        descripcion : 'Rack outdoor de doble cuerpo con aire acondicionado.',
        link_imagenes: [
        ]
    },
    {
        tableroId : 'TABLERO_9',
        titulo : 'TABLERO DE DOMÓTICA',
        cliente: 'VIVIR INTELIGENTE',
        obra: 'HOGAR RESIDENCIAL',
        descripcion : 'Tablero con módulos domóticos para control de iluminación y fuerza motriz.',
        link_imagenes: [
        ]
    },
    {
        tableroId : 'TABLERO_10',
        titulo : 'TABLERO PARA ARRANQUE DE MOTORES',
        cliente: 'TOTAL AUSTRAL',
        obra: 'YACIMIENTO RINCÓN DE LA CENIZA - NEUQUÉN',
        descripcion : 'Tablero para arranque y control de motores',
        link_imagenes: [
        ]
    },
    {
        tableroId : 'TABLERO_11',
        titulo : 'TABLERO PARA FILTRADO DE ARMÓNICOS',
        cliente: 'ENAP',
        obra: 'PLATAFORMAS OFFSHORE – RÍO GALLEGOS',
        descripcion : 'Tablero para filtrado de armónicos y compensación de energía reactiva.',
        link_imagenes: [
        ]
    },
    {
        tableroId : 'TABLERO_12',
        titulo : 'SET COMPACTA',
        cliente: 'TOTAL AUSTRAL',
        obra: 'Estación Transformadora Alfa Sur',
        descripcion : 'Subestación transformadora compacta modelo Biosco.',
        link_imagenes: [
        ]
    },
    {
        tableroId : 'TABLERO_13',
        titulo : 'TABLERO POTENCIA DE 5000A',
        cliente: 'CENTURYLINK',
        obra: 'AMPLIACIÓN ARTIGAS I',
        descripcion : 'Tablero de potencia para transformadores 3150kVA.',
        link_imagenes: [
        ]
    },
    {
        tableroId : 'TABLERO_14',
        titulo : 'BLINDOBARRAS',
        cliente: 'CENTURYLINK',
        obra: 'AMPLIACIÓN ARTIGAS I',
        descripcion : 'Ducto de barras para interconexión entre TGBT y transformador de potencia de 3150Kva.',
        link_imagenes: [
        ]
    },
    {
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
    },
    {
        tableroId : 'TABLERO_17',
        titulo : 'MONTAJES DE BANDEAS DE FIBRA ÓPTICA',
        cliente: 'CENTURYLINK',
        obra: 'SALA GOOGLE - ARTIGAS',
        descripcion : 'Montaje e instalación de bandejas para cable de fibra óptica.',
        link_imagenes: [
        ]
    },
    {
        tableroId : 'TABLERO_18',
        titulo : 'MONTAJES Y TENDIDO DE CONDUCTORES EN BANDEAS PORTCABLES',
        cliente: 'CENTURYLINK',
        obra: 'SALA AMAZON - ARTIGAS',
        descripcion : 'Montaje y tendido de conductores en bandejas portcables.',
        link_imagenes: [
        ]
    },
    {
        tableroId : 'TABLERO_19',
        titulo : 'INGENIERÍA, INSTALACIÓN Y PUESTA EN MARCHA',
        cliente: 'CENTURYLINK',
        obra: 'AMPLIACIÓN ARTIGAS I',
        descripcion : 'Montaje e instalación de celdas de MT, nuevo TGBT, tableros seccionales, grupos electrógenos, canalizaciones aéreas y bajo piso técnico y puesta en marcha del sistema.',
        link_imagenes: [
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
                }, 100
            )
        }
    )
}
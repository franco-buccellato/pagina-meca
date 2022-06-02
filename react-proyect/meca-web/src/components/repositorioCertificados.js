const certificadoSchneider =
    [   
        {
            certificadoId : 0,
            linkImagen: 'convenio-schneider-certificaciones.webp',
            titulo: 'NUESTRO CONVENIO',
            detalle: 'Schneider Electric Argentina nos certificó como Integradores EcoExpert Premier Plus por nuestra trayectoria y calidad.'
        },
        {
            certificadoId : 1,
            linkImagen: 'lvpanel-schneider-certificaciones-small-min.webp',
            titulo: 'CERTIFICADO LV PANEL',
            detalle: 'Poseemos una certificación como ECOXPERT LOW VOLTAGE PANEL PANEL PREMIER PLUS; la cual nos habilita a todo el proceso de desarollo de tableros en baja tensión para los distintos sectores de la industría y oficina.'
        },
        {
            certificadoId : 2,
            linkImagen: 'apm-schneider-certificaciones.webp',
            titulo: 'APM PARTNER',
            detalle: 'Nos capacitamos en la gama de productos Altivar ™ Process Modular; el cual es un variador de velocidad orientado a servicios, diseñado para mejorar el rendimiento del equipo, reducir los costos operativos al permitir la optimización del proceso, el mantenimiento predictivo y mejorar el consumo de energía.'
        }
    ]

const certificadoIram =
[   
    {
        certificadoId : 0,
        linkImagen: 'image 3certificado-iram.svg',
        titulo: 'ENTREGA CERTIFICADO',
        detalle: 'Tenemos certificado nuestro Sistema de Gestión de Calidad bajo los estándares de la norma de ISO 9001:2015, en el que definimos nuestro alcance en: “Diseño, fabricación y puesta en marcha de tableros eléctricos de media y baja tensión para la generación y distribución de energía eléctrica.”'
    },
    {
        certificadoId : 1,
        linkImagen: 'certificado-iso-9001.svg',
        titulo: 'CERTIFICADO IRAM-ISO 9001:2018',
        detalle: 'Seguimos renovando la Normas ISO 9001:2018, cuyo alcance es: “Diseño, fabricación y puesta en marcha de tableros eléctricos de media y baja tensión para la generación y distribución de energía eléctrica.”'
    },
    {
        certificadoId : 2,
        linkImagen: 'certificado-iso-45001.svg',
        titulo: 'CERTIFICADO IRAM-ISO 45001:2018',
        detalle: 'Migramos de Normas OSHAS 18001:2017 a Normas ISO 45001:2018, cuyo alcance es: “Diseño, fabricación y puesta en marcha de tableros eléctricos de media y baja tensión para la generación y distribución de energía eléctrica.”'
    }
]

export const getCertificadosSchneider = () => {
    return certificadoSchneider;
}

export const getCertificadosIram = () => {
    return certificadoIram;
}
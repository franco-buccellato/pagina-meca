/*Schneider*/
import certificadoConvenio from '../imagenes/lvpanel-schneider-certificaciones.webp';
import certificadoLV from '../imagenes/lvpanel-schneider-certificaciones.webp';
import certificadoAPM from '../imagenes/apm-schneider-certificaciones.webp';
/*Iram*/
import certificadoEntrega from '../imagenes/lvpanel-schneider-certificaciones.webp';
import IRAM9001 from '../imagenes/lvpanel-schneider-certificaciones.webp';
import IRAM45001 from '../imagenes/lvpanel-schneider-certificaciones.webp';

const certificadoSchneider =
    [   
        {
            certificadoId : 0,
            linkImagen: {certificadoConvenio},
            titulo: 'NUESTRO CONVENIO',
            detalle: 'Schneider Electric Argentina nos certificó como Integradores EcoExpert Premier Plus por nuestra trayectoria y calidad.'
        },
        {
            certificadoId : 1,
            linkImagen: {certificadoLV},
            titulo: 'CERTIFICADO LV PANEL',
            detalle: 'Poseemos una certificación como ECOXPERT LOW VOLTAGE PANEL PANEL PREMIER PLUS; la cual nos habilita a todo el proceso de desarollo de tableros en baja tensión para los distintos sectores de la industría y oficina.'
        },
        {
            certificadoId : 2,
            linkImagen: {certificadoAPM},
            titulo: 'APM PARTNER',
            detalle: 'Nos capacitamos en la gama de productos Altivar ™ Process Modular; el cual es un variador de velocidad orientado a servicios, diseñado para mejorar el rendimiento del equipo, reducir los costos operativos al permitir la optimización del proceso, el mantenimiento predictivo y mejorar el consumo de energía.'
        }
    ]

const certificadoIram =
[   
    {
        certificadoId : 0,
        linkImagen: {certificadoEntrega},
        titulo: 'ENTREGA CERTIFICADO',
        detalle: 'Tenemos certificado nuestro Sistema de Gestión de Calidad bajo los estándares de la norma de ISO 9001:2015, en el que definimos nuestro alcance en: “Diseño, fabricación y puesta en marcha de tableros eléctricos de media y baja tensión para la generación y distribución de energía eléctrica.”'
    },
    {
        certificadoId : 1,
        linkImagen: {IRAM9001},
        titulo: 'CERTIFICADO IRAM-ISO 9001:2018',
        detalle: 'Seguimos renovando la Normas ISO 9001:2018, cuyo alcance es: “Diseño, fabricación y puesta en marcha de tableros eléctricos de media y baja tensión para la generación y distribución de energía eléctrica.”'
    },
    {
        certificadoId : 2,
        linkImagen: {IRAM45001},
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
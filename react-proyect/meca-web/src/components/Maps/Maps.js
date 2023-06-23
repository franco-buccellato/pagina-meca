import React from 'react'
import './Maps.css'

const Maps = () => {
    return (
        <section className='maps container'>
            <div className="container-row">
                <div className="container-colum-iframe">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1643.587906000497!2d-58.529254866309486!3d-34.5237734271554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb0c13b8dfa99%3A0xae63609677c33b97!2sGral.%20Belgrano%203257%2C%20B1605CGS%20Munro%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1654480554269!5m2!1ses-419!2sar"
                    /* width="600" */
                    height="450"
                    style={{ border: 0 }}
                    loading="lazy"
                    /* referrerpolicy="no-referrer-when-downgrade" */
                ></iframe>
                </div>
                <div className="container-colum">
                    <div className="row">
                        <div className="col s12 boxInfo">
                            <div>
                                <ion-icon name="location-outline"></ion-icon>
                            </div>
                            <div>
                                <p><b>Dirección de Administración:</b></p>
                                <p>Correa 2260, 4º P, Depto. 17, C.A.B.A. Argentina.</p>
                                <p><b>Dirección de Planta Industrial:</b></p>
                                <p>Gral. Belgrano 3257, Munro, Vicente López, Buenos Aires Argentina.</p>
                                <p><b>Dirección de Agencia Comercial en Chile:</b></p>
                                <p>Camino Otoñal 1639, Las Condes, Santiago, Chile.</p>
                                <p><b>Dirección de Planta Industrial en Chile:</b></p>
                                <p>La Montaña 464, Comuna de Colina, Región Metropolitana, Santiago, Chile.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Maps
import React from 'react'
import './Maps.css'

const Maps = () => {
    return (
        <section className='maps container'>
            <div className="container-row">
                <div className="container-colum-iframe">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4715.454401863739!2d-70.71640495625442!3d-33.31019280890143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662b8b46604ca01%3A0xa279654663c52f70!2sLa%20Monta%C3%B1a%20464%2C%20Colina%2C%20Regi%C3%B3n%20Metropolitana%2C%20Chile!5e0!3m2!1ses-419!2sar!4v1687540209608!5m2!1ses-419!2sar"
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
                                <p><b>Dirección de Agencia Comercial:</b></p>
                                <p>Camino Otoñal 1639, Las Condes, Santiago, Chile.</p>
                                <p><b>Dirección de Planta Industrial:</b></p>
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
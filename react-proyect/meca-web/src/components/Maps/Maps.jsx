import React from 'react'
import './Maps.css'

const Maps = () => {
    return (
        <section className='maps container'>
            <div className="row">
                {/* <div className="col m6 s12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13136.590722976262!2d-58.565810549999995!3d-34.60042695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1654219465385!5m2!1ses!2sar" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div> */}
                <div className="col m6 s12">
                    <div className="row">
                        <div className="col s12 boxInfo">
                            <div>
                                <i class="material-icons">location_on</i>
                            </div>
                            <div>
                                <p>Dirección de Administración:
                                    Correa 2260, 4º P, Apt. 17, C.A.B.A. Argentina.</p>
                                <p>Dirección de Planta Industrial:
                                    Gral. Belgrano 3257, Munro, Vicente López, Bs. As. Argentina.</p>
                                <p>Agencia en Chile:
                                    Camino Otoñal 1639, Las Condes, Santiago, Chile.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 boxInfo">
                            <i class="material-icons">mail_outline</i>
                            <p>rrhh@mecaelectromecanica.com.ar</p>
                            <p>administracion@mecaelectromecanica.com.ar</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 boxInfo">
                            <i class="material-icons">phone_iphone</i>
                            <p>	+54 11 4756 7057</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Maps
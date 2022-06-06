import React from 'react'
import InputBox from '../InputBox/InputBox'
import TextArea from '../TextArea/TextArea'

const Form = () => {

    return (
        <form>
            <div className="form-row" >
                <InputBox
                    caption="* Nombre"
                    type="text"
                />
                <InputBox
                    caption="* Apellido"
                    type="text"
                />
            </div>
            <div className="form-row">
                <InputBox
                    caption="* E-mail"
                    type="email"
                />
                <InputBox
                    caption="Teléfono"
                    type="tel"
                />
            </div>
            <div className="form-row">
                <TextArea
                    caption="Escriba aquí su mensaje"
                />
            </div>
            <div className="form-row">
                <InputBox
                    caption="Seleccionar archivo para subir"
                    type="file"
                />
            </div>
            <div className="form-row">
                <a href=
                'mailto:info@mecaelectromecanica.com.ar?Subject=Quiero%20trabajar%20con%20ustedes'>
                    <InputBox
                        caption="Enviar"
                        type="enviar"
                    />
                </a>
            </div>
        </form>
    )
}

export default Form
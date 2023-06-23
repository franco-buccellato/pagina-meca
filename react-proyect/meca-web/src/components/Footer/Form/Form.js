import React from 'react'
import InputBox from '../InputBox/InputBox'
import TextArea from '../TextArea/TextArea'
import SendEmail from '../../../enviarMail'

const Form = () => {

    return (
        <form nSubmit = {SendEmail}>
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
                <TextArea
                    caption="Escriba aquí su mensaje"
                />
            </div>
            <div className="form-row">
                    <InputBox
                        caption="Enviar"
                        type="submit"
                    />
            </div>
        </form>
    )
}

export default Form
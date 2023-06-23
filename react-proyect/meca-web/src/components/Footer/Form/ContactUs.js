import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ApiKey from "../../../ApiKey";
import InputBox from '../InputBox/InputBox';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
            ApiKey.SERVICE_ID,
            ApiKey.TEMPLATE_ID,
            form.current,
            ApiKey.USER_ID
        ).then(
            (result) => {
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
        document.getElementById("nombre_id").value = '';
        document.getElementById("mail_id").value = '';
        document.getElementById("mensaje_id").value = '';
};

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="form-row" >
                <InputBox
                    caption="* Nombre"
                    type="text"
                    name="user_name"
                    id="nombre_id"
                />
                <InputBox
                    caption="* Mail"
                    type="email"
                    name="user_email"
                    id="mail_id"
                />
            </div>
            <textarea name="message" placeholder="* Mensaje" data-length="150" id="mensaje_id"/>
            <input type="submit" value="Enviar" />
        </form>
    );
};

export default ContactUs
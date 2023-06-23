import React from 'react'
import './Footer.css'
import Title from './Title/Title'
//import Form from './Form/Form'
import ContactUs from './Form/ContactUs'
import Message from './Message/Message'
import Logo from './Logo/Logo'

const Footer = () => {
    return (
        <footer>
            <div className="container-footer" id='section-contactanos'>
                <div className="container-row">
                    <div className="container-title">
                        <Title/>
                    </div>
                </div>
                <div className="container-row-column">
                    <div className="container-form">
                        <ContactUs/>
                    </div>
                    <div className="container-logo">
                        <div className="logo">
                            <Logo/>
                        </div>
                        <div className="message">
                            <Message/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
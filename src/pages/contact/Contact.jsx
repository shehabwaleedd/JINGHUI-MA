import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <section className='contact'>
            <div className="contact__container container">
                <div className="contact__left">
                    <div className="left__upper">
                        <h1>GENERAL ENQUIRIES & COMMERCIAL BOOKINGS</h1>
                        <span><a href="mailto: info@jinghuima.com">info@jinghuima.com</a></span>
                    </div>
                </div>
                <div className="contact__right">
                    <div className="left__lower">
                        <h1>IMAGE LICENSING REQUESTS</h1>
                        <div className="lower__content">
                            <h1>JIN ARCHIVE</h1>
                            <span><a href="mailto: info@jinghuima.com">contact@jinghuima.com</a></span>
                            <p>+13073399113</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
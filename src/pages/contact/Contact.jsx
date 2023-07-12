import React from 'react'
import './Contact.css'
import {motion} from 'framer-motion'

const Contact = () => {
    return (
        <motion.section className='contact'
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeInOut" }}
        exit={{ opacity: 0 }}>
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
        </motion.section>
    )
}

export default Contact
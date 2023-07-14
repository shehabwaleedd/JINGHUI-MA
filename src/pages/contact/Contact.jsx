import React from 'react'
import './Contact.css'
import {motion} from 'framer-motion'

const Contact = () => {
    return (
        <motion.section className='contact'
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0, type: "tween", transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} 
        exit={{ opacity: 0, y: 150, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}
        >
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
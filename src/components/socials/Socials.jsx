import React from 'react'
import './Socials.css'
import { BiLogoFacebookCircle } from 'react-icons/bi'
import { FaInstagram } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'

const Socials = () => {
    return (
        <div className='socials'>
            <div className="socials__container">
                <div className="socials__content">
                    <ul>
                        <li>
                            <a href="https://www.instagram.com/jinghuima/" target="_blank" rel="noreferrer">
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/jinghui.ma.5" target="_blank" rel="noreferrer">
                                <BiLogoFacebookCircle />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/jinghuima" target="_blank" rel="noreferrer">
                                <AiOutlineTwitter />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Socials
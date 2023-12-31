import React from 'react'
import './About.css'
import cover from '../../Assets/photoprofil.webp'
import Socials from '../../components/socials/Socials'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.section className='about'        
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0, type: "tween", transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} 
        exit={{ opacity: 0, y: 150, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}
        >
            <div className="about__container container">
                <div className="about__left">
                    <img src={cover} alt="" />
                    <Socials />
                </div>
                <div className="about__right">
                    <h1 className='about__title'>About JINGHUI MA</h1>
                    <p className='about__description'>
                        Jinghui Ma is a talented Chinese photographer with a unique perspective on capturing the world through her lens. Born and raised in Beijing, Jinghui developed a deep passion for photography from a young age. She was captivated by the ability of a single photograph to convey emotions, tell stories, and evoke a sense of wonder.
                    </p>
                    <p>
                        After completing her studies in photography in Beijing, Jinghui set her sights on expanding her artistic horizons. She embarked on a life-changing journey to Paris, where she continued her education and honed her skills under the guidance of renowned photographers. The vibrant city of Paris, with its rich history, culture, and artistic atmosphere, provided the perfect backdrop for Jinghui to explore new techniques and push the boundaries of her creativity.
                    </p>
                    <p>
                        Now, as a free spirit, Jinghui roams the world, seeking inspiration in every corner. She has a nomadic soul, driven by a deep desire to capture the essence of different cultures, landscapes, and people. From the bustling streets of Tokyo to the serene landscapes of the Himalayas, Jinghui immerses herself in diverse environments, always with her camera by her side.
                    </p>
                    <p>
                        Jinghui's photography reflects her unique perspective and passion for storytelling. Her images are a harmonious blend of visual aesthetics and emotional depth. Through her lens, she captures fleeting moments of beauty, raw emotions, and the inherent connections between humans and their surroundings.
                    </p>
                    <p>
                        With an innate ability to find beauty in the ordinary, Jinghui's photographs evoke a sense of wonder and invite viewers to see the world through her eyes. She believes that photography has the power to transcend boundaries and bridge cultures, allowing us to appreciate the diversity and interconnectedness of our global community.
                    </p>
                    <p>
                        Jinghui Ma's free-spirited nature and unwavering dedication to her craft have made her a rising star in the world of photography. Her work continues to inspire and resonate with audiences around the world, reminding us of the universal language of art and the transformative power of capturing moments frozen in time.
                    </p>
                </div>
            </div>
        </motion.section>
    )
}

export default About
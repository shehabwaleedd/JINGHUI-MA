import React from 'react'
import { useEffect, useRef, useState } from 'react';
import Data from '../../Data'
import styles from './page.module.scss'
import { motion, AnimatePresence, useTransform, useScroll } from 'framer-motion'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import Lenis from '@studio-freight/lenis'


const DesktopHome = ({ selectedImage, currentIndex, handleSwipeLeft, handleSwipeRight, handleModalSwipe, openPreview, closePreview }) => {
    const gallery = useRef(null);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ['start end', 'end start']
    })
    const { height } = dimension;
    const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
    const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 4.3])
    const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
    const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 5])

    useEffect(() => {
        const lenis = new Lenis()

        const raf = (time) => {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        const resize = () => {
            setDimension({ width: window.innerWidth, height: window.innerHeight })
        }

        window.addEventListener("resize", resize)
        requestAnimationFrame(raf);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        }
    }, [])
    return (
        <motion.main className='home' initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 150, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>
            <div className={styles.spacer}></div>
            <div ref={gallery} className={styles.gallery}>
                <div ref={gallery} className={styles.gallery} >
                    <Column data={[Data[0], Data[1], Data[18], Data[19], Data[20], Data[2]]} y={y} openPreview={openPreview} />
                    <Column data={[Data[3], Data[4], Data[5], Data[14], Data[15], Data[16], Data[17], Data[29]]} y={y2} openPreview={openPreview} />
                    <Column data={[Data[6], Data[7], Data[8], Data[21], Data[22], Data[23], Data[24]]} y={y3} openPreview={openPreview} />
                    <Column data={[Data[9], Data[10], Data[11], Data[25], Data[26], Data[27], Data[28], Data[13]]} y={y4} openPreview={openPreview} />

                </div>
            </div>
            <div className={styles.spacer}></div>
            <AnimatePresence>
                {selectedImage && (
                    <motion.div className='preview__modal' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }}
                        {...handleModalSwipe}>
                        <div className='preview__close'>
                            <button onClick={closePreview}>X</button>
                        </div>
                        <motion.div className='preview__content'>
                            <div className='preview__buttons'>
                                <button className='button__prev' onClick={handleSwipeRight} disabled={currentIndex === 0}>
                                    <IoIosArrowBack />
                                </button>
                                <button className='button__next' onClick={handleSwipeLeft} disabled={currentIndex === Data.length - 1}>
                                    <IoIosArrowForward />
                                </button>
                            </div>
                            <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} exit={{ opacity: 0 }} src={selectedImage} alt='Preview' />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.main>
    )
}

export default DesktopHome


const Column = ({ data, y, openPreview }) => {
    return (
        <motion.div className={styles.column} style={{ y }}>
            {data.map((item, i) => {
                return (
                    <div key={i} className={styles.imageContainer} onClick={() => openPreview(item.img, i)}>
                        <img src={item.img} alt="emage" 
                                srcSet={[ `${item.img_300px}?w=300&format=webp 300w`,
                                `${item.img_600px}?w=600&format=webp 600w`,
                                `${item.img_900px}?w=900&format=webp 900w`,
                                `${item.img}?w=1200&format=webp 1200w`,
                            ]}
                        
                        /> {/* Access the img property */}
                    </div>
                );
            })}
        </motion.div>
    );
};
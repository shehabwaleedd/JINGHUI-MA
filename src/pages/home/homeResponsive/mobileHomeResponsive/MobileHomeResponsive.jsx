import React from 'react'
import './MobileHomeResponsive.css'
import Data from '../../Data'
import { motion, AnimatePresence } from 'framer-motion'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'


const MobileHomeResponsive = ({ openPreview, selectedImage, currentIndex, handleSwipeLeft, handleSwipeRight, handleModalSwipe, closePreview }) => {
    return (
        <motion.main className='home' initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 150, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>
            <div className='home__container-mobilee containered'>
                <div className='home__grid-mobile'>
                    {Data.map(({ img, id, img_300px, img_600px, img_900px }, index) => (
                        <div key={id} className='grid__item-mobile' onClick={() => openPreview(img, index)}>
                            <LazyLoadImage
                                src={img}
                                alt='sass'
                                effect='blur'
                                srcSet={[
                                    `${img_300px}?w=300&format=webp 300w`,
                                    `${img_600px}?w=600&format=webp 600w`,
                                    `${img_900px}?w=900&format=webp 900w`,
                                ]}
                            />
                        </div>
                    ))}
                </div>
            </div>
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

export default MobileHomeResponsive
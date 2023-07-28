import React, { useState } from 'react';
import './Home.css';
import Data from './Data';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import MobileHomeResponsive from './homeResponsive/mobileHomeResponsive/MobileHomeResponsive';

const Home = ({ isMobile }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openPreview = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const closePreview = () => {
        setSelectedImage(null);
    };

    const handleSwipeLeft = () => {
        let newIndex = currentIndex + 1;
        newIndex = (newIndex + Data.length) % Data.length;
        setSelectedImage(Data[newIndex].img);
        setCurrentIndex(newIndex);
    };

    const handleSwipeRight = () => {
        let newIndex = currentIndex - 1;
        newIndex = (newIndex - 1 + Data.length) % Data.length;
        setSelectedImage(Data[newIndex].img);
        setCurrentIndex(newIndex);
    };

    const handleContainerSwipe = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
    });

    const handleModalSwipe = useSwipeable({
        onSwipedLeft: handleSwipeLeft,
        onSwipedRight: handleSwipeRight,
    });

    useEffect(() => {
        if (selectedImage) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [selectedImage]);

    return (
        <>
            {isMobile ? (
                <MobileHomeResponsive
                    openPreview={openPreview}
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                    currentIndex={currentIndex}
                    setCurrentIndex={setCurrentIndex}
                    closePreview={closePreview}
                    handleModalSwipe={handleModalSwipe}
                    handleContainerSwipe={handleContainerSwipe}
                    handleSwipeLeft={handleSwipeLeft}
                    handleSwipeRight={handleSwipeRight}

                />

            ) : (
                <motion.main className='home' initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 3.5, duration: 0.7, ease: [0.42, 0, 0.58, 1] } }} exit={{ opacity: 0, y: 150, transition: { delay: 0.3, velocity: 2, staggerChildren: 1.5, duration: 1, ease: [0.42, 0, 0.58, 1] } }}>
                    <div className='home__container container'>
                        <div className='home__grid'>
                            {Data.map(({ img, id, img_300px, img_600px, img_900px }, index) => (
                                <div key={id} className='grid__item' onClick={() => openPreview(img, index)}>
                                    <LazyLoadImage
                                        src={img}
                                        alt='sass'
                                        effect='blur'
                                        width={333} // Set the appropriate image width based on your design needs
                                        height={500} // Set the appropriate image height based on your design needs
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
            )}
        </>
    );
};

export default Home;

import React, { useState } from 'react';
import './Home.css';
import Data from './Data';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Home = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [shuffledData, setShuffledData] = useState([]);

    const handleSwipeLeft = () => {
        let newIndex = currentIndex + 1;
        newIndex = (newIndex + shuffledData.length) % shuffledData.length;
        setSelectedImage(shuffledData[newIndex].img);
        setCurrentIndex(newIndex);
    };

    const handleSwipeRight = () => {
        let newIndex = currentIndex - 1;
        newIndex = (newIndex - 1 + shuffledData.length) % shuffledData.length;
        setSelectedImage(shuffledData[newIndex].img);
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

    const openPreview = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    const closePreview = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        // Shuffle the Data array on each render
        const shuffledArray = [...Data].sort(() => Math.random() - 0.5);
        setShuffledData(shuffledArray);
    }, []);

    useEffect(() => {
        if (selectedImage) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [selectedImage]);

    return (
        <main className='home'>
            <div className='home__container container' {...handleContainerSwipe}>
                <div className='home__grid'>
                    {shuffledData.map(({ img, id }, index) => (
                        <div
                            key={id}
                            className='grid__item'
                            onClick={() => openPreview(img, index)}
                        >
                            <img src={img} alt='sass' />
                        </div>
                    ))}
                </div>
            </div>
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className='preview__modal'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        exit={{ opacity: 0 }}
                        {...handleModalSwipe}
                    >
                        <div className='preview__close'>
                            <button onClick={closePreview}>X</button>
                        </div>

                        <motion.div className='preview__content'>
                            <div className='preview__buttons'>
                                <button
                                    className='button__prev'
                                    onClick={handleSwipeRight}
                                    disabled={currentIndex === 0}
                                >
                                    <IoIosArrowBack />
                                </button>
                                <button
                                    className='button__next'
                                    onClick={handleSwipeLeft}
                                    disabled={currentIndex === shuffledData.length - 1}
                                >
                                    <IoIosArrowForward />
                                </button>
                            </div>
                            <motion.img
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                exit={{ opacity: 0 }}
                                src={selectedImage}
                                alt='Preview'
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default Home;

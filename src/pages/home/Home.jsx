import React, { useState } from 'react';
import './Home.css';
import Data from './Data';
import { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import MobileHomeResponsive from './homeResponsive/mobileHomeResponsive/MobileHomeResponsive';
import DesktopHome from './homeResponsive/desktopHomeResponsive/DesktopHome';

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
                <MobileHomeResponsive openPreview={openPreview} selectedImage={selectedImage} setSelectedImage={setSelectedImage} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} closePreview={closePreview} handleModalSwipe={handleModalSwipe} handleContainerSwipe={handleContainerSwipe} handleSwipeLeft={handleSwipeLeft} handleSwipeRight={handleSwipeRight}/>
            ) : (
                <DesktopHome openPreview={openPreview} selectedImage={selectedImage} setSelectedImage={setSelectedImage} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} closePreview={closePreview} handleModalSwipe={handleModalSwipe} handleContainerSwipe={handleContainerSwipe} handleSwipeLeft={handleSwipeLeft} handleSwipeRight={handleSwipeRight} />
            )}
        </>
    );
};

export default Home;

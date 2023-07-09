import React from 'react';
import './Home.css';
import Data from './Data';
import Masonry from 'react-masonry-css';

const Home = () => {
    const breakpointColumnsObj = {
        default: 3, // Number of columns by default
        1200: 2, // Number of columns for screens wider than 1200px
        800: 1 // Number of columns for screens wider than 800px
    };

    return (
        <main className="home">
            <div className="home__container">
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="home__grid"
                    columnClassName="grid__item"
                >
                    {Data.map(({ img, id }) => (
                        <div key={id}>
                            <img src={img} alt={`Image ${id + 1}`} />
                        </div>
                    ))}
                </Masonry>
            </div>
        </main>
    );
};

export default Home;

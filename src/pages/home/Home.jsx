import React from 'react'
import './Home.css'
import Data from './Data'
import { useEffect } from 'react'





const Home = () => {
    return (
        <main className='home'>
            <div className="home__container container">
                <div className="home__grid">
                    {Data.map(({ img, id }) => (
                        <div key={id} className="grid__item" >
                            <img src={img} alt="sass" />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}

export default Home
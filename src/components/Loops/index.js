import React from 'react'
import cryBaby from '../../assets/loopPacks/CryBaby.jpg'

function Loops() {
    return (
        <div className='container'>
            <h2>Loops</h2>
            <div className='carousel'>
                <div>
                    <img
                        src={cryBaby}
                        alt="A Gorilla with a tear coming down"
                        className='carousel-img'
                    />
                </div>
            </div>
            <a href='https://mongamonga.infinity.airbit.com/' target="_blank" className='link-btn btn'>Airbit Store</a>
        </div>
    )
}

export default Loops
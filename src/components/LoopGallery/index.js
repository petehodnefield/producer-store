import React from 'react'
import cryBaby from '../../assets/loopPacks/CryBaby.jpg'
import gorillaHero from '../../assets/loopPacks/gorillaHero.jpg'
import royaltyFree from '../../assets/loopPacks/royaltyFree.jpg'

function LoopGallery(props) {
    const loopPacks = [
        {
            name: "Gorilla Hero",
            img: gorillaHero
        },
        {
            name: "Cry Baby",
            img: cryBaby
        },
        {
            name: "Royalty Free",
            img: royaltyFree
        }
    ]

    return (
        <div className='loopSection-container'>
            {loopPacks.map((pack) => (
                <div className='loop-container'>
                    <h2>{pack.name}</h2>
                    <div class="carousel">
                        <img
                        src={pack.img}
                        className="carousel-img"
                        />
                    </div>
                </div> 
            ))}
        </div>
    )
}

export default LoopGallery
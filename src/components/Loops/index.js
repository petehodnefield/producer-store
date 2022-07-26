import React from 'react'
import cryBaby from '../../assets/loopPacks/CryBaby.jpg'
import gorillaHero from '../../assets/loopPacks/gorillaHero.jpg'
import LoopGallery from '../LoopGallery'

function Loops() {
  
    
    return (
        <div className='container'>
            <h2 className='section-header'>Loop Packs</h2>
            <LoopGallery />
   
                <a href='https://mongamonga.infinity.airbit.com/' target="_blank" className='link-btn btn'>Airbit Store</a>
        </div>
    )
}

export default Loops
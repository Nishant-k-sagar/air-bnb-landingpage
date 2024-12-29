import React from 'react';
import img1 from '../img/Hero/hero.png';
import '../styleSheets/Hero.css'

function Hero (){
    return(
        <section className='hero'>
            <img src= {img1} className='hero--photo'alt='' />
            <div className='merged'>
            <h1 className = "hero--header" >Online experiences</h1>
            <p className='hero--text'>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    )
}

export default Hero;
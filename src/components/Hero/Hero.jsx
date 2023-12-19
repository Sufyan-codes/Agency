import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="home container">
      <div className="home__container">

        <h1 className="home__title">
          Smart technology in <br /> your home
        </h1>

        <p className="home__detail">
          Create a space where you`ll love to work with an incredible-sounding
        </p>

        <button className="btn">Hire us <span><i className="ri-arrow-right-line"></i></span></button>

        <img className='home__img' src="./hero.png" alt="" />

        <div className="customers">
          
        </div>

      </div>
    </section>
  )
}

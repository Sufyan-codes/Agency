import React from 'react'
import './About.css'

export default function About() {
  return (
    <section className="container" id='about'>
      <div className="about__container ">
        <h1 className="about__title">
          What we do
        </h1> 

        <div className="about__detail">

          <img className='about__img' src="./about__img.jpg" alt="" />

          <div className="about__data">

            <h1 className="about__title">
              who we really are & <br /> why choose us
            </h1>

            <p className="about__subtitle">
              We have over 40+ unbiased reviews & customers trust our 
              process, delivery & service everytime
            </p>

            <ul className="about__list">

              <li className="about__item"><span>✔</span> We always deliver on time.</li>
              <li className="about__item"><span>✔</span> We give you guides to protect planet</li>
              <li className="about__item"><span>✔</span> We always come over for a check-up</li>
              <li className="about__item"><span>✔</span> 100% money-back guaranted</li>

            </ul>

            <a href="#" className="about__link">hire us <i className="ri-arrow-right-down-line"></i></a>

          </div>

        </div>
      </div>
    </section>
  )
}
 
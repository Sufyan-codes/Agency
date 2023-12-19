import React from 'react'
import './Team.css'

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import data from '../../components/data.json'
import { sliderSettings } from '../Swiper'

export default function Team() {
    return (
        <section className="container">
            <div className="team__container">
                <h1 className="team__title">Team</h1>


                <Swiper {...sliderSettings} className='team'>
                    <SliderButtons />

                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>

                                 
                                     <div className='Projects__swiper team'>
                                        <img className='projects_img team__img' src={card.team} alt="projects" />
                                        <div className="projects__details card">
                                            <span className='name'>{card.name}</span>
                                            <p className="sub">{card.sub}</p>
                                           
                                        </div>
                                    </div>
                                

                            </SwiperSlide>

                        ))
                    }

                </Swiper>

            </div>
        </section>
    )
}

const SliderButtons = () => {

    const swiper = useSwiper()

    return (

           
            <div className="button right">
                <button onClick={() => { swiper.slidePrev() }}><i className="ri-arrow-left-line"></i></button>
                <button onClick={() => { swiper.slideNext() }}><i className="ri-arrow-right-line"></i></button>
            </div>
        
    )
}
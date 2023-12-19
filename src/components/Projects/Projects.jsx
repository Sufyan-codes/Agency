import React from 'react'
import './Projects.css'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css';
import data from '../../components/data.json'
import { sliderSettings } from '../Common';

export default function Projects() {


    return (
        <section className="container">
            <div className="projects__container" id='Projects'>

                <h1 className="projects__title">Projects</h1>

                <Swiper className='swiper__container' {...sliderSettings}>
                    <SliderButtons />

                    {
                        data.map((card, i) => (
                            <SwiperSlide key={i}>

                                <div className='Projects__swiper'>
                                    <img className='projects_img' src={card.imageUrl} alt="projects" />
                                    <div className="projects__detail">
                                        <span className='desc'>{card.description}</span>
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
        <div className="control">
            <p><a href="" target='_blank'>view all...</a></p>
            <div className="button">
            <button onClick={()=> {swiper.slidePrev()}}><i className="ri-arrow-left-line"></i></button>
            <button onClick={()=> {swiper.slideNext()}}><i className="ri-arrow-right-line"></i></button>
        </div>
        </div>
    ) 
}
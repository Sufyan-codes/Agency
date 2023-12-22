import React from 'react'
import './Team.css'


export default function Team() {
    return (
        <section className="container">
            <div className="team__container">
                <h1 className="team__title">Team</h1>

                <div className="projects">

                    <div className="projects__card">
                        <img src="./irene-strong-v2aKnjMbP_k-unsplash.jpg" alt="" />
                        <span className="name">Anil Schmoe</span>
                        <span className="title">Drone pilot</span>
                    </div>
                    <div className="projects__card">
                        <img src="./christian-buehner-DItYlc26zVI-unsplash.jpg" alt="" />
                        <span className="name">Aaryan Doe</span>
                        <span className="title">Software engineer</span>
                    </div>
                    <div className="projects__card">
                        <img src="./african-american-young-woman-s-half-length-portrait-beautiful-female-model.jpg" alt="" />
                        <span className="name">Jan Doe</span>
                        <span className="title">Sales rep</span>
                    </div>

                </div>
 

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
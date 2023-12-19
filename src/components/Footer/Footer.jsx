import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <section className="container">
        <div className="footer__containers">
        <div className="footer__container bd-grid">
            <div className="footer__content">
                <a href="#" className="footer__logo">
                    <i className="ri-copper-coin-line"></i>
                </a>

    
            </div> 

            <div className="footer__content">
                <h3 className="footer__title">Services</h3>
                <ul>
                    <li><a href="#" className="footer__link">Delivery</a></li>
                    <li><a href="#" className="footer__link">Pricing</a></li>
                    <li><a href="#" className="footer__link">Fast food</a></li>
                    <li><a href="#" className="footer__link">Reserve your spot</a></li>
                </ul>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">Information</h3>
                <ul>
                    <li><a href="#" className="footer__link">Event</a></li>
                    <li><a href="#" className="footer__link">Contact us</a></li>
                    <li><a href="#" className="footer__link">Privacy policy</a></li>
                    <li><a href="#" className="footer__link">Terms of services</a></li>
                </ul>
            </div>

            <div className="footer__content">
                <h3 className="footer__title">Address</h3>
                <ul>
                    <li>Lima - Peru</li>
                    <li>Jr Union #999</li>
                    <li>999 - 888 - 777</li>
                    <li>tastyfood@email.com</li>
                </ul>
            </div>
        </div>

        <p className="footer__copy">&#169; 2023 <a href="sufyandev.netlify.app">SufyanDev</a>. All right reserved</p>
    
        </div>
    </section>
  )
}

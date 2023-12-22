import React from 'react'
import './Newsletter.css'

export default function Newsletter() {
  return (
    <section className="newsletter">
      
        <div className="newsletter__container">
            <p className="newsletter__subtitle">Subscribe to our newsletter</p>
            <h1 className="newsletter__title">newsletter</h1>

            <form className='form'>
                <input type="text" placeholder='Enter your email address' />
                <button className='subButton' >subscribe</button>
            </form> 
        </div>
    </section> 
  )
}

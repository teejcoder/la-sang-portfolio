import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function ShagRock() {
  return (
    <>
      <Header />
      <section className='photograph-section'>

        <a href='/'><h1 className='band-name'>Shag Rock</h1></a>
        <div className='photographs-div'>
          <img src="/assets/shag-rock/shag-rock-one.png" alt="Shag Rock Band" className='photographs'/>
          <img src="/assets/shag-rock/shag-rock-two.png" alt="Shag Rock Band" className='photographs'/>
          <img src="/assets/shag-rock/shag-rock-three.png" alt="Shag Rock Band" className='photographs'/>
          <img src="/assets/shag-rock/shag-rock-four.png" alt="Shag Rock Band" className='photographs'/>
        </div>
      </section>
      <Footer/>
    </>
  )
}

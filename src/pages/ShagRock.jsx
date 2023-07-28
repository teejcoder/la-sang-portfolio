import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function ShagRock() {
  return (
    <>
      <Header />
      <section className='photograph-section'>

        <a href='/'><h1 className='band-name'>Shag Rock</h1></a>

        <img src="/assets/shag-rock/shag-rock-one.png" alt="" className='photographs'/>
        <img src="/assets/shag-rock/shag-rock-cover.png" alt="" className='photographs'/>
        <img src="/assets/shag-rock/shag-rock-two.png" alt="" className='photographs'/>

      </section>
      <Footer/>
    </>
  )
}

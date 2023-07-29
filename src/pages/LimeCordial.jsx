import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function LimeCordial() {
  return (
    <>
    <Header />
      <section className='photograph-section'>

        <a href='/'><h1 className='band-name'>Lime Cordial</h1></a>

        <img src="/assets/lime-cordial/lime-cordial-one.png" alt="" className='photographs'/>
        <img src="/assets/lime-cordial/lime-cordial-cover.png" alt="" className='photographs'/>
        <img src="/assets/lime-cordial/lime-cordial-two.png" alt="" className='photographs'/>

      </section>
    <Footer/>
    </>

  )
}
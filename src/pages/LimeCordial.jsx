import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function LimeCordial() {
  return (
    <>
    <Header />
      <section className='photograph-section'>

        <a href='/'><h1 className='band-name'>Lime Cordial</h1></a>
        <div className='photographs-div'>
          <img src="/assets/lime-cordial/lime-cordial-one.png" alt="Lime Cordial Band" className='photographs'/>
          <img src="/assets/lime-cordial/lime-cordial-two.png" alt="Lime Cordial Band" className='photographs'/>
          <img src="/assets/lime-cordial/lime-cordial-three.png" alt="Lime Cordial Band" className='photographs'/>
          <img src="/assets/lime-cordial/lime-cordial-four.png" alt="Lime Cordial Band" className='photographs'/>
        </div>
      </section>
    <Footer/>
    </>
  )
}

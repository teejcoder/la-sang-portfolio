import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Hallie() {
  return (
    <>
    <Header />
      <section className='photograph-section'>

        <a href='/'><h1 className='band-name'>Hallie</h1></a>

        <img src="/assets/hallie/hallie-one.png" alt="" className='photographs'/>
        <img src="/assets/hallie/hallie-cover.png" alt="" className='photographs'/>
        <img src="/assets/hallie/hallie-two.png" alt="" className='photographs'/>

      </section>
    <Footer/>
    </>
  )
}

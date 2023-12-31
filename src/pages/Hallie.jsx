import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Hallie() {
  return (
    <>
    <Header />
      <section className='photograph-section'>
      <a href='/'><h1 className='band-name'>Hallie</h1></a>
      <div className='photographs-div'>
        <img src="/assets/hallie/hallie-one.png" alt="Hallie Band" className='photographs'/>
        <img src="/assets/hallie/hallie-two.png" alt="Hallie Band" className='photographs'/>
        <img src="/assets/hallie/hallie-three.png" alt="Hallie Band" className='photographs'/>
        <img src="/assets/hallie/hallie-four.png" alt="Hallie Band" className='photographs'/>
      </div>
      </section>
    <Footer/>
    </>
  )
}

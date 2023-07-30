import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function ConfidenceMan() {
  return (
    <>
        <Header />

            <section className='photograph-section'>
              <a href="/"><h1 className='band-name'>Confidence Man</h1></a>
              <div className='photographs-div'>
                <img src="/assets/confidence-man/confidence-man-three.png" alt="Confidence Man Band" className='photographs'/>
                <img src="/assets/confidence-man/confidence-man-one.png" alt="Confidence Man Band" className='photographs'/>
                <img src="/assets/confidence-man/confidence-man-two.png" alt="Confidence Man Band" className='photographs'/>
                <img src="/assets/confidence-man/confidence-man-four.png" alt="Confidence Man Band" className='photographs'/>
              </div>
            </section>
            
        <Footer/>
    </>
  )
}

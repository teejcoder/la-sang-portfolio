import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function ConfidenceMan() {
  return (
    <>
        <Header />

            <section className='photograph-section'>

                <a href="/"><h1 className='band-name'>Confidence Man</h1></a>
                <img src="/assets/confidence-man/confidence-man-one.png" alt="" className='photographs'/>
                <img src="/assets/confidence-man/confidence-man-cover.png" alt="" className='photographs'/>
                <img src="/assets/confidence-man/confidence-man-two.png" alt="" className='photographs'/>

            </section>
            
        <Footer/>
    </>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'

export default function Gallery() {

  return (
    <>
      <section className='gallery'>

        <Link to="/shag-rock">
          <div className='gallery-div'>
            <img src="/assets/shag-rock/shag-rock-cover.png" alt="Shag Rock band" className='gallery-img shag-rock'/>
            <div className='overlay'></div>
          </div>
        </Link>

        <Link to="/confidence-man">
          <div className='gallery-div'>
            <img src="/assets/confidence-man/confidence-man-cover.png" alt="Confidence Man band" className='gallery-img confidence-man'/>
            <div className='overlay'></div>
          </div>
        </Link>
        
        <Link to="/hallie">
          <div className='gallery-div'>
            <img src="/assets/hallie/hallie-cover.png" alt="Hallie band" className='gallery-img hallie'/>
            <div className='overlay'></div>
          </div>
        </Link>
        
        <Link to="/lime-cordial">
          <div className='gallery-div'>
            <img src="/assets/lime-cordial/lime-cordial-cover.png" alt="Lime Cordial band" className='gallery-img lime-cordial'/>
            <div className='overlay'></div>
          </div>
        </Link>
        
      </section>
    </>
  )
}

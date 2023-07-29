import React from 'react'
import { Link } from 'react-router-dom'

export default function Gallery() {

  return (
    <>
      <section className='gallery'>

        <Link to="/shag-rock">
          <div className='gallery-div shag-rock-div'>
              <img src="/assets/shag-rock/shag-rock-cover.png" alt="" className='gallery-img shag-rock'/>
          </div>
        </Link>

        <Link to="/confidence-man">
          <div className='gallery-div confidence-man-div'>
              <img src="/assets/confidence-man/confidence-man-cover.png" alt="" className='gallery-img confidence-man'/>
          </div>
        </Link>
        
        <Link to="/hallie">
          <div className='gallery-div hallie-div'>
              <img src="/assets/hallie/hallie-cover.png" alt="" className='gallery-img hallie'/>
          </div>
        </Link>
        
        <Link to="/lime-cordial">
          <div className='gallery-div lime-cordial-div'>
              <img src="/assets/lime-cordial/lime-cordial-cover.png" alt="" className='gallery-img lime-cordial'/>
          </div>
        </Link>
        
      </section>
    </>
  )
}

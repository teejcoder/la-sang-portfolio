import React from 'react'

export default function Gallery() {


  return (
    <>
      <section className='gallery'>
        <div className='gallery-div'>
          <a href="/">
            <img src="/assets/shag-rock/shag-rock-cover.png" alt="" className='gallery-img shag-rock'/>
          </a>
        </div>
        <div className='gallery-div'>
          <a href="/">
            <img src="/assets/confidence-man/confidence-man-cover.png" alt="" className='gallery-img confidence-man'/>
          </a>
        </div>
        <div className='gallery-div'>
          <a href="/">
            <img src="/assets/hallie/hallie-cover.png" alt="" className='gallery-img hallie'/>
          </a>
        </div>
        <div className='gallery-div'>
          <a href="/">
            <img src="/assets/lime-cordial/lime-cordial-cover.png" alt="" className='gallery-img lime-cordial'/>
          </a>
        </div>
      </section>
    </>
  )
}

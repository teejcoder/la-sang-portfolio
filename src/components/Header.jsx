import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
  return (
    <div className="App ">
        <img src="/assets/avatar.png" alt="logo" className='logo' />
      
        <a href="https://www.instagram.com/la.sangiorgio.live/" className='hero-title' target='_'>LA SANG LIVE</a>

        <h3> <FontAwesomeIcon icon="fa-solid fa-location-dot" style={{ color: 'white', fontSize: '25px' }} /> Brisbane</h3>
    </div>
  )
}

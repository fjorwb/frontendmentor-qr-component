import React from 'react'

import './qrComponent.css'

import image from '../assets/image-qr-code.png'

function Qrcomponent () {
  return (
    <div className='container'>
      <div className='img-container'>
        <img src={image} alt='' />
      </div>
      <div className='text-container'>
        <h1 className='title'>
          Improve your front-end skills by building projects
        </h1>
        <p className='subtitle'>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  )
}

export default Qrcomponent

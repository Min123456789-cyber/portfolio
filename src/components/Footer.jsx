import React from 'react'
import LogoPic from './Logo'

const Footer = () => {
  return (
    <footer className='d-flex flex-column justify-content-center align-items-center bg-body-tertiary'>
      <LogoPic/>
      <h3 className='text-xl text-center text-white pb-3'>Copyrights &copy; 2024 
      </h3>
    </footer>
  )
}

export default Footer

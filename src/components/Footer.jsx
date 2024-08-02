import React from 'react'
import LogoPic from './Logo'

const Footer = () => {
  return (
    <footer className='d-flex flex-column justify-content-center align-items-center bg-dark bg-gradient'>
      <LogoPic/>
      <h3 className='text-xl text-center text-white'>Copyrights &copy; 2024 
      </h3>
    </footer>
  )
}

export default Footer
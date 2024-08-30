import React from 'react'
import logo from '../assets/logo/logo.png'

const Footer = () => {
  return (
    <footer className=' bg-gray-300 gap-5 flex justify-start items-center flex-col md:flex-row  text-lg p-10'>
      <div className='items-center '>
        <img className='md:w-40 w-auto' src={logo} alt="" />
      </div>
      <div className=''>
      <p className='mb-1  font-semibold tracking-wide text-center'>Welcome Gate Community, Sanniquellie City, Nimba County, Liberia</p>
      <h3><span className='font-bold '>Email: </span>riehadliberia0219@gmail.com</h3>
      <h3><span className='font-bold '>Contact: </span>+231  88 6 94 9626</h3>
      <h3><span className='font-bold '>Whatsapp: </span>+1 786 9063 637</h3>
      <h3><span className='font-bold '>Address: </span>Sanniquellie, Liberia</h3>
      </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import dataicon from '../assets/database-storage.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header className='w-full'>
      <div className='mt-5 ml-8 flex flex-row justify-start gap-8 max-container'>
        <img src={dataicon} alt="database icon" className='w-10' />
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products" className='ml-auto mr-8'>Products</Link>
        


    </div>
    </header>
  )
}

export default Nav
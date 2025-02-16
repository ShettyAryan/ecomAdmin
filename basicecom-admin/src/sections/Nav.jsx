import React from 'react'
import { Link } from 'react-router-dom'
import databaseIcon from '../assets/database-storage.png'

const Nav = () => {
  return (
    <div className='flex items-center gap-20 pl-20 h-20 w-screen'>

      <img src={databaseIcon} alt="database" className='w-10' />
      <ul className='flex flex-row gap-8'>
        <Link to="/"><li className='text-xl font-medium transition cursor-pointer hover:text-slate-500'>Home</li></Link>
        <Link to="/contact"><li className='text-xl font-medium transition cursor-pointer hover:text-slate-500'>Contact US</li></Link>
        <Link to="/admin/products"><li className='text-xl font-medium transition cursor-pointer hover:text-slate-500'>Products</li></Link>
      </ul>

    </div>
  )
}

export default Nav
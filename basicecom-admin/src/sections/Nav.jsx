import React from 'react'
import dataicon from '../assets/database-storage.png'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header className=" fixed top-0 left-0 w-full bg-blue-300 shadow-md z-10">
       <div className="pl-8 flex flex-row justify-start gap-8 items-center h-16">
           <img src={dataicon} alt="database icon" className="w-7" />
           <nav className="flex gap-8">
             <Link to="/">Home</Link>
             <Link to="/contact">Contact</Link>
           </nav>
           <Link to="/admin/products" className="ml-auto mr-8">Products</Link>
       </div>
     </header>

  )
}

export default Nav
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './sections/Nav'
import Home from './sections/Home'
import Contact from './sections/Contact'
import Notfound from './sections/Notfound'
import ProductList from './sections/ProductList'

const App = () => {
  return (
    
      <BrowserRouter>

        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} /> 
          <Route path='/admin/products' element={<ProductList />} /> 
          <Route path='*' element={<Notfound />} />

        </Routes>

      </BrowserRouter> 
        

    
  )
}

export default App
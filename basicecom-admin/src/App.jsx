import React from 'react'
import Nav from './sections/Nav'
import Home from './pages/Home'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Products from './pages/admin/products/ProductList'
const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/contact' element= {<Contact />}/>
        <Route path='/admin/products' element= {<Products />}/>
        <Route path='*' element= {<NotFound />}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
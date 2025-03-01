import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './sections/Nav'
import Home from './sections/Home'
import Contact from './sections/Contact'
import Notfound from './sections/Notfound'

const App = () => {
  return (
    
      <BrowserRouter>

        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Notfound />} />

        </Routes>

      </BrowserRouter> 
        

    
  )
}

export default App
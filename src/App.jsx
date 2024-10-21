import React from 'react'
import Layout from './components/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Manu from './pages/Manu'
import Pagenotfount from './pages/Pagenotfount'

const App = () => {
  return (
      <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/menu' element={<Manu/>}/>
                <Route path='*' element={<Pagenotfount/>}/>

            </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App
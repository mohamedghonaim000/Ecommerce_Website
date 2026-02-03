import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from '../../Pages/Home'
import Shop from '../../Pages/Shop'
import About from '../../Pages/About'
import Contact from '../../Pages/ContactUs'
import Footer from '../Layout/Footer'

export default function AppRoutes() {
    return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        
    
    </Routes>
    <Footer/>
    </BrowserRouter>
    )
}

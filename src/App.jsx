import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './routes/Home'
import Properties from './routes/Properties'
import PropertyDetail from './routes/PropertyDetail'
import About from './routes/About'
import Contact from './routes/Contact'

export default function App(){
  return (
    <div>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/properties" element={<Properties/>} />
          <Route path="/properties/:id" element={<PropertyDetail/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

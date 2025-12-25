import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courser from './pages/Courser'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/about' element={<About/> } />
        <Route path='/course' element={<Courser/> } />
        <Route path='/blog' element={<Blog/> } />
        <Route path='/contact' element={<Contact/> } />
      </Routes>
      <Footer/>
    </React.Fragment>
  )
}
import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Home/Home'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
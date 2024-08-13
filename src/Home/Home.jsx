import React from 'react'
import Hero from './Hero/Hero'
import Services from './Services/Services'
import Testimonials from './Testimonials/Testimonials'
import Question from './Question/Question'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Services/>
        <Testimonials/>
        <Question/>
    </div>
  )
}

export default Home
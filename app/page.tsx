import React from 'react'
import Navbar from './Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Values from './components/Values'
import Work from './components/Work'
import Impact from './components/Impact'
import Conversations from './components/Conversations'
import Footer from './components/Footer'


const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Values />
        <Work />
        <Impact />
        <Conversations />
        <Footer />
    </div>
  )
}

export default Home




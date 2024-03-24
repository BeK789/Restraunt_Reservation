import React from 'react'
import HeroSection from '../../components/HeroSection'
import About from '../../components/About'
import Qualities from '../../components/Qualities'
import Dishes from '../../components/Dishes'
import WhoAreWe from '../../components/WhoAreWe'
import Team from '../../components/Team'
import Reservation from '../../components/Reservation'
import Footer from '../../components/Footer'
import Testimonials from '../../components/Testimonials'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Qualities/>
      <Dishes/>
      <WhoAreWe/>
      <Team/>
      <Reservation/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default Home

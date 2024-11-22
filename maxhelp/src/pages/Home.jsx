import React from 'react'
import Navbar from '../components/home/Navbar'
import Hero from '../components/home/Hero'
import StatsSection from '../components/home/StatsSection'
import FeatureSection from '../components/home/Feature'
import Footer from '../components/common/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <FeatureSection/>
        <StatsSection/>
        <Footer/>
    </div>
  )
}

export default Home
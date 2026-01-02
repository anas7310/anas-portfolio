import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoSection from './components/LogoSection'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import AnimatedCounter from './components/AnimatedCounter'
import Contact from './sections/Contact'
import Achievements from './sections/Achievements'
import Footer from './sections/Footer'

const App = () => {
  return (
  <>
  <NavBar/>
  <Hero/>
  <ShowcaseSection/>
  <LogoSection/>
  <FeatureCards/>
  <ExperienceSection/>
  <TechStack/>
  <AnimatedCounter/>
  <Achievements/>
  <Contact/>
  <Footer/>
  </>  
  )
}

export default App
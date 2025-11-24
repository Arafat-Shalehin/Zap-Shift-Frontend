import React from 'react'
import Hero from './Pages/Home/Hero'
import HowItWorks from './Pages/Home/HowItWorks'
import OurServices from './Pages/Home/OurServices'
import HelpedTeams from './Pages/Home/HelpedTeams'
import FeaturesSection from './Pages/Home/FeaturesSection'
import PriorityBanner from './Pages/Home/PriorityBanner'
import FAQSection from './Pages/Home/FAQSection'
import TestimonialsSection from './Pages/Home/TestimonialsSection'

function App() {
  return (
    <div>
      <Hero></Hero>
      <HowItWorks></HowItWorks>
      <OurServices></OurServices>
      <HelpedTeams></HelpedTeams>
      <FeaturesSection></FeaturesSection>
      <PriorityBanner></PriorityBanner>
      <TestimonialsSection></TestimonialsSection>
      <FAQSection></FAQSection>
    </div>
  )
}

export default App
import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { Sobre } from './components/Sobre'
import { Services } from './components/services'
import { Planos } from './components/planos'
// import { Testimonials } from './components/testimonials'
// import { Team } from './components/Team'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import { Widget } from './components/Widget'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div>
      <Widget data={landingPageData.Widget}/>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Sobre data={landingPageData.Sobre} />
      <Services data={landingPageData.Services} />
      <Planos data={landingPageData.Planos} />
      {/* <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
     
    </div>
  )
}

export default App

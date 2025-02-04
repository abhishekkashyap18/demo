import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FrequentQuestions from './components/FrequentQuestions'
import JoinNewsLetter from './components/JoinNewsLetter'
import Marque from './components/Marque'
import NavBar from './components/NavBar'
import Portfolio from './components/Portfolio'
import Pricing from './components/Pricing'
import Services from './components/Services'
import Team from './components/Team'
import Testimonial from './components/Testimonial'
import HeroSection from './components/heroSection'



function App() {


  return (
    <>
      <NavBar/>
      <HeroSection/>
      <Marque/>
      <About/>
      <Services/>
      <Portfolio/>
      <Team />
      <Pricing />
      <Testimonial />
      <FrequentQuestions />
      {/* <Contact /> */}
      {/* <JoinNewsLetter />
      <Footer /> */}
    </>
  )
}

export default App

import './App.css'
import About from './components/About.jsx'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
import FrequentQuestions from './components/FrequentQuestions.jsx'
// import JoinNewsLetter from './components/JoinNewsLetter'
import Marque from './components/Marque.jsx'
import NavBar from './components/NavBar.jsx'
import Portfolio from './components/Portfolio.jsx'
import Pricing from './components/Pricing.jsx'
import Services from './components/Services.jsx'
import Team from './components/Team.jsx'
import Testimonial from './components/Testimonial.jsx'
import HeroSection from './components/HeroSection.jsx'



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

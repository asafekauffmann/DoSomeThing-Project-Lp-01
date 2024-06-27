import './App.css'
import NavBar from './components/NavBar'
import MyHero from './components/MyHero'
import Documentation from './components/Documentation'
import secondWave from './assets/images/second-wave.svg'
import Testimonials from './components/Testimonials'
import threeWave from './assets/images/three-wave.svg'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import ServiceSection from './components/ServiceSection'


function App() {

  return (
    <>
      <NavBar />
      <MyHero />
      <div className="w-full flex flex-col items-center justify-center bg-light-blue">
        <Documentation />
        <div className="flex flex-col md:flex-row justify-center card xl:w-[1300px]">
          <div className="w-full flex flex-col items-center p-7">
            <Testimonials />
          </div>
        </div>
      </div>

      <div className="w-full mb-0 bg-lighter-blue">
        <img src={secondWave} className="w-full h-auto" />
      </div> 

      <ServiceSection />

      <div className="w-full mt-0 bg-lighter-blue">
        <img src={threeWave} className="w-full" />
      </div>
      <ContactUs />
      <Footer />
    </>
  )
}

export default App

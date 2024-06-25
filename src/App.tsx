import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import MyHero from './components/MyHero'
import Documentation from './components/Documentation'
import secondWave from './assets/images/second-wave.svg'
import Testimonials from './components/Testimonials'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'


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

      <div className="card bg-lighter-blue h-[80vh]">
        <h1 className="text-medium-blue text-4xl">
          Welcome to Design Map
        </h1>
        <p className="text-paragh-gray">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      
      <ContactUs />
      <Footer />
      
    </>
  )
}

export default App

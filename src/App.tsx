import { useState } from 'react'
import logoDoSomeThing from './assets/images/logo.svg'
import './App.css'
import MyHero from './components/MyHero'
import Documentation from './components/Documentation'
import secondWave from './assets/images/second-wave.svg'
import fourWave from './assets/images/four-wave.svg'
import threeWave from './assets/images/three-wave.svg'
import Testimonials from './components/Testimonials'


function App() {
  const [count, setCount] = useState(0)

  const navLinks = [
    {
      id: 1,
      title: "Documentation",
    },
    {
      id: 2,
      title: "Login",
    },
  ];


  return (
    <>
      <div className="relative h-auto w-full">
        <div className="bg-dark-blue flex flex-row justify-between content-center items-center p-3" >
          <div className="p-6">
            <a href="https://www.figma.com/design/dDzuNWi0mSH6oIqU11mMDc/Background-TestModel?node-id=0-1&t=1hiQ5kDFhrNPc9xa-0" target="_blank">
              <img src={logoDoSomeThing} className="" alt="Do Some Thing logo" />
            </a>
          </div>

          <div className="flex gap-6 p-6">
            {navLinks.map((nav, index) => ( 
              <p key={index} className="text-lg text-paragh-gray">
                {nav.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    
      <MyHero />

     {/* Second Hero */}
      <div className="w-full flex flex-col items-center justify-center bg-light-blue">
        <Documentation />

        <div className="flex flex-col md:flex-row justify-center card xl:w-[1300px]">
          <div className="w-full flex flex-col items-center">
            <h2 className="font-semibold text-6xl text-white pb-3">
              Update your team +40 more faster than other Website
            </h2>
            <Testimonials />
          </div>
          
        </div>
        
      </div>

      {/* Background Wave */}
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
        <button className="bg-dark-gray text-white" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
      {/* Background Wave */}
      <div className="w-full mt-0 bg-lighter-blue">
          <img src={threeWave} className="w-full" />
        </div> 

      <div className="w-full flex flex-col items-center justify-center bg-dark-blue"> 
        <div className="card ">
          <h1 className="text-white text-5xl">
            Welcome to Design Map
          </h1>
          <p className="text-paragh-gray">
            Click on the Vite and React logos to learn more
            Click on the Vite and React logos to learn more
            Click on the Vite and React logos to learn more
            Click on the Vite and React logos to learn more
            Click on the Vite and React logos to learn more
            Click on the Vite and React logos to learn more
            Click on the Vite and React logos to learn more
            Click on the Vite and React logos to learn more
            Click on the Vite and React logos to learn more
            Click on the Vite and React logos to learn more
            Click on the Vite and React logos to learn more
            Click on the Vite and React logos to learn more
          </p>
          <p className="text-dark-gray">
            Click on the Vite and React logos to learn more
          </p>
          <button className="bg-light-blue text-white" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>

        {/* Background Wave */}
        <div className="w-full mb-0 bg-lighter-blue">
          <img src={fourWave} className="w-full" />
        </div> 
      </div>
      
      <div className="bg-dark-gray flex justify-center content-center" >
        <a href="https://www.figma.com/design/dDzuNWi0mSH6oIqU11mMDc/Background-TestModel?node-id=0-1&t=1hiQ5kDFhrNPc9xa-0" target="_blank">
          <img src={logoDoSomeThing} className="logo" alt="Do Some Thing logo" />
        </a>
      </div> 
      
    </>
  )
}

export default App

import { useState } from 'react'
import logoDoSomeThing from '../public/images/logo.svg'
import firstWare from '../public/images/first-wave.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="relative h-auto w-full">
        <div className="bg-dark-blue flex flex-row justify-between content-center items-center p-3" >
          <div className="p-6">
            <a href="https://www.figma.com/design/dDzuNWi0mSH6oIqU11mMDc/Background-TestModel?node-id=0-1&t=1hiQ5kDFhrNPc9xa-0" target="_blank">
              <img src={logoDoSomeThing} className="" alt="Do Some Thing logo" />
            </a>
          </div>

          <div className="flex gap-3 p-6">
            <p className="text-lg text-paragh-gray">Documentation</p>
            <p className="text-lg text-paragh-gray">Login</p>
          </div>
        </div>
      </div>
     
      {/* first Hero */}
      <div className="flex flex-col items-center justify-end bg-dark-blue h-auto ">
        <div className="pt-44 pb-20 object-contain">

          <h1 className="text-white text-5xl font-normal pb-3">
            Create some task
          </h1>
          <h1 className="text-light-blue text-5xl font-semibold pb-3">
            More faster them all
          </h1>
          <p className="text-paragh-gray pb-3 w-full px-12 sm:w-[600px]">
            Talk to your team and make everything great again.
            Is only agree with work and will know how is good fly.
          </p>

          <button className="bg-light-blue text-white" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>

        </div>

        <div className="mb-0 w-full">
          <img src={firstWare} className="w-full h-auto" />
        </div>
      </div>

     {/* Second Hero */}
      <div className="card pt-28 bg-light-blue">
      <h1 className="text-dark-blue text-5xl">
          Welcome to Design Map
        </h1>
        <h1 className="text-white text-5xl text-">
          Welcome to Design Map
        </h1>
        
        <p className="text-white">
          Click on the Vite and React logos to learn more
        </p>
        <button className="bg-white text-dark-blue" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className="card bg-lighter-blue">
        <h1 className="text-medium-blue text-5xl">
          Welcome to Design Map
        </h1>
        <p className="text-paragh-gray">
          Click on the Vite and React logos to learn more
        </p>
        <button className="bg-dark-gray text-white" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
      <div className="card bg-light-yellow">
        <h1 className="text-dark-blue text-5xl">
          Welcome to Design Map
        </h1>
        <p className="text-paragh-gray">
          Click on the Vite and React logos to learn more
        </p>
        <p className="text-dark-gray">
          Click on the Vite and React logos to learn more
        </p>
        <button className="bg-light-blue text-white" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
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

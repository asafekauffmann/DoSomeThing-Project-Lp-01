import { useState } from 'react'
import logoDoSomeThing from '../public/images/logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-dark-gray flex justify-center content-center" >
        <a href="https://www.figma.com/design/dDzuNWi0mSH6oIqU11mMDc/Background-TestModel?node-id=0-1&t=1hiQ5kDFhrNPc9xa-0" target="_blank">
          <img src={logoDoSomeThing} className="logo" alt="Do Some Thing logo" />
        </a>
      </div>

      <h1>Welcome to Design Map</h1>

      <div className="card bg-dark-blue">
        <h1 className="text-light-blue text-5xl">
          Welcome to Design Map
        </h1>
        <h1 className="text-white text-5xl">
          Welcome to Design Map
        </h1>
        <p className="text-paragh-gray">
          Click on the Vite and React logos to learn more
        </p>
        <button className="bg-light-blue text-white" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className="card bg-light-blue">
        <h1 className="text-white text-5xl">
          Welcome to Design Map
        </h1>
        <h1 className="text-dark-blue text-5xl">
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

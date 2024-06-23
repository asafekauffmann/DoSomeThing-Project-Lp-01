import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/images/vite.svg'
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

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>

      <h1>Welcome to Design Map</h1>

      <div className="card bg-light-yellow">
        <button className="bg-light-blue text-white" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className="card bg-light-blue">
        <button className="bg-white text-dark-blue" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className="card bg-dark-blue">
        <button className="bg-light-blue text-white" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>

      <div className="bg-lighter-blue">
        <p className="text-paragh-gray">
          Click on the Vite and React logos to learn more
        </p>
        <button className="bg-dark-blue text-white" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App

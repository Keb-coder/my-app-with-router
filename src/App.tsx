import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { useState } from 'react'

function App() {
const [currentLocattion, setCurrentLocation] = useState("/");

  return (
    <>
<nav>
  <button onClick={() => setCurrentLocation("/")} type='button'> Home </button>
  <button onClick={() => setCurrentLocation("/about")} type='button'> About </button>

</nav>
<main>
  {currentLocattion === "/" && <Home />}
  {currentLocattion === "/about" && <About />}

</main>
    </>
  )
}

export default App

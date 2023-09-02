import Navbar from "./components/navbar/Navbar"
import './App.css'
import Hero from "./components/HeroSection/Hero"

function App() {
  return (
    <>
      <div className="container m-auto">
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App

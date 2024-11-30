import Navbar from './components/Navbar/navbar'
import Hero from './components/Hero/hero'
import Service from './components/Service/service'
import About from './components/About/about'
import Technology from './components/Technology/tech'
import Blog from './components/Blog/blog'
import Donate from './components/Donate/donate'
import Contact from './components/Contact/contact'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Service/>
      <About/>
      <Technology/>
      <Blog/>
      <Donate/>
      <Contact/>
    </>
  )
}

export default App

import './App.css'
import About from './components/About'
import Carasterist from './components/Caracterist'
import Carrusel from './components/Carrusel'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import Header from './components/Header'
import Interact from './components/Interact'
import NavBar from './components/NavBar'
import Preguntas from './components/Preguntas'
import Tipos from './components/Tipos'

function App() {

  return (
    <div className='h-auto'>
        <NavBar />
        <Header />
        <Tipos />
        <Interact />
        <Carasterist />
        <Contacto />
        <Carrusel />
        <About />
        <Preguntas />
        <Footer />
    </div>
  )
}

export default App

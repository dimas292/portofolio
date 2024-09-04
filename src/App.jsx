import './App.css'

import Header from './components/header'
import Hero from "./components/hero"
import Experiens from './screen/experiens'
import Footer from './components/footer'

function App() {
  
  
  return (
    <>
     <div>
      <Header />
      <section className='hero'>
      <Hero />
      </section>
      <section className='ex'>
      <Experiens />
      </section>
      <footer>
      <Footer />
      </footer>
     </div>
    </>
  )
}

export default App

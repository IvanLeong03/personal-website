import './App.css'
import Header from './Header'
import Mainspace from './Mainspace'
import Work from './Work'
import About from './About'
import Contact from './Contact'

function App() {
  

  return (
    <>
    <div className="w-full flex justify-center bg-cream">
      <div className="w-3/4 flex flex-col items-center bg-cream">
      <Header />
      <Mainspace />
      <Work />
      <About/>
      <Contact />
      </div>

    </div>    
    </>
  )
}

export default App

import './App.css'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Form } from './components/Form'
import { Footer } from './components/Footer'
import { Results } from './components/Results'

function App() {

  return (
    <div >
      <div className=" bg-[url('./img/svg-bg.svg')] bg-slate-800 bg-cover h-screen">
        <div className='container mx-auto '>
          <Header/>
          <Hero/>
        </div>
      </div>
      <div className='bg-dark-green'>
        <div className='container mx-auto'>
          <Services/>
        </div>
        <div>
          <Results/>
        </div>
        <div>
          <Form/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default App


import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Footer from '../components/Footer'

const Userlayout = () => {
  return (
    <div>
        <header className="hero-banner">
          <h1>My shopping app</h1>
        </header>
        <Navbar/>
        <Home/>
        <Footer/>
    </div>
  )
}

export default Userlayout
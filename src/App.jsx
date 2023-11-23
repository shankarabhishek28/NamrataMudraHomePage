import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Marquee from 'react-fast-marquee'
import PNB from './Images/PNB.png'
import HDFC from './Images/HDFC.png'
import BOB from './Images/BOB.png'
import AXIS from './Images/AXIS.png'
import BOI from './Images/BOI.png'
import ICICI from './Images/ICICI.png'
import './App.css'



const App = () => {
  return (
    <div>
      <Navbar />
      <Home />

      <div className='mains'>
        <h1 className='title'>Strategic Association with <span> 50+ Banks </span>and NBFCs</h1>
        <p>We are bridging the gap between you and top financial institutions</p>
        <Marquee pauseOnHover className='king'>
          
          <div className='marquee'>
            <img className='imagee' src={PNB} alt="UF Logo" style={{ opacity: 1,maxHeight:200,marginRight:'50px' }} />
          </div>
          <div className='marquee'>
            <img className='imagee' src={HDFC} alt="UF Logo" style={{ opacity: 1,maxHeight:200,marginRight:'50px' }} />
          </div>
          <div className='marquee'>
            <img className='imagee' src={BOB} alt="UF Logo" style={{ opacity: 1,maxHeight:200,marginRight:'50px' }} />
          </div>
          <div className='marquee'>
            <img className='imagee' src={AXIS} alt="UF Logo" style={{ opacity: 1,maxHeight:200,marginRight:'50px' }} />
          </div>
          <div className='marquee'>
            <img className='imagee' src={BOI} alt="UF Logo" style={{ opacity: 1,maxHeight:200,marginRight:'50px' }} />
          </div>
          <div className='marquee'>
            <img className='imagee' src={ICICI} alt="UF Logo" style={{ opacity: 1,maxHeight:200,marginRight:'50px' }} />
          </div>
        </Marquee>
      </div>
      <Footer />
    </div>
  );
}

export default App
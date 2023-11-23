import React from 'react'
import './Footer.css'
import NM from '../Images/Nm.png'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";



const Footer = () => {
  return (


    <footer class="footer">
      <div class="footer-content">

        <div class="company-info">

          <h2>Contact us:</h2>
          <button><FaPhone />: +919868114108</button>
          <button><IoLogoWhatsapp />: +919868114108</button>

          <button><RiInstagramFill />: @namratamudra</button>
          <button><FaTwitter />: @namratamudrainfo.com</button>
          <button><FaFacebook />: @namratamudraofficial</button>
          <button><MdEmail />: info@namratamudra.com</button>
          <h3>VISIT US</h3>
          <p style={{marginTop:-10}}>123 Main Street<br />
New Delhi, Delhi 110001
India</p>


        </div>

      </div>
      <img src={NM} />
      <div className="other">
        <div className="home-loan">
          
          <h2>Home Loan</h2>
          <div className='un-order'>
            <ul><FaArrowAltCircleRight />Balance Transfer</ul>
            <ul><FaArrowAltCircleRight />Home Loan Top-Up</ul>
            <ul><FaArrowAltCircleRight />Home Loan Top-Up</ul>

          </div>


        </div>
        <div className="home-loan">
          <h2>Instant Loan</h2>
          <div className='un-order'>
            <ul><FaArrowAltCircleRight />L&T Instant Loan</ul>
            <ul><FaArrowAltCircleRight />Faircent Instant Loan</ul>
            <ul><FaArrowAltCircleRight />Credifyn Instant Loan</ul>

          </div>


        </div>
        <div className="home-loan">
          <h2>Secure Loan</h2>
          <div className='un-order'>
            <ul><FaArrowAltCircleRight />Balance Transfer</ul>
            <ul><FaArrowAltCircleRight />Home Loan Top-Up</ul>
            <ul><FaArrowAltCircleRight />Home Loan Top-Up</ul>

          </div>


        </div>
        <div className="home-loan">
          <h2>Other Loan</h2>
          <div className='un-order'>
            <ul><FaArrowAltCircleRight />Balance Transfer</ul>
            <ul><FaArrowAltCircleRight />Home Loan Top-Up</ul>
            <ul><FaArrowAltCircleRight />Home Loan Top-Up</ul>

          </div>


        </div>
      </div>

    </footer>

  )
}

export default Footer
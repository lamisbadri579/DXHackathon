import { useState } from 'react'

import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'
import linkedin from '../assets/icons/linkedin.svg'
import instagram from '../assets/icons/instagram.svg'
const Footer = () => {
  const [emailInput,setEmailInput]=useState('');
  const handleEmailInputChange=(e)=>{
    setEmailInput(e.target.value)
  }
  const inputClass=emailInput==''?'empty':'filled';
  return (
    <footer className='flex flex-col items-center text-white'>

      <div className='flex flex-row gap-x-10'>

        <div className='follow'>
          <div className='title-section'>Follow Us</div>
          <div className='flex'>
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={linkedin} alt="linkedin" />
            <img src={instagram} alt="instagram" />
          </div>
        </div>

        <div className='useful-links'>
          <div className='title-section'>Useful Links</div>
          <ul>
            <li className='about'>About Us</li>
            <li className='services'>Our Services</li>
            <li className='faqs'>FAQs</li>
          </ul>
        </div>

        <div className='legal'>
          <div className='title-section'>Legal</div>
          <ul>
            <li className='privacy'>Privacy Policy</li>
            <li className='terms'>Terms of Services</li>
            <li className='cookie'>Cookie Policy</li>
          </ul>
        </div>

        <div className='subscribe'>
            <div className='title-section'>Get the freshest new from us</div>
            <div>
              <input
              id='Subscribe' 
              type="email" 
              placeholder='Your Email Address...'
              value={emailInput}
              onChange={handleEmailInputChange}
              className={inputClass}               />
              <button type='submit'>Subscribe</button>
            </div>
        </div>

      </div>

      <div className='copyright'>
        <hr />
        <p>© StudyUniverse 2024. All rights reserved.</p>
      </div>

    </footer>
  )
}

export default Footer
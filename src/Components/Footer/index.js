import React from 'react'
import LOGO from '../../assets/logo.png';
import GOOGLE from '../../assets/google-play.png';
import STOREAPP from '../../assets/app store.png';

const Footer = () => {
  return (
    <footer className='container footer'>
      <div className='footer--logo'>
        <img src={LOGO} alt="Logo de Dreadfull Tomato" />
      </div>

      <nav className='footer--nav'>
        <ul>
          <li>Home</li>
          <li>Terms of use</li>
          <li>Legal notices</li>
          <li>Help</li>
          <li>Manage Account</li>
        </ul>
      </nav>

      <div className='footer--apps'>
        <img src={STOREAPP} alt="Logo de app Apple" />
        <img src={GOOGLE} alt="Logo de app Google" />
      </div>

      <p>
        Copyright 2022 Dreadfull Tomato Streaming. All rights deserved
      </p>
    </footer>
  )
}

export default Footer
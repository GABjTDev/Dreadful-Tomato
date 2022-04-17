import React from 'react'
import LOGO from '../../assets/logo.png';
import LOGIN from '../../assets/icon-login.png';
import MENU from '../../assets/icon-menu.png';
import { Link, useParams } from 'react-router-dom';
import Nav from '../Nav';

const Header = ({error, setShowSearch}) => {

  const {type} = useParams();

  return (
      <header className='container header'>
          <div className='header--logo'>
            <Link to={'/'}>
              <img src={LOGO} alt="Logo de Dreadfull Tomato" />
            </Link>
          </div>

          <div className='header--login'>
            {
              (type || error) &&
                <Nav setShowSearch={setShowSearch} />
            }
            <ul>
              <li className='login'>Login<img src={LOGIN} alt="icon de login" /></li>
              <li className='trialFree'>Star you free trial</li>
            </ul>
          </div>

          <div className='header--menu'>
            <img src={MENU} alt='icon de menu' />
          </div>
      </header>
  )
}

export default Header
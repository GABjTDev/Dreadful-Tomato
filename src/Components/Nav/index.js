import React from 'react';
import { NavLink } from 'react-router-dom';
import MOVIES from '../../assets/icon-movies.png';
import SERIES from '../../assets/icon-series.png';
import FILTER from '../../assets/icon-filter.png';


const Nav = ({setShowSearch}) => {

  const handleFilter = () => setShowSearch((search) => !search);

  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/catalog/movie' className='links' >
            <img src={MOVIES} alt='icon movies' />
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink to='/catalog/series' className='links' >
            <img src={SERIES} alt='icon series' />
            Series
          </NavLink>
        </li>
      </ul>
      <button className='btn filter links' onClick={handleFilter}>
        <img src={FILTER} alt='icon series' />
        Filters
      </button>
    </nav>
  )
}

export default Nav
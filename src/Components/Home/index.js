import React from 'react'
import MOVIES from '../../assets/movies.png'
import SERIES from '../../assets/series.png'
import { useNavigate } from 'react-router-dom';
import Header from '../Header';

const Home = () => {

  let navigate = useNavigate();

  const handleContain = (type) => {
    navigate(`/catalog/${type}`);
  }

  return (
    <>
      <Header />
      <main className='main'>
        <div className='main--contain movies' data-testid='movies' onClick={() => handleContain('movie')}>
          <img src={MOVIES} alt="cover movies" />
          <div className='main--contain-text'>
            <h2>Movies</h2>
          </div>
        </div>
        <div className='main--contain series' data-testid='series' onClick={() => handleContain('series')}>
          <img src={SERIES} alt="cover series" />
          <div className='main--contain-text'>
            <h2>Series</h2>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
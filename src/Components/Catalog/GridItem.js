import React from 'react';
import CALENDAR from '../../assets/icon-calendar.png';


const GridItem = ({data}) => {
  return (
    <div className='grid--item'>
        <img src={data.images['Poster Art'].url} alt="dasdas" />
        <div className='grid--text'>
            <div className='grid--text-padding'>
                <h3>{data.title}</h3>
                <div className='grid--text-year'>
                    <img src={CALENDAR} alt='icon calendar' />
                    <p>{data.releaseYear}</p>
                </div>
                <p>
                    {data.description}
                </p>
            </div>
        </div>
    </div>
  )
}

export default GridItem
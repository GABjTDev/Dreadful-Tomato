import React, { useState, useEffect } from 'react';
import Loading from '../Loading/Loading';
import Pagination from '../Pagination/Pagination';
import GridItem from './GridItem';

const Contain = ({type, catalog}) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout();
      setLoading(true);
    };

  }, [catalog]);

  return (
    <div className='container'>
        <h2>Popular {type === 'movie' ? 'Movies': 'Series'}</h2>
        {
          loading ?
            <Loading />
          :
          (
            <>
              <div className='grid'>
                {
                  catalog.map(cat => <GridItem key={cat.title} data={cat}/>)
                }
              </div>
              <Pagination />
            </>
          )
        }
      
    </div>
  )
};

export default Contain;
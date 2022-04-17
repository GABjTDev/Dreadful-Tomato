import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header';
import Search from '../Search/Search';
import data from '../../data/data.json';
import Contain from './Contain';

const Catalog = () => {

  const {type} = useParams();
  const [showSearch, setShowSearch] = useState(false);
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {

    setShowSearch(false);
    // fetch('https://gitlab.com/-/snippets/2041384/raw/master/data.json')
    //   .then(res => res.json())
    //   .then(data => console.log(data))

    const dataFilter = data.entries.filter(el => el.programType === type).slice(0, 10);
    setCatalog(dataFilter);

  }, [type])
  

  return (
    <>
      <Header setShowSearch={setShowSearch} />
      <Search showSearch={showSearch} setCatalog={setCatalog} type={type} />
      <main className='main--catalog'>
        {
          catalog.length < 1 ?
            <p style={{color: 'white', textAlign: 'center'}}>There are no matches </p>
          :
          <Contain type={type} catalog={catalog} />
        }
      </main>
    </>
  )
}

export default Catalog
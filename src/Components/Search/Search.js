import { useState, useEffect } from 'react';
import LOUPE from '../../assets/icon-loupe.png';
import CALENDAR from '../../assets/icon-calendar.png';
import ModalSearch from './ModalSearch';
import data from '../../data/data.json';

const Search = ({showSearch, setCatalog, type}) => {

  const [year, setYears] = useState('');
  const [search, setSearch] = useState('');
  const [modalSearch, setModalSearch] = useState(false);

  const handleChange = (e) => setSearch(e.target.value.toLowerCase());

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataFilter = data.entries
      .filter(el => el.programType === type)
      .filter(el => el.title.toLowerCase().includes(search)).splice(0, 10);

    setSearch('');
    setYears('');
    setCatalog(dataFilter);
  }

  const openModal = () => setModalSearch(!modalSearch);

  useEffect(() => {
    return () => {
      setModalSearch(false);
    }
  }, [])
  

  return (
    <div className={`search ${showSearch? 'active' : 'false'}`}>
        <div className="container search-container">
            <form className='search--form' onSubmit={handleSubmit}>
                <div className='input input--name'>
                    <img src={LOUPE} alt='loupe icon' className="input--img"/>
                    <input type='text' placeholder='Name' className="input--text" value={search} onChange={handleChange} />
                </div>
                <div className='input input--picker'>
                    <div className='input--click' onClick={openModal}>
                      <img src={CALENDAR} alt='calendar icon' className="input--img"/>
                      <input type='text' placeholder='1920-1988' className="input--text" readOnly="readonly" value={year} />
                    </div>
                    {
                      modalSearch &&
                        <ModalSearch setYears={setYears} setCatalog={setCatalog} type={type} />
                    }
                </div>
                <button style={{display: 'none'}}></button>
            </form>
        </div>
    </div>
  )
}

export default Search
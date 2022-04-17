import React, { useRef } from 'react';
import LEFT from '../../assets/icon-left.png';
import RIGHT from '../../assets/icon-right.png';

const ModalSearch = ({setYears, setCatalog, catalog}) => {

    const years = useRef();

    const handleYears = () => {
        console.log(years);
    }

  return (
    <div className='modal'>
        <div className='modal--header'>
            <img src={LEFT} alt={'icon left'} />
            <p>2015</p>
            <img src={RIGHT} alt={'icon right'} />
        </div>
        <div className='years' ref={years} onClick={handleYears} >
            <p>2019</p>
            <p>2018</p>
            <p>2017</p>
            <p>2016</p>
            <p className='active'>2015</p>
            <p>2014</p>
            <p>2013</p>
            <p>2012</p>
            <p>2011</p>
            <p>2010</p>
            <p>2009</p>
            <p>2008</p>
        </div>
    </div>
  )
}

export default ModalSearch
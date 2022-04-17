import React from 'react';
import LEFT from '../../assets/icon-left.png';
import RIGHT from '../../assets/icon-right.png';

const Pagination = () => {
  return (
    <div className='pagination'>
        <img src={LEFT} alt={'icon left'} />
        <div className='circle active'>
            <p>1</p>
        </div>
        <div className='circle'>
            <p>2</p>
        </div>
        <div className='circle'>
            <p>3</p>
        </div>
        <div className='circle'>
            <p>4</p>
        </div>
        <div className='circle'>
            <p>5</p>
        </div>
        <img src={RIGHT} alt={'icon right'} />
    </div>
  )
}

export default Pagination
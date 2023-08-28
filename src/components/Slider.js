import React, { useEffect, useState } from 'react';
import { SliderData } from './SliderData';

const Slider = ({slides}) => {
    const [ current, setCurrent ] = useState(0)
    const length = slides.length;
    
    const nextSlide = () => {
        setInterval( setCurrent(current === length -1 ? 0 : current + 1), 10000)
    }

    setInterval(nextSlide, 5000)

  return (
    <div className='slider'>
        {SliderData.map((slides, index) => {
            return (
            <div  key={index} className={index === current ? 'slide active' : 'slide' }>
                {index === current && (<img key={index} alt={index} src={slides.image} className='slider-image'/>
                )}
            </div>    
            )
        })}
    </div>
  )
 
}

export default Slider;
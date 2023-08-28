import React from 'react'
import Picture from './Picture';

export default function Farm() {
    const pictureArray = [
        "./pictures/28.jpg",
        "./pictures/47.jpg",
        "./pictures/56.jpg",
        "./pictures/44.jpg",
        "./pictures/61.jpg",
        "./pictures/Sam.jpg",
        "./pictures/Tucking In Team 2020.jpg",
      ];
      return pictureArray.map((image, index) => {
        return (
          <div key={index} className="artwork-container">
            <Picture key={index} image={image}/>
          </div>
        );
      });
}

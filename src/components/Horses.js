import React from 'react'
import Picture from './Picture';

export default function Horses() {
    const pictureArray = [
        "./pictures/1a.jpg",
        "./pictures/17.jpg",
        "./pictures/18.jpg",
        "./pictures/35.jpg",
        "./pictures/38.jpg",
        "./pictures/67.jpg",
        "./pictures/70.jpg",
        "./pictures/79.jpg",
      ];
      return pictureArray.map((image, index) => {
        return (
          <div key={index} className="artwork-container">
            <Picture key={index} image={image}/>
          </div>
        );
      });
}

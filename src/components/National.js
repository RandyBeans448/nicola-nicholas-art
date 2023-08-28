import React from 'react'
import Picture from './Picture';

export default function National() {
    const pictureArray = [
        "./pictures/1.jpg",
        "./pictures/3.jpg",
      ];
      return pictureArray.map((image, index) => {
        return (
          <div key={index} className="artwork-container">
            <Picture key={index} image={image}/>
          </div>
        );
      });
}
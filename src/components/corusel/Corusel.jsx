import React, { useState } from 'react';
import './CoruselModule.css';

export default function Corusel() {
  const [offset, setOffset] = useState(0);

  const handleSliderChange = (event) => {
    const sliderValue = parseInt(event.target.value, 10);
    setOffset(sliderValue);
  };

  const calculateTransform = (baseOffset) => {
    if (baseOffset < 300) {
      return `translateX(-${baseOffset}px)`;
    } else {
      return `translateX(-300px) translateX(${300 - baseOffset}px)`;
    }
  };

  const calculateITWordTransform = (baseOffset) => {
    if (baseOffset < 700) {
      return 'translateX(0)';
    } else {
      return `translateX(${700 - baseOffset}px)`;
    }
  };

  return (
    <>
      <div className="container-corusel">
        <div className="title-corusel" 
        // style={{ transform: calculateITWordTransform(offset) }}
        >
          <div className="it-word">
            <div className="btn-i" style={{ position: 'relative' }} >I</div>
            <div className="btn-t" style={{ zIndex: 1 }}>T</div>
          </div>
          <div className="sybtitle-corusel">FESTIVAL</div>
        </div>
        <div className="text-container">
          <div className="text-info"
          //  style={{ transform: calculateTransform(offset) }}
           >
            <div className="uptitle-info">
              Платформа для смелых идей <br />
              и невероятных возможностей
            </div>
            <div className="subtitle-info">
              Это событие, объединяющее людей из мира <br />
              информационных технологий для творческого обмена <br />
              идеями, разработки проектов и налаживания контактов.
            </div>
          </div>
          {/* <div className="imgs-box" style={{ transform: calculateTransform(offset) }}>
            <div className="img-box">
              <div className="gallery">
                <div className="boxx-2">
                  <div className="boxx-1">
                    <img src="./src/assets/corusel/опенэйр 2.svg" alt="Gallery image 1" className="gallery__img" ></img>
                    <img src="./src/assets/corusel/start 2.svg" alt="Gallery image 2" className="gallery__img" style={{ marginTop: '15px' }} />
                  </div>
                </div>
                <img src="./src/assets/corusel/xhib 2company.svg" alt="Gallery image 3" className="gallery__img" />
                <div className="boxx-3">
                  <img src="./src/assets/corusel/speaker 2.svg" alt="Gallery image 4" className="gallery__img" />
                  <div className="boxx4">
                    <img src="./src/assets/corusel/ызщке 2.svg" alt="Gallery image 5" className="gallery__img" />
                    <img src="./src/assets/corusel/business 2.svg" alt="Gallery image 6" className="gallery__img" />
                  </div>
                </div>
                <img src="./src/assets/corusel/resort 2.svg" alt="Gallery image 6" className="gallery__img" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className="slider-container">
        <input
          className="gusen"
          type="range"
          min="0"
          max="1400"
          value={offset}
          onChange={handleSliderChange}
        />
      </div> */}
    </>
  );
}




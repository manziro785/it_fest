import React, { useEffect } from 'react';
import './slider.css';

const Slider = () => {
    useEffect(() => {
        const track = document.querySelector('.carousel__track');
        let cloneCount = track.children.length;
        for (let i = 0; i < cloneCount; i++) {
            let clone = track.children[i].cloneNode(true);
            track.appendChild(clone);
        }
    }, []);

    return (
        <section className="speakers" id="spikers">
            <div className="container d-flex justify-content-center sm:flex-row mb-10">
                <h1 className="text-center text-4xl xl:text-5xl font-bold mb-10 sm:mb-0" id="festival-sections">
                    Спикеры
                </h1>
            </div>
            <p className="text-center speakers-desc">
                Наши онлайн-конференции будут вести ведущие эксперты и лидеры в сфере, которые поделятся своим видением необходимых решений для создания сервисов будущего.
            </p>
            <div className="carousel">
                <div className="carousel__track">
                    <div className="carousel__slide"><img src="./src/assets/scroller/Frame 39.svg" alt="Speaker 1" /></div>
                    <div className="carousel__slide"><img src="./src/assets/scroller/Frame 40 (1).svg" alt="Speaker 2" /></div>
                    <div className="carousel__slide"><img src="./src/assets/scroller/Frame 41.svg" alt="Speaker 3" /></div>
                    <div className="carousel__slide"><img src="./src/assets/scroller/Frame 41.svg" alt="Speaker 4" /></div>
                </div>
            </div>
        </section>
    );
};

export default Slider;



// import React, { useEffect, useRef, useState } from 'react';
// import './scroller.css';
// import $ from 'jquery'; // Импортируем библиотеку jQuery

// const CustomCarousel = () => {
//   const trackRef = useRef(null);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     const track = trackRef.current;
//     const slides = Array.from(track.children);
//     const slideCount = slides.length;

//     // Duplicate slides to create an infinite loop effect
//     for (let i = 0; i < slideCount; i++) {
//       const clone = slides[i].cloneNode(true);
//       track.appendChild(clone);
//     }

//     // Функция переключения картинок
//     $('.small ul li > a').click(function (e) {
//       $('.big img').attr('src', $(this).attr('href'));
//       e.preventDefault();
//     });

//     // Счет галереи
//     let img = []; // Пустой массив(хранилище) с индексом картинок
//     let smallImg = $('.small ul li'); //Путь до наших картинок
//     smallImg.each(function () {
//       // Перебираем наши эл-ты с картинками и пушим их в массив img
//       img.push($(this).index());
//     }).click(function () {
//       // Выводит номер картинки, по которой был совершен клик
//       $('.photo').html(`<p>${$(this).index() + 1}/${img.length}</p>`);
//     });
//   }, []);

//   const scrollLeft = () => {
//     if (trackRef.current) {
//       const scrollAmount = 270; // Прокрутка на 270px влево
//       trackRef.current.scrollBy({
        
//         left: -scrollAmount,
//         behavior: 'smooth', // Плавная анимация прокрутки
//       });
//     }
//   };
  
//   const scrollRight = () => {
//     console.log('jdbfj')
//     if (trackRef.current) {
//       const scrollAmount = 270; // Прокрутка на 270px вправо
//       trackRef.current.scrollBy({
//         left: scrollAmount,
//         behavior: 'smooth', // Плавная анимация прокрутки
//       });
//     }
//   };
  
// //   const handleMouseEnter = () => {
// //     setIsHovered(true);
// //   };

// //   const handleMouseLeave = () => {
// //     setIsHovered(false);
// //   };

//   return (
    
//     <div className="carousel-container" id= 'carousel' style={{marginBottom: '50px'}}>
     
//       <div className="carousel">
//         <div
//           className={`carousel__track ${isHovered ? 'paused' : ''}`}
//           ref={trackRef}
//         >          <div className="carousel__slide">
//             <div className="box--5">
//               <img src="./src/assets/scroller/Frame 39.svg" alt="Slide 1" className='img11' style={{ margin: '16px 0 0 0' }} />
//               <img src="./src/assets/scroller/Frame 48 (2).svg" alt="Slide 2" className='img11' />
//             </div>
//           </div>
//           <div className="carousel__slide">
//             <img src="./src/assets/scroller/Frame 41.svg" alt="Slide 3" className='img11' />
//           </div>
//           <div className="carousel__slide">
//             <img src="./src/assets/scroller/Frame 42 (1).svg" alt="Slide 4" className='img12' />
//             <div className="box--3">
//               <img src="./src/assets/scroller/Frame 43 (1).svg" alt="Slide 5" className='img11' />
//               <img src="./src/assets/scroller/Frame 44 (1).svg" alt="Slide 6" className='img11' />
//             </div>
//           </div>
//           <div className="carousel__slide">
//             <img src="./src/assets/scroller/Frame 46 (1).svg" alt="Slide 7" />
//           </div>
//           <div className="carousel__slide">
//             <div className="box--5">
//               <img src="./src/assets/scroller/Frame 40 (1).svg" alt="Slide 7" className='img11' />
//               <img src="./src/assets/scroller/Frame 47 (1).svg" alt="Slide 7" className='img11' style={{ marginTop: '10px' }} />
//             </div>
//           </div>
//           <div className="carousel__slide">
//             <img src="./src/assets/scroller/Frame 45 (2).svg" alt="Slide 7" />
//           </div>
//           {/* Cloned slides for infinite loop */}
//           <div className="carousel__slide">
//             <div className="box--5">
//               <img src="./src/assets/scroller/Frame 39.svg" alt="Slide 1" className='img11' style={{ margin: '16px 0 0 0' }} />
//               <img src="./src/assets/scroller/Frame 48 (2).svg" alt="Slide 2" className='img11' />
//             </div>
//           </div>
//           <div className="carousel__slide">
//             <img src="./src/assets/scroller/Frame 41.svg" alt="Slide 3" className='img11' />
//           </div>
//           <div className="carousel__slide">
//             <img src="./src/assets/scroller/Frame 42 (1).svg" alt="Slide 4" className='img12' />
//             <div className="box--3">
//               <img src="./src/assets/scroller/Frame 43 (1).svg" alt="Slide 5" className='img11' />
//               <img src="./src/assets/scroller/Frame 44 (1).svg" alt="Slide 6" className='img11' />
//             </div>
//           </div>
//           <div className="carousel__slide">
//             <img src="./src/assets/scroller/Frame 46 (1).svg" alt="Slide 7" />
//           </div>
//           <div className="carousel__slide">
//             <div className="box--5">
//               <img src="./src/assets/scroller/Frame 40 (1).svg" alt="Slide 7" className='img11' />
//               <img src="./src/assets/scroller/Frame 47 (1).svg" alt="Slide 7" className='img11' style={{ marginTop: '10px' }} />
//             </div>
//           </div>
//           <div className="carousel__slide">
//             <img src="./src/assets/scroller/Frame 45 (2).svg" alt="Slide 7" />
//           </div>

//           <div className="carousel__slide">
//             <div className="box--5">
//               <img src="./src/assets/scroller/Frame 39.svg" alt="Slide 1" className='img11' style={{ margin: '16px 0 0 0' }} />
//               <img src="./src/assets/scroller/Frame 48 (2).svg" alt="Slide 2" className='img11' />
//             </div>
//           </div>
//           <div className="carousel__slide">
//             <img src="./src/assets/scroller/Frame 41.svg" alt="Slide 3" className='img11' />
//           </div>
//           <div className="carousel__slide">
//             <img src="./src/assets/scroller/Frame 42 (1).svg" alt="Slide 4" className='img12' />
//             <div className="box--3">
//               <img src="./src/assets/scroller/Frame 43 (1).svg" alt="Slide 5" className='img11' />
//               <img src="./src/assets/scroller/Frame 44 (1).svg" alt="Slide 6" className='img11' />
//             </div>
//           </div>
//           <div className="carousel__slide">
//             <img src="./src/assets/scroller/Frame 46 (1).svg" alt="Slide 7" />
//           </div>
//           <div className="carousel__slide">
//             <div className="box--5">
//               <img src="./src/assets/scroller/Frame 40 (1).svg" alt="Slide 7" className='img11' />
//               <img src="./src/assets/scroller/Frame 47 (1).svg" alt="Slide 7" className='img11' style={{ marginTop: '10px' }} />
//             </div>
//           </div>
//           <div className="carousel__slide">
//             <img src="./src/assets/scroller/Frame 45 (2).svg" alt="Slide 7" />
//           </div>

//           <div className="carousel__slide">
//             <div className="box--5">
//               <img src="./src/assets/scroller/Frame 39.svg" alt="Slide 1" className='img11' style={{ margin: '16px 0 0 0' }} />
//               <img src="./src/assets/scroller/Frame 48 (2).svg" alt="Slide 2" className='img11' />
//             </div>
//           </div>
//           <div className="carousel__slide">
//             <img src="./src/assets/scroller/Frame 41.svg" alt="Slide 3" className='img11' />
//           </div>
//           <div className="carousel__slide">
//             <img src="./src/assets/scroller/Frame 42 (1).svg" alt="Slide 4" className='img12' />
//             <div className="box--3">
//               <img src="./src/assets/scroller/Frame 43 (1).svg" alt="Slide 5" className='img11' />
//               <img src="./src/assets/scroller/Frame 44 (1).svg" alt="Slide 6" className='img11' />
//             </div>
//           </div>
//           <div className="carousel__slide">
//             <img src="./src/assets/scroller/Frame 46 (1).svg" alt="Slide 7" />
//           </div>
//           <div className="carousel__slide">
//             <div className="box--5">
//               <img src="./src/assets/scroller/Frame 40 (1).svg" alt="Slide 7" className='img11' />
//               <img src="./src/assets/scroller/Frame 47 (1).svg" alt="Slide 7" className='img11' style={{ marginTop: '10px' }} />
//             </div>
//           </div>
//           <div className="carousel__slide">
//             <img src="./src/assets/scroller/Frame 45 (2).svg" alt="Slide 7" />
//           </div>
//         </div>

//       </div>
//       {/* <div className="btns-scroller">
//       <button
//         className="carousel__button carousel__button--left"
//         onClick={scrollLeft}
//         // onMouseEnter={handleMouseEnter}
//         // onMouseLeave={handleMouseLeave}
//       >
//         <img src="./src/assets/scroller/arrowtail 2.svg" alt="" />
//       </button>
//       <button
//         className="carousel__button carousel__button--right"
//         onClick={scrollRight}
//         // onMouseEnter={handleMouseEnter}
//         // onMouseLeave={handleMouseLeave}
//       >
//                 <img src="./src/assets/scroller/arrowtail 1.svg" alt="" />

//       </button>
//       </div> */}
//     </div>
//   );
// };

// export default CustomCarousel;

import React, { useEffect, useRef } from 'react';
import './scroller.css';

const CustomCarousel = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    const slides = Array.from(track.children);
    const slideCount = slides.length;

    // Clone slides to create an infinite loop effect
    for (let i = 0; i < slideCount; i++) {
      const clone = slides[i].cloneNode(true);
      track.appendChild(clone);
    }
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel__track" ref={trackRef}>
          <div className="carousel__slide">
            <div className="box--5">
              <img src="./src/assets/scroller/Frame 39.svg" alt="Slide 1" className="img11" style={{ margin: '16px 0 0 0' }} />
              <img src="./src/assets/scroller/Frame 48 (2).svg" alt="Slide 2" className="img11" />
            </div>
          </div>
          <div className="carousel__slide">
            <img src="./src/assets/scroller/Frame 41.svg" alt="Slide 3" className="img11" />
          </div>
          <div className="carousel__slide">
            <img src="./src/assets/scroller/Frame 42 (1).svg" alt="Slide 4" className="img12" />
            <div className="box--3">
              <img src="./src/assets/scroller/Frame 43 (1).svg" alt="Slide 5" className="img11" />
              <img src="./src/assets/scroller/Frame 44 (1).svg" alt="Slide 6" className="img11" />
            </div>
          </div>
          <div className="carousel__slide">
            <img src="./src/assets/scroller/Frame 46 (1).svg" alt="Slide 7" />
          </div>
          <div className="carousel__slide">
            <div className="box--5">
              <img src="./src/assets/scroller/Frame 40 (1).svg" alt="Slide 7" className="img11" />
              <img src="./src/assets/scroller/Frame 47 (1).svg" alt="Slide 7" className="img11" style={{ marginTop: '10px' }} />
            </div>
          </div>
          <div className="carousel__slide">
            <img src="./src/assets/scroller/Frame 45 (2).svg" alt="Slide 7" />
          </div>
          {/* Add more slides as needed */}
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;

// import React, { useEffect, useRef } from 'react';
// import './scroller.css';

// const CustomCarousel = () => {
//   const trackRef = useRef(null);

//   useEffect(() => {
//     const track = trackRef.current;
//     const slides = Array.from(track.children);
//     const slideCount = slides.length;

//     // Clone slides to create an infinite loop effect
//     for (let i = 0; i < slideCount; i++) {
//       const clone = slides[i].cloneNode(true);
//       track.appendChild(clone);
//     }
//   }, []);

//   return (
//     <div className="carousel-container">
//       <div className="carousel">
//         <div className="carousel__track" ref={trackRef}>
//           <div className="carousel__slide">
//             <div className="box--5">
//               <img src="./src/assets/scroller/Frame 39.svg" alt="Slide 1" className="img11" style={{ margin: '16px 0 0 0' }} />
//               <img src="./src/assets/scroller/Frame 48 (2).svg" alt="Slide 2" className="img11" />
//             </div>
//           </div>
//           <div className="carousel__slide">
//             <img src="./src/assets/scroller/Frame 41.svg" alt="Slide 3" className="img11" />
//           </div>
//           <div className="carousel__slide">
//             <img src="./src/assets/scroller/Frame 42 (1).svg" alt="Slide 4" className="img12" />
//             <div className="box--3">
//               <img src="./src/assets/scroller/Frame 43 (1).svg" alt="Slide 5" className="img11" />
//               <img src="./src/assets/scroller/Frame 44 (1).svg" alt="Slide 6" className="img11" />
//             </div>
//           </div>
//           <div className="carousel__slide">
//             <img src="./src/assets/scroller/Frame 46 (1).svg" alt="Slide 7" />
//           </div>
//           <div className="carousel__slide">
//             <div className="box--5">
//               <img src="./src/assets/scroller/Frame 40 (1).svg" alt="Slide 7" className="img11" style={{ marginTop: '10px', width: "272px" }}/>
//               <img src="./src/assets/scroller/Frame 47 (1).svg" alt="Slide 7" className="img11" style={{ marginTop: '5px', width: "272px" }} />
//             </div>
//           </div>
//           <div className="carousel__slide">
//             <img src="./src/assets/scroller/Frame 45 (2).svg" alt="Slide 7" />
//           </div>
//           {/* Add more slides as needed */}
//         </div>
//       </div>
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
              <img src="./src/assets/scroller/Frame 40 (1).svg" alt="Slide 7" className="img11" style={{ marginTop: '10px', width: "272px" }}/>
              <img src="./src/assets/scroller/Frame 47 (1).svg" alt="Slide 7" className="img11" style={{ marginTop: '5px', width: "272px" }} />
            </div>
          </div>
          <div className="carousel__slide">
            <img src="./src/assets/scroller/Frame 45 (2).svg" alt="Slide 7" />
          </div>
          {/* The cloned slides will be added here automatically */}
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;

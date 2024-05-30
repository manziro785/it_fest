import React from 'react';
import './MapModule.css';

const listItems = [
  { img: './src/assets/map/Group 136.svg', text: 'IT Решения' },
  { img: './src/assets/map/Group 137.svg', text: 'Мобилография' },
  { img: './src/assets/map/Group 138.svg', text: 'Кибербезопасность' },
  { img: './src/assets/map/Group 139.svg', text: 'Киберспорт' },
  { img: './src/assets/map/Group 140.svg', text: 'Дизайн и Анимация' },
  { img: './src/assets/map/Group 141.svg', text: 'IT Экспо' },
  { img: './src/assets/map/Group 142.svg', text: 'Робототехника' },
  { img: './src/assets/map/Group 143.svg', text: 'Гонки на дронах' },
];

const Map = () => {
  return (
    <div className="map" id = 'map'>
      <div className="container">
        <div className="info">
          <div className="content">
            <div className="title-map">
              Ориентировочная<br />
              <span className="indented">карта фестиваля</span>
            </div>
            <ol className="list">
              {listItems.map((item, index) => (
                <div className="number" key={index}>
                  <img src={item.img} className="img-bro" alt="" />
                  <li>{item.text}</li>
                </div>
              ))}
            </ol>
          </div>
          <div className="map-img">
            <img src="./src/assets/map/map.svg" alt="map" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;

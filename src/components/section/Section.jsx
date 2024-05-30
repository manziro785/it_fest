import React from 'react';
import './SectionModule.css';
import { useNavigate } from 'react-router';


const sections = [
  {
    id: 1,
    title: "IT решения",
    description: "Турнир будет организован в формате хакатона, призванный обеспечить участников мероприятия необходимыми знаниями и навыками.",
    image: "./src/assets/section/hackathon.svg",
    actionText: "Участвовать"
  },
  {
    id: 2,
    title: "Мобилография",
    description: "В секции «Мобилография» принимают участие творческие видео работы в форматах: рекламных роликов, интернет-видео, видео блоги.",
    image: "./src/assets/section/mobilo.svg",
    actionText: "Участвовать"
  },
  {
    id: 3,
    title: "Кибербезопасность",
    description: "Секция: Кибербезопасность Целями проведения соревнования являются развитие CTF-движения в Кыргызстане.",
    image: "./src/assets/section/hacker.svg",
    actionText: "Участвовать"
  },
  {
    id: 4,
    title: "Киберспорт",
    description: "Секция: Киберспорт Турнир проводится с целью популяризации и развития киберспорта среди молодёжи и более старшего возраста",
    image: "./src/assets/section/kibersp.svg",
    actionText: "Участвовать"
  },
  {
    id: 5,
    title: "Дизайн и Анимация",
    description: "Команды от 3-5 человека ~ команда (интересующиеся мультяшными вебтунами, прошедшие обучение вебтунам и т.д.) за 24 часа создают электронный комикс (вебтун).",
    image: "./src/assets/section/animation.svg",
    actionText: "Участвовать"
  },
  {
    id: 6,
    title: "IT Экспо",
    description: "Данная секция представляет собой международную выставку, которая является символом индустриализации.",
    image: "./src/assets/section/expo.svg",
    actionText: "Участвовать"
  },
  {
    id: 7,
    title: "Робототехника",
    description: "В рамках секции робототехники состоится серия этапных соревнований для детей в возрасте от 12 до 16 лет. Команды допускаются до трех участников",
    image: "./src/assets/section/robcomp.svg",
    actionText: "Участвовать"
  },
  {
    id: 8,
    title: "Гонки на дронах",
    description: "Регламент гонок на дронах предоставляет возможность всем желающим пройти специальный маршрут с испытаниями",
    image: "./src/assets/section/drons.svg",
    actionText: "Участвовать"
  },
];

const Section = () => {

  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate('/register');
};

  return (
    <div className="festival-sections" id='sections1'>
    <h1 className="title">Секции фестиваля</h1>
    <div className="sections-grid">
      {sections.map((section, index) => (
        <div key={section.id} className={`section ${index % 2 === 0 ? 'right' : 'left'}`}>
          <img src={section.image} alt={section.title} className="section-image" />
          <div className={` ${section.id % 2 === 0 ? 'section-overlay' : 'section-overlay1'}`}>
            <div className='container-over'>
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
            <button onClick={handleRedirect}>{section.actionText}</button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Section;

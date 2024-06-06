import React from 'react'
import { useNavigate } from 'react-router-dom';
import './noPage.css'

export default function NoPage() {
    const navigate = useNavigate();


    const handleRedirect = () => {
        navigate('/');
      };

     
  return (
    <>
<header className="header3">
      <div className="header-over1"> 
        <button className="header-wrapper" onClick={handleRedirect} style={{ display: 'flex', alignItems: 'center' }}>
          <img src="./src/assets/auth/arrowtail 3.svg" alt="arrow back" style={{ width: '25px' }} />
          На главную
        </button>
        <div className="image">
          <div className="header-image">
            <a target="_blank" href="https://web.whatsapp.com/">
              <img src="./src/assets/banner/item1.svg" alt="WhatsApp" />
            </a>
          </div>
          <div className="header-image">
            <a target="_blank" href="https://www.instagram.com/">
              <img src="./src/assets/banner/item2.svg" alt="Instagram" />
            </a>
          </div>
          <div className="header-image">
            <a target="_blank" href="https://web.telegram.org/">
              <img src="./src/assets/banner/item3.svg" alt="Telegram" />
            </a>
          </div>
        </div>
        </div>
      </header> 
      <div className="overlay1"></div>

      <div className="no-wrapp">
        <div className="contaimer-no">
            <div className="title-no">
            Oops!
            </div>
            <div className="subtitle-no">
            404 - страница не найдена            </div>
            <div className="text-no">
            Страница которую вы ищете возможно была удалена, 
            <br/>
            переименована или временно недоступна
            </div>
            <div className="btn-back-no">
                <div onClick={handleRedirect}>
                Вернуться на главную

                </div>
            </div>
        </div>
      </div>
         </>
  )
}

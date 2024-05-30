import React, {useState} from 'react'
import './FooterModule.css'

export default function FooterComp() {
  const [isCopied, setIsCopied] = useState(false);
  const [Copied, setCopied] = useState(false);

  const handleCopyPhoneNumber = () => {
    const phoneNumber = ' 0990 888 887 '; 
    navigator.clipboard.writeText(phoneNumber);
    setIsCopied(true); 
    setTimeout(() => setIsCopied(false), 3000); // Через 3 секунды сбрасываем флаг копирования
  };
  const handleCopyGmail = () => {
    const phoneNumber = 'itfest2024@gmail.com'; 
    navigator.clipboard.writeText(phoneNumber); // Копируем номер в буфер обмена
    setCopied(true); // Устанавливаем флаг копирования в true
    setTimeout(() => setCopied(false), 3000); // Через 3 секунды сбрасываем флаг копирования
  };

  return (
    <>
    {/* <div className="wrapper-container"> */}
    <div className="footer-wrap" id='footer'>
    <div className="wrapper-container-footer">
    <div className="footer">
      <div className="up-footer">
      <div className="left-footer">
        <div>
        <div className="title-footer">
<div>IT </div>
<div>FESTIVAL</div>
        </div>

        <div className="adress-footer">
          <div>16-17 августа, 2024</div>
          <div>Адрес: <span><a href="https://2gis.kg/bishkek/firm/70000001062985592" target="_blank">Пансионат Baytur Resort & SPA</a>
            </span></div>
                    <div>114б/2, Бостери 722103, Иссык-Кульская</div>
<div>область, Кыргызстан</div>
<div>Телефон: <span onClick={handleCopyPhoneNumber} style={{cursor: 'pointer', textDecoration: 'underline'}}>0990 888 887</span> </div>
 
            {isCopied && 
              <div className="wrapper-message">
              <div className="copy-message">
                <img src="./src/assets/common/icon (3).svg" alt="" style={{marginRight: '10px'}} />
                Номер телефона скопирован!
                </div>
                </div>
              }
        </div>
        </div>
<div>
        <div className="creator-footer">
          <div className="title-creator">
            Организатор мероприятия
          </div>
          <a href="https://statsnet.co/companies/kg/174095008">
          <img src="./src/assets/footer/Group 176.svg" alt="" />
          </a>
        </div>

        <div className="global-quest">
         <div>Общие вопросы</div> 
        <div><span onClick={handleCopyPhoneNumber}  style={{cursor: 'pointer', textDecoration: 'underline'}}>+996 996 996 996</span></div>
        <div><span onClick={handleCopyGmail}  style={{cursor: 'pointer', textDecoration: 'underline'}}>itfest2024@gmail.com</span></div>
        {Copied && 
            <div className="wrapper-message">
            <div className="copy-message">
              <img src="./src/assets/common/icon (3).svg" alt="" style={{marginRight: '10px'}} />
              Почта скопирована!
              </div>
              </div>
            }
        </div>
      </div>
      </div>
            <div className="right-footer">
              <div className="program-footer">
                <div className="title-right-footer">
                Программа 
                </div>
                <div className="value-footer">
                  <div>Темы 2024</div>
                  <div>Спикеры 2024 года</div>
                  <div>Карта 2024 года</div>
                  <div>Участники выставки</div>
                  <div>Регистрация</div>
                </div>

              </div>
              <div className="section-footer">
              <div className="title-right-footer">
                Секции
                </div>
                <div className="value-footer">

                <div>IT решения</div>
                <div>Мобилография</div>
                <div>Кибербезопасность</div>
                <div>Киберспорт</div>
                <div>Дизайн и Анимация</div>
                <div>IT Экспо</div>
                <div>Робототехника</div>
                <div>Гонка на дронах</div>
              </div>
              </div>

              <div className="show-footer">
              <div className="title-right-footer">
              Выставка
                </div>
                <div className="value-footer">

                <div>Темы 2024</div>
                <div>Спикеры 2024 года</div>
                <div>Карта 2024 года</div>
                <div>Участники выставки</div>
                <div>Регистрация</div>
              </div>
              </div>
              <div className="media-footer">
              <div className="title-right-footer">
              Медиа центр
                </div>
                <div className="value-footer">

                <div>IT решения</div>
                <div>Мобилография</div>
                <div>Кибербезопасность</div>
                <div>Киберспорт</div>
                <div>Дизайн и Анимация</div>
                <div>IT Экспо</div>
                <div>Робототехника</div>
                <div>Гонка на дронах</div>
              </div>
              </div>
              <div className="links-footer">
              <div className="title-right-footer-last">
              Ссылки
                </div>
                <div className="value-footer">

                <div>IT решения</div>
                <div>Мобилография</div>
                <div>Кибербезопасность</div>
                <div>Киберспорт</div>
                <div>Дизайн и Анимация</div>
                <div>IT Экспо</div>
                <div>Робототехника</div>
                <div>Гонка на дронах</div>
              </div>
              </div>
            </div>

      </div>
      <div className="down-footer">
<div className="btns-social-footer">
<a target="_blank" href="https://web.whatsapp.com/" >

<img src="./src/assets/banner/item1.svg" alt="Image 1" />
</a>
<a target="_blank" href="https://www.instagram.com/" >

<img src="./src/assets/banner/item2.svg" alt="Image 1" />
</a>
<a target="_blank" href="https://web.telegram.org/">

<img src="./src/assets/banner/item3.svg" alt="Image 1" />
</a>
</div>
<div className="line-footer"></div>

<div className="date-footer">
©IT FESTIVAL 2024
</div>
      </div>
      
      </div>
    </div>
    </div>
    {/* </div> */}
    </>
  )
}

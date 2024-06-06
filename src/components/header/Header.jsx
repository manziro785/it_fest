import React , {useState}from 'react'
import '../banner/style.css'

export default function Header() {
  const scrollToElement = (element, duration) => {
    if (element) {
      const start = window.pageYOffset;
      const end = element.getBoundingClientRect().top;
  
      let startTime = null;
  
      const scrollStep = (timestamp) => {
        if (!startTime) {
          startTime = timestamp;
        }
  
        const progress = timestamp - startTime;
        const easeInOutCubic = progress => progress < 0.5
          ? 4 * progress ** 3
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;
  
        window.scrollTo(0, start + end * easeInOutCubic(progress / duration));
  
        if (progress < duration) {
          requestAnimationFrame(scrollStep);
        }
      };
  
      requestAnimationFrame(scrollStep);
    }
  };


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
   const closeMenu = () => {
    setIsOpen(false);
  };

  const handleMenuClick = (event) => {
    event.preventDefault(); // Предотвратить стандартное поведение
    const targetId = event.currentTarget.getAttribute('href').substring(1); // Получить id цели
    const targetElement = document.getElementById(targetId); // Найти элемент по id

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Прокрутить к элементу
    }

    setIsOpen(false); // Закрыть меню
  };
  return (
    <>
        <div className="header-over">
        <div className="wrapper-container">

<header className="header">
{/* <div className="header-ins"> */}
            <div className="header-wrapper">
                <div className="header-logo">
                    <a href="/" className="header-logo-link">
                        <img src="./src/assets/banner/new-logo.svg" alt="Logo" />
                    </a>
                </div>
                <nav className="header-nav">
                    <ul className="header-list">
                        {/* <li className="header-item">
                            <div  className="header-link" onClick={() => scrollToElement(document.getElementById('carousel'), 1000)} style={{paddingTop: '0', cursor: 'pointer'}}>ОБЗОР</div>
                        </li> */}
                        
                        <li className="header-item">
                            <div className="header-link" onClick={() => scrollToElement(document.getElementById('sections1'), 1000)} style={{paddingTop: '0', cursor: 'pointer'}}>СЕКЦИИ</div>
                        </li>
                        <li className="header-item">
                            <div  className="header-link"onClick={() => scrollToElement(document.getElementById('speakers'), 1000)} style={{cursor: 'pointer'}}>ГОСТИ</div>
                        </li>
                        <li className="header-item">
                        <div className="header-link" onClick={() => scrollToElement(document.getElementById('map'), 1000)} style={{paddingTop: '0', cursor: 'pointer'}}>КАРТА</div>
                        </li>
                        <li className="header-item">
                            <div  className="header-link" onClick={() => scrollToElement(document.getElementById('organization'), 1000)} style={{paddingTop: '0', cursor: 'pointer'}}>ПАРТНЕРЫ</div>
                        </li>
                        <li className="header-item">
                            <div  className="header-link"onClick={() => scrollToElement(document.getElementById('footer'), 3000)} style={{cursor: 'pointer'}}>КОНТАКТЫ</div>
                        </li>
                    </ul>
                </nav>
        </div>
        {/* <div className="image-wrap"> */}
        <div className="image">
            <div className="header-image">
                <a target="_blank" href="https://web.whatsapp.com/" >
                    <img src="./src/assets/banner/item1.svg" alt="Image 1" />
                </a>
            </div>
            <div className="header-image">
                <a target="_blank" href="https://www.instagram.com/" >
                    <img src="./src/assets/banner/item2.svg" alt="Image 2" />
                </a>
            </div>
            <div className="header-image">
                <a target="_blank" href="https://web.telegram.org/">
                    <img src="./src/assets/banner/item3.svg" alt="Image 3" />
                </a>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
<img src="./src/assets/banner/menu-img.svg" alt="" />
      </div>
      <div className={`side-menu ${isOpen ? 'open' : ''}`}>
        <div className="btn-close" onClick={closeMenu}>
<img src="./src/assets/banner/Frame 50 (1).svg" alt="" />
        </div>
        {/* <a href="section1" onClick={handleMenuClick}>ОБЗОР</a> */}
        <a href="#section2" onClick={() => scrollToElement(document.getElementById('speakers'), 2000)} style={{cursor: 'pointer'}}>ГОСТИ</a>
        <a href="#section1" onClick={() => scrollToElement(document.getElementById('sections1'), 2000)}>СЕКЦИИ</a>
        <a href="#section4" onClick={() => scrollToElement(document.getElementById('map'), 2000)}>КАРТА</a>
        <a href="#section4"  onClick={() => scrollToElement(document.getElementById('organization'), 2000)}>ПАРТНЕРЫ</a>
        <a href="#section4" onClick={() => scrollToElement(document.getElementById('footer'), 3000)}>КОНТАКТЫ</a>

        <div className="socials">
        <a href="https://web.whatsapp.com/">
                    <img src="./src/assets/banner/item1.svg" alt="Image 1" />
                </a>
                <a href="https://www.instagram.com/">
                    <img src="./src/assets/banner/item2.svg" alt="Image 2" />
                </a>
                <a href="https://web.telegram.org/">
                    <img src="./src/assets/banner/item3.svg" alt="Image 3" />
                </a>
        </div>


      </div>
        </div>
        {/* </div> */}
        {/* </div> */}

      
</header>
</div>
</div>
    </>
  )
}

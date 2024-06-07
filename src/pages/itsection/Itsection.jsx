import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header.jsx';
import '../ITSolutions.css';
import Diamond from '../../assets/backImage/hacaton.svg';
const ITSolutions = () => {
    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate('/register'); // Adjust the path if necessary
    };


    return (
        <>
            <Header/>

            <div className="hero-container" >
                <img src={Diamond} alt={'akbar pnohe'}/>
                <div className="text-overlay1">
                    <div className="content">
                        <div className="left-content">
                            <h1 className="title-section">IT Решения</h1>
                            <div className="text-overlay">
                                <p>
                                    Целями проведения соревнования являются развитие IT в Кыргызстане. Секция "Информационных технологий" призвана обеспечить участников мероприятия необходимыми знаниями и навыками в области информационных технологий, а также продемонстрировать их роль и важность в современном мире.
                                </p>
                            </div>
                            <button onClick={handleRegisterClick} className="register-button">СТАТЬ УЧАСТНИКОМ</button>
                        </div>
                        <div className="right-content">
                            <div className="prizes">
                                <div className="prize-container">
                                    <span className='place'>1 место</span>
                                    <div className="prize prize1">
                                        <span className="amount">50 000 сом</span>
                                    </div>
                                </div>
                                <div className="prize-container">
                                    <span className='place'>2 место</span>
                                    <div className="prize prize2">
                                        <span className="amount">40 000 сом</span>
                                    </div>
                                </div>
                                <div className="prize-container">
                                    <span className='place'>3 место</span>
                                    <div className="prize prize3">
                                        <span className="amount">30 000 сом</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ITSolutions;

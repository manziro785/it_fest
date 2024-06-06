import React, { useState, useRef, useEffect } from 'react';
import './regfirst.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegFirst = () => {
    const [code, setCode] = useState(Array(6).fill(''));
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const inputsRef = useRef([]);

    const handleRedirect = () => {
        navigate('/register');
    };

    const validateCode = () => {
        return code.join('').length === 6 && /^\d{6}$/.test(code.join(''));
    };

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^\d?$/.test(value)) {
            const newCode = [...code];
            newCode[index] = value;
            setCode(newCode);

            if (value && index < 5) {
                inputsRef.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && index > 0 && !code[index]) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateCode()) {
            try {
                const formData = { code: code.join('') };
                const response = await axios.post('http://217.151.230.35:199/api/schema/swagger-ui/#/members/members_register_create', formData);
                console.log('Registration successful:', response.data);
                navigate('/');
            } catch (error) {
                console.error('Error during registration:', error);
                setError('Произошла ошибка при подтверждении кода.');
            }
        } else {
            setError('Пожалуйста, введите корректный шестизначный код.');
        }
    };

    useEffect(() => {
        inputsRef.current[0].focus();
    }, []);

    return (
        <>
           <header className="header2">
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

            <div className="registration-container">
                <div className="overlay"></div>

                <h1 className='btn-title-reg' style={{ alignItems: 'center', justifyContent: 'center', color: 'white', zIndex: '1', marginBottom: '0px' }}>РЕГИСТРАЦИЯ</h1>
        <h2 className='btn-title-reg2' style={{ alignItems: 'center', justifyContent: 'center', color: 'white', zIndex: '1', marginBottom: '10px' }}>Заполнение общей информации</h2>
        <div className="cercles-reg">
          <div className="first-reg"></div>
          <div className="second-reg"></div>
        </div>                <form onSubmit={handleSubmit} className="registration-form">

            <div className="tittle-check">
            Введите шестизначный код, который был отправлен на вашу почту
            </div>
                    <div className="code-inputs">
                        {code.map((digit, index) => (
                             <input
                            key={index}
                            type="text"
                            value={digit}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            maxLength="1"
                            ref={(el) => (inputsRef.current[index] = el)}
                            className="code-input"
                        />
                    ))}
                </div>
                <div className="err-p">
                {error && <p style={{color: '#CA4900',fontSize: '20px', alignItems: 'center', justifyContent: 'center', fontWeight: '700' }}>{error}</p>}
                </div>
               <div className="button-subm">
                <button type="submit" className="submit-button2">Подтвердить</button>
                </div>
            </form>
        </div>
    </>
);
};

export default RegFirst;
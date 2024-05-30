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
          <button className="header-wrapper" onClick={handleRedirect}>
                        <img src="./src/assets/auth/arrowtail 3.svg" alt="" />
            Предыдущий этап
          </button>
          
        </header>
            <div className="registration-container">
                <div className="overlay"></div>

                <h1   className= 'btn-title-reg' style={{ alignItems: 'center', justifyContent: 'center', color: 'white', zIndex: '1' }}>РЕГИСТРАЦИЯ</h1>
                <form onSubmit={handleSubmit} className="registration-form">
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
                {error && <p style={{ color: 'red', alignItems: 'center', justifyContent: 'center' }}>{error}</p>}
                <button type="submit" className="submit-button">Подтвердить</button>
            </form>
        </div>
    </>
);
};

export default RegFirst;
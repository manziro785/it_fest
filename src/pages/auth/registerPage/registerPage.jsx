import React, { useState } from 'react';
import './registerPageModule.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    section: ''
  });

  const [errors, setErrors] = useState({});
  const sections = ['IT решения', 'Мобилография', 'Кибербезопасность', 'Киберспорт', 'Дизайн и Анимация', 'IT Экспо', 'Робототехника', 'Гонки на дронах'];
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/');
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Введите имя';
    if (!formData.email) {
      errors.email = 'Введите электронную почту';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Неверный формат электронной почты';
    }
    if (!formData.section) errors.section = 'Выберите секцию';
    return errors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        console.log('Submitting form data:', formData);  // Log the form data
        const response = await axios.post('http://217.151.230.35:199/api/members/register/', formData);
        console.log('Registration successful:', response.data);
        navigate('/next-step');
      } catch (error) {
        console.error('Error during registration:', error);
        if (error.response) {
          console.error('Server responded with:', error.response.data);
        }
      }
    }
  };

  return (
    <>
{/* <div className="wrapper-regg">
    <div className="header-over1"> */}
    
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
      {/* </div>
      </div> */}
      <div className="registration-container">
        <div className="overlay"></div>
        <h1 className='btn-title-reg' style={{ alignItems: 'center', justifyContent: 'center', color: 'white', zIndex: '1', marginBottom: '0px' }}>РЕГИСТРАЦИЯ</h1>
        <h2 className='btn-title-reg2' style={{ alignItems: 'center', justifyContent: 'center', color: 'white', zIndex: '1', marginBottom: '10px' }}>Заполнение общей информации</h2>
        <div className="cercles-reg">
          <div className="first-reg"></div>
          <div className="second-reg"></div>
        </div>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="main-wrap-reg">
            <div className="left-reg">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Введите имя"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <span className="error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Введите электронную почту"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <span className="error">{errors.email}</span>}
              </div>
            </div>
            <div className="right-reg">
              <div className="form-group">
                <select
                  name="section"
                  value={formData.section}
                  onChange={handleChange}
                >
                  <option value="">Выберите секцию</option>
                  {sections.map((section, index) => (
                    <option key={index} value={section}>{section}</option>
                  ))}
                </select>
                {errors.section && <span className="error">{errors.section}</span>}
              </div>
            </div>
          </div>
          <div className="subm-reg">
          <button type="submit" className="submit-button">Следующий этап</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;

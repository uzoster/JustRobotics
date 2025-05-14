import React, { useState } from 'react';
// import './FormComponent.scss'; // optional, agar SCSS ishlatilayotgan bo‘lsa

const Section = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    course: ''
  });
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [courses] = useState([
    'Роботехника',
    'Живопись для взрослых',
    'Живопись для детей',
    'Плавание',
    'Английский'
  ]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://script.google.com/macros/s/AKfycbxAlMC63Qh05tCQBHFw8ha-xU9vR37RQsfy2-lh0ko6BQtvg6hgR9kOidPJh9X1Jivl/exec', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' },
      mode: 'no-cors'
    })
      .then(() => {
        setFormData({ name: '', phone: '', age: '', course: '' });
      })
      .catch((error) => {
        console.error('Xato:', error);
        setError('Xatolik yuz berdi.');
      });
  };

  const handleCourseSelect = (course) => {
    setFormData({ ...formData, course });
    setIsOpen(false);
  };

  return (
    <div className="form_controller">
        <h2>получите бесплатный первый урок</h2>
        <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Номер телефона"
          value={formData.phone}
          onChange={handleChange}
          required
        />
             {/* Custom Dropdown */}
        <div className='dropdown'>
          <div className='dropdown-header' onClick={toggleDropdown}>
            {formData.course || 'Выберите курс '}
            <i className={`fa fa-chevron-right icon ${isOpen ? 'open' : ''}`}></i>
          </div>
          <div className={`dropdown-body ${isOpen ? 'open' : ''}`}>
            {courses.map((course, index) => (
              <div
                className="dropdown-item"
                onClick={() => handleCourseSelect(course)}
                key={index}
              >
                <span className={`dropdown-item-dot ${formData.course === course ? 'selected' : ''}`}>• </span>
                {course}
              </div>
            ))}
          </div>
        </div>
        
        <input
          type="text"
          name="age"
          placeholder="Возраст"
          value={formData.age}
          onChange={handleChange}
          required
        />



        <button type="submit">ПОЛУЧИТЬ</button>
      </form>
      {error && <p className="status-message">{error}</p>}
        </div>
        <div className="buttons-container">
            <button className="button active">ФИНАЛА ЛЧ</button>
            <button className="button">ФИНАЛА ВЕРХНИ</button>
        </div>
        <div className="info_panel">
                <div className="center_">
                    <a href=""><img src="/image/home/icons/call.png" alt="" /> <span>Адрес Орьентир</span></a>
                    <a href=""><img src="/image/home/icons/map.png" alt="" /> <span>График работы</span></a>
                    <a href=""><img src="/image/home/icons/clock.png" alt="" /> <span>Номера телефонов</span></a>
                </div>
        </div>
        <div className="info_location">
            <img src="/image/home/section/location.png" alt="" />
        </div>
        </div>
  );
};

export default Section;

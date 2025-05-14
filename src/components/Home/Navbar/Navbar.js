import React, { useState } from 'react';

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);
      const [selectedLang, setSelectedLang] = useState('UZ'); // Dastlabki tanlangan til
  
    const handleLangChange = (lang) => {
      setSelectedLang(lang);
      console.log(`Til o'zgartirildi: ${lang}`);
    };
  
  return (
    <div className='home_nav'>
      <div className="line"></div>
        <nav>
           <div className="left_logo">
                <a href=""><img src="/image/home/nav/logo.png" alt="logo" /></a>
            </div> 
            <div className="list">
                <ul>
                  <li><a href="">Главная</a></li>
                  <li><a href="">О нас</a></li>
                  <div className="dropdown-wrapper">
      <button className="dropdown-toggle" onClick={() => setIsOpen(!isOpen)}>
        Курсы 
      </button>
      <div className={`dropdown-menu ${isOpen ? 'open' : ''}`}>
        <a href="#" className="dropdown-item">
          <span className="highlight">робототехника</span>
        </a> 
        <a href="#" className="dropdown-item">Английский</a>
        <a href="#" className="dropdown-item">Живопись для детей</a>
        <a href="#" className="dropdown-item">Живопись для взрослых</a>
      </div>
                  </div>
                  <li><a href="">Контакты</a></li>
                </ul>
            </div>
            <div className="right_content">
              <button class="neon-button">ПОЗВОНИТЬ</button>
              <div className="lang-selector">
      <button
        onClick={() => handleLangChange('RU')}
        className={selectedLang === 'RU' ? 'active' : ''}
      >
        RU
      </button>
      <button
        onClick={() => handleLangChange('UZ')}
        className={selectedLang === 'UZ' ? 'active' : ''}
      >
        UZ
      </button>
              </div>
              <div className="mediaBar">
<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><img src="/image/home/icons/Frame3.png" alt="" /></button>


<div class="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
    <div className="line"></div>
  <div class="offcanvas-header">
   
            <nav>
           <div className="left_logo">
                <a href=""><img src="/image/home/nav/logo.png" alt="logo" /></a>
            </div> 
            <div className="right_content">
              
              <div className="lang-selector">
      <button
        onClick={() => handleLangChange('RU')}
        className={selectedLang === 'RU' ? 'active' : ''}
      >
        RU
      </button>
      <button
        onClick={() => handleLangChange('UZ')}
        className={selectedLang === 'UZ' ? 'active' : ''}
      >
        UZ
      </button>
              </div>
              <div className="mediaBar">
                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"><img src="/image/home/icons/Frame4.png" alt="" /></button>
              </div>
            </div>
        </nav>
  </div>
  <div class="offcanvas-body">
    <div className="center_info">
      <a href=""><img src="/image/home/icons/LeadingIcon.png" alt="" />Главная</a>
      <a href=""><img src="/image/home/icons/EditSquare.png" alt="" />О нас</a>
      <a href=""><img src="/image/home/icons/Chat.png" alt="" />Курсы</a>
      <a href=""><img src="/image/home/icons/3User.png" alt="" />Контакты</a>
    </div>
  </div>
    <div className="line"></div>
  <div class="offcanvas-footer">
      <div className="set_info">
          <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
          <a href=""><i class="fa-brands fa-instagram"></i></a>
          <a href=""><i class="fa-brands fa-twitter"></i></a>
      </div>
  </div>
</div>

              </div>
            </div>
        </nav>
        <div className="line"></div>
    </div>
  )
}

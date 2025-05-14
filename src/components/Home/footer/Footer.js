import React from 'react'

export default function Footer() {
  return (
    <div className='footer_container'>
        <div className="top_content">
            <div className="about_left_part">
            <a href=""><img src="/image/home/footer/logo.png" alt="" /></a>
                <div className="bottomInfoss">
                                <h2>SLOGAN lLorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            <div className="set-info">
                <a href=""><img src="/image/home/icons/telegram.png" alt="" /></a>
                <a href=""><img src="/image/home/icons/youtube.png" alt="" /></a>
                <a href=""><img src="/image/home/icons/instagram.png" alt="" /></a>
            </div>
                </div>
            </div>
            <div className="footer_list">
            <ul>
                <h3>Курсы</h3>
                <li><a href="">Работотехника</a></li>
                <li><a href="">Английский для взрослых</a></li>
                <li><a href="">Английский для детей</a></li>
                <li><a href="">Шахмат</a></li>
                <li><a href="">Живопись</a></li>
            </ul>
            <ul>
                <h3>Контакты</h3>
                <li><a href="">Телеграм</a></li>
                <li><a href="">Инстаграм</a></li>
                <li><a href="">Ютюб</a></li>
            </ul>
            </div>
        </div>
        <div className="footer-copyright">
            <h4>Ideallux.com © 2000-2024, All Rights Reserved</h4>
        </div>
    </div>
  )
}

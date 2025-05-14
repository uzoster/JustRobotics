// Header.js
import React, { useEffect, useRef } from "react";
import AnimatedBackground from "./AnimatedBackground";
import AnimatedMedia from "./AnimatedMedia";


const Header = () => {

    const studentsRef = useRef(null);
  const participantsRef = useRef(null);
  const groupsRef = useRef(null);

  const animateNumber = (element, target, duration) => {
    let start = 0;
    let increment = target / (duration / 10);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      element.textContent = Math.floor(current) + "+";
    }, 10);
  };

  useEffect(() => {
    animateNumber(studentsRef.current, 300, 2000); // 300 ga 2 soniyada
    animateNumber(participantsRef.current, 25, 2000); // 25 ga 2 soniyada
    animateNumber(groupsRef.current, 60, 2000); // 60 ga 2 soniyada
  }, []);

  return (
    <div className="header-wrapper">
      <div className="particles-box">
        <AnimatedBackground />
        <AnimatedMedia/>
            <div className="header-content">
                <div className="left-content">
                    <h1>JustRobotics</h1>
                    <h3>твой проводник в мир технологий и искусства</h3>
                    <p>получите бесплатное первое занятие</p>
                    <a href="">Перейти к курсам</a>
                </div>      
                <div className="right_img">
                    <img src="/image/home/orange_robot.png" alt="robot" />
                </div>
            </div>
      </div>
      <div className="bottom_cards">
        <div className="stats">
      <div className="stat-box">
        <div ref={studentsRef} className="number">
          0+
        </div>
        <p>ДОВОЛЬНЫХ СТУДЕНТОВ</p>
      </div>
      <div className="stat-box">
        <div ref={participantsRef} className="number">
          0+
        </div>
        <p>
          ПРЕПОДАВАТЕЛЕЙ <span className="highlight">golib fayzuyev</span>
        </p>
      </div>
      <div className="stat-box">
        <div ref={groupsRef} className="number">
          0+
        </div>
        <p>ГУРПП</p>
      </div>
           </div>
      </div>
    </div>
  );
};

export default Header;

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import CourseCard from './CourseCard';
import courses from './data/courses.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AnimatedBackground from './Animationback';
import VideoGallery from './VideoGallery';
import AnimationMedia from './AnimationMedia';
// import './Courses.scss';

export default function Content() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // sahifa yuklanganda tekshirish
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '10%',
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerPadding: '5%',
        }
      }
    ]
  };

  return (
    <div className="courses-container">
        <AnimatedBackground/> 
        <AnimationMedia/>
        <div className="button_Center">
            <h2 className="section-title">Авторские курсы от JustRobotics</h2>
            <div className="courses_bottom">
                 {isMobile ? (
                  
                  <Slider {...sliderSettings}>
                    {courses.map((course, index) => (
                      <CourseCard
                        key={index}
                        title={course.title}
                        image={course.image}
                        link={course.link}
                      />
                    ))}
                  </Slider>
                ) : (
                  <div className="course-grid">
                    {courses.map((course, index) => (
                      <CourseCard
                        key={index}
                        title={course.title}
                        image={course.image}
                        link={course.link}
                      />
                    ))}
                  </div>
                )}
            </div>  
            <div className="comment_video">
                <VideoGallery/>
            </div>
        </div>
    </div>
  );
}

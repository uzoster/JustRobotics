import React from 'react';
// import './CourseCard.scss';

const CourseCard = ({ title, image, link }) => {
  return (
    <div className="course-card">
      <img src={require(`../../../../public/image/home/content/${image}`)} alt={title} />
      <h3>{title}</h3>
      <a href={link} className="btn">Подробнее о курсе -&gt;</a>
    </div>
  );
};

export default CourseCard;

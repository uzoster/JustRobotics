import React from 'react';

const CourseCard = ({ title, image, link }) => {
  return (
      <div className="container_card">
          <div className="course-card">
            <img src={`/image/home/content/${image}`} alt={title} />
            <h3>{title}</h3>
            <a href={link} className="btn">Подробнее о курсе </a>
        </div>
      </div>
  );
};

export default CourseCard;
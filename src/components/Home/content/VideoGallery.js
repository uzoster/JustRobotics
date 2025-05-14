import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import VideoCard from './VideoCard';
// import '../styles/VideoGallery.scss';

const VideoGallery = () => {
  const [activeVideoId, setActiveVideoId] = useState(null);

  const videos = [
    { id: 1, src: '/video/video1.mp4' },
    { id: 2, src: '/video/video1.mp4' },
    { id: 3, src: '/video/video1.mp4' },
    { id: 4, src: '/video/video1.mp4' },
    { id: 5, src: '/video/video1.mp4' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const handleVideoPlay = (videoId) => {
    setActiveVideoId(videoId);
  };

  return (
    <div className="video-gallery" role="region" aria-label="Video Galereya">
      <h2>отзывы</h2>
      <div className="video-container">
        <Slider {...settings} aria-label="Video slayder">
          {videos.map(video => (
            <div key={video.id}>
              <VideoCard
                video={video}
                onVideoPlay={handleVideoPlay}
                activeVideoId={activeVideoId}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default VideoGallery;
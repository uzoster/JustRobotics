import React, { useRef, useEffect } from 'react';

const VideoCard = ({ video, onVideoPlay, activeVideoId }) => {
  const isPlaying = activeVideoId === video.id;
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Video play failed:', error);
      });
    } else if (!isPlaying && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const handlePlayPause = () => {
    onVideoPlay(isPlaying ? null : video.id);
  };

  return (
    <div className={`video-card ${isPlaying ? 'active' : ''}`}>
      <video ref={videoRef}>
        <source src={video.src} type="video/mp4" />
        <source src={video.src.replace('.mp4', '.webm')} type="video/webm" />
        
      </video>
      <button
        onClick={handlePlayPause}
        className="play-pause-btn"
        aria-label={isPlaying ? "Videoni to‘xtatish" : "Videoni o‘ynatish"}
      >
        {isPlaying ? "⏸" : "▶"}
      </button>
    </div>
  );
};

export default VideoCard;
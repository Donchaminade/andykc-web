import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const VideoPlayer = ({ src, title }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    togglePlay();
  };

  return (
    <div
      className="relative w-full aspect-video rounded-lg overflow-hidden shadow-2xl border-2 border-primary/50 cursor-pointer"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <style>
        {`
          @keyframes pulse-glow {
            0%, 100% {
              transform: scale(1);
              box-shadow: 0 0 20px 5px hsla(var(--primary), 0.5);
            }
            50% {
              transform: scale(1.1);
              box-shadow: 0 0 35px 15px hsla(var(--primary), 0.8);
            }
          }

          .play-button {
            animation: pulse-glow 2.5s infinite ease-in-out;
            transition: opacity 0.3s ease;
          }
        `}
      </style>
      
      <video
        ref={videoRef}
        src={src}
        title={title}
        className="w-full h-full object-cover"
        onClick={handleVideoClick}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        Your browser does not support the video tag.
      </video>

      {(!isPlaying || isHovering) && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/40 transition-all duration-300"
          onClick={togglePlay}
        >
          <button className="play-button bg-primary/80 text-primary-foreground rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center backdrop-blur-sm">
            {isPlaying ? <Pause size={48} /> : <Play size={48} className="ml-1" />}
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;

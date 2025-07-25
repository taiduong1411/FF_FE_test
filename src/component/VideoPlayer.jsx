import React, { useRef, useEffect, useState } from "react";

const VideoPlayer = ({
  src,
  className = "",
  fallbackImage = "/SOURCE/source_main/main.png",
  autoPlay = true,
  loop = true,
  muted = true,
  playsInline = true,
  preload = "auto",
}) => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current && autoPlay) {
          await videoRef.current.play();
        }
      } catch (error) {
        console.log("Video autoplay failed:", error);
        setVideoError(true);
      }
    };

    playVideo();
  }, [autoPlay]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    setVideoError(false);
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoaded(false);
  };

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        preload={preload}
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
        className="w-full h-full object-cover">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Fallback content if video fails or not loaded */}
      {(!videoLoaded || videoError) && (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 via-cyan-200 to-blue-200 flex items-center justify-center">
          <div className="text-center">
            <img
              src={fallbackImage}
              alt="FF Premium"
              className="w-32 h-32 object-contain opacity-50"
            />
            <p className="text-slate-600 mt-4">FF Premium</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;

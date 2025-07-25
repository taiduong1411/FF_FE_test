import React, { useRef, useEffect, useState } from "react";

const SimpleVideo = ({ src, className = "" }) => {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobileDevice =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
        userAgent
      );
    const isSafariBrowser = /^((?!chrome|android).)*safari/i.test(userAgent);

    setIsMobile(isMobileDevice);
    setIsSafari(isSafariBrowser);
    if (isMobileDevice) {
      setShowPlayButton(true);
    }
  }, []);

  useEffect(() => {
    const tryPlay = () => {
      if (videoRef.current && videoRef.current.readyState >= 3) {
        videoRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setShowPlayButton(false);
          })
          .catch((err) => {
            console.log("Autoplay failed:", err);
            setShowPlayButton(true);
          });
      } else {
        setTimeout(tryPlay, 200);
      }
    };

    tryPlay();
  }, []);

  const handlePlay = async () => {
    try {
      if (videoRef.current) {
        await videoRef.current.play();
        setIsPlaying(true);
        setShowPlayButton(false);
      }
    } catch (error) {
      console.log("Play failed:", error);
    }
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    setShowPlayButton(false);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        src={src}
        autoPlay={true} // Always try autoplay
        loop
        muted
        playsInline
        preload="auto"
        onPlay={handleVideoPlay}
        onPause={handleVideoPause}
        className="w-full h-full object-cover"
      />

      {/* Play button overlay - show if not playing */}
      {showPlayButton && !isPlaying && (
        <div
          className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer"
          onClick={handlePlay}>
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-sm">Nhấn để phát</p>
            {isSafari && (
              <p className="text-xs opacity-80 mt-1">
                Safari yêu cầu tương tác
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleVideo;

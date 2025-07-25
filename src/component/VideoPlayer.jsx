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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [debugInfo, setDebugInfo] = useState("");

  useEffect(() => {
    // Detect mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent.toLowerCase()
        );
      setIsMobile(isMobileDevice);
      setDebugInfo(`Device: ${isMobileDevice ? "Mobile" : "Desktop"}`);
    };

    checkMobile();
  }, []);

  useEffect(() => {
    const playVideo = async () => {
      try {
        if (videoRef.current && autoPlay) {
          setDebugInfo((prev) => prev + " | Attempting autoplay...");

          // On mobile, we need to handle autoplay differently
          if (isMobile) {
            // Try to play with user interaction simulation
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
              await playPromise;
              setIsPlaying(true);
              setDebugInfo((prev) => prev + " | Mobile autoplay success");
            }
          } else {
            // Desktop autoplay
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
              await playPromise;
              setIsPlaying(true);
              setDebugInfo((prev) => prev + " | Desktop autoplay success");
            }
          }
        }
      } catch (error) {
        console.log("Video autoplay failed:", error);
        setDebugInfo((prev) => prev + ` | Autoplay failed: ${error.message}`);
        // On mobile, this is expected - we'll show fallback
        if (isMobile) {
          setVideoError(true);
        }
      }
    };

    // Delay for mobile to ensure proper loading
    const delay = isMobile ? 1000 : 100;
    const timer = setTimeout(playVideo, delay);
    return () => clearTimeout(timer);
  }, [autoPlay, isMobile]);

  // Handle user interaction for mobile
  const handleUserInteraction = async () => {
    if (isMobile && videoRef.current && !isPlaying) {
      try {
        setDebugInfo((prev) => prev + " | User interaction detected");
        await videoRef.current.play();
        setIsPlaying(true);
        setVideoError(false);
        setDebugInfo((prev) => prev + " | User play success");
      } catch (error) {
        console.log("Failed to play video on user interaction:", error);
        setDebugInfo((prev) => prev + ` | User play failed: ${error.message}`);
      }
    }
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    setVideoError(false);
    setDebugInfo((prev) => prev + " | Video loaded");
  };

  const handleVideoError = (e) => {
    console.log("Video failed to load:", src, e);
    setVideoError(true);
    setVideoLoaded(false);
    setDebugInfo(
      (prev) =>
        prev + ` | Video error: ${e.target.error?.message || "Unknown error"}`
    );
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
    setDebugInfo((prev) => prev + " | Video playing");
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
    setDebugInfo((prev) => prev + " | Video paused");
  };

  return (
    <div className={`relative ${className}`}>
      <video
        ref={videoRef}
        autoPlay={autoPlay && !isMobile} // Disable autoplay on mobile
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        preload={preload}
        onLoadedData={handleVideoLoad}
        onError={handleVideoError}
        onPlay={handleVideoPlay}
        onPause={handleVideoPause}
        className="w-full h-full object-cover">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Debug info - remove in production */}
      {process.env.NODE_ENV === "development" && (
        <div className="absolute top-2 left-2 bg-black/80 text-white text-xs p-2 rounded z-50 max-w-xs">
          {debugInfo}
        </div>
      )}

      {/* Mobile autoplay prompt */}
      {isMobile && !isPlaying && !videoError && videoLoaded && (
        <div
          className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer"
          onClick={handleUserInteraction}>
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
            <p className="text-sm">Nhấn để phát video</p>
            <p className="text-xs opacity-80 mt-1">FF Premium Experience</p>
          </div>
        </div>
      )}

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
            {videoError && (
              <p className="text-xs text-slate-500 mt-2">
                {isMobile
                  ? "Video không tự động phát trên mobile"
                  : "Video không thể tải"}
              </p>
            )}
            {!videoLoaded && (
              <p className="text-xs text-slate-500 mt-2">Đang tải video...</p>
            )}
          </div>
        </div>
      )}

      {/* Loading indicator */}
      {!videoLoaded && !videoError && (
        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#1B4F27] mx-auto"></div>
            <p className="text-slate-600 mt-2 text-sm">Đang tải video...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;

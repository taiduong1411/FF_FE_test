import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

const MobileVideoHandler = ({
  src,
  className = "",
  fallbackImage = "/SOURCE/source_main/main.png",
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent.toLowerCase()
        );
      setIsMobile(isMobileDevice);

      if (isMobileDevice) {
        setShowPlayButton(true);
      }
    };

    checkMobile();
  }, []);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handlePlayClick = () => {
    setShowPlayButton(false);
  };

  if (!isMobile) {
    return (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onLoadedData={handleVideoLoad}
        className={`w-full h-full object-cover ${className}`}
      />
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Video element for mobile */}
      <video
        src={src}
        loop
        muted
        playsInline
        preload="metadata"
        onLoadedData={handleVideoLoad}
        className="w-full h-full object-cover"
      />

      {/* Mobile play overlay */}
      {showPlayButton && videoLoaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center"
          onClick={handlePlayClick}>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            className="text-center text-white cursor-pointer">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <Play size={32} className="ml-1" />
            </div>
            <p className="text-sm font-medium">Nhấn để phát video</p>
            <p className="text-xs opacity-80 mt-1">FF Premium Experience</p>
          </motion.div>
        </motion.div>
      )}

      {/* Fallback if video doesn't load */}
      {!videoLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 via-cyan-200 to-blue-200 flex items-center justify-center">
          <div className="text-center">
            <img
              src={fallbackImage}
              alt="FF Premium"
              className="w-24 h-24 object-contain opacity-50"
            />
            <p className="text-slate-600 mt-2 text-sm">FF Premium</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileVideoHandler;

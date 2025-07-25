import React from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const VideoFallback = ({ className = "" }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(true);

  return (
    <div
      className={`relative ${className} bg-gradient-to-br from-emerald-100 via-cyan-100 to-blue-100`}>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8">
            <img
              src="/SOURCE/source_main/main.png"
              alt="FF Premium"
              className="w-32 h-32 object-contain mx-auto"
            />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl font-bold text-slate-800 mb-4">
            FF Premium
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-slate-600 mb-8 max-w-md mx-auto">
            Khám phá hương vị tự nhiên tuyệt hảo với những sản phẩm chất lượng
            cao
          </motion.p>

          {/* Controls */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center space-x-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-12 h-12 bg-[#1B4F27] rounded-full flex items-center justify-center text-white hover:bg-[#153d1f] transition-colors duration-300">
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-300 transition-colors duration-300">
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="mt-6 w-64 h-1 bg-slate-200 rounded-full mx-auto overflow-hidden">
            <motion.div
              className="h-full bg-[#1B4F27] rounded-full"
              animate={{ x: isPlaying ? "100%" : "0%" }}
              transition={{
                duration: 10,
                repeat: isPlaying ? Infinity : 0,
                ease: "linear",
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VideoFallback;

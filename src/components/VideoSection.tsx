"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

interface VideoSectionProps {
  title?: string;
  description?: string;
  videoSrc: string;
  posterImage?: string;
  autoplay?: boolean;
  showControls?: boolean;
  className?: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  title = "Discover TrueLens Experience",
  description = "Watch how our premium contact lenses transform vision and lives around the world.",
  videoSrc,
  posterImage,
  autoplay = false,
  showControls = true,
  className = ""
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        videoRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
      setIsFullscreen(!isFullscreen);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1] // cubic-bezier for easeInOut
      }
    }
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut", // use a valid string for ease
        delay: 0.2
      }
    }
  };

  return (
    <section 
      ref={ref}
      className={`py-24 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-6"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
          >
            {title}
          </motion.h2>
        
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative flex justify-center  group"
        >
          {/* Video Container */}
          <div className="relative max-w-[64vw] overflow-hidden rounded-2xl shadow-2xl bg-black">
            <video
              ref={videoRef}
              className="object-contain max-h-[80vh] max-w-[80vw] mx-auto block"
              autoPlay={autoplay}
              muted={isMuted}
              loop
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Overlay & Controls */}
            {showControls && (
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {/* Play/Pause Button */}
                <motion.button
                  onClick={togglePlay}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 hover:bg-white/30 transition-all duration-300 mr-4"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-white" />
                  ) : (
                    <Play className="w-8 h-8 text-white ml-1" />
                  )}
                </motion.button>

                {/* Mute/Unmute Button */}
                <motion.button
                  onClick={toggleMute}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 hover:bg-white/30 transition-all duration-300 mr-4"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isMuted ? (
                    <VolumeX className="w-6 h-6 text-white" />
                  ) : (
                    <Volume2 className="w-6 h-6 text-white" />
                  )}
                </motion.button>

                {/* Fullscreen Button */}
                <motion.button
                  onClick={toggleFullscreen}
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-3 hover:bg-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Maximize className="w-6 h-6 text-white" />
                </motion.button>
              </div>
            )}

            {/* Gradient Overlays for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Decorative Elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-xl -z-10 opacity-50" />
        </motion.div>

        {/* Call-to-action below video */}
        <motion.div
          className="text-center mt-12"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6, delay: 0.4, ease: "easeOut" }
            }
          }}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.a
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#products"
          >
            Explore Our Products
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;

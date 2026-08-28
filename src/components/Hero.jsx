import { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowUpRight, Play, Pause } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import heroVideo from '../assets/hero video/Developer_introduces_self_and_sk…_202606051918.mp4';

const Hero = ({ videoRef: externalVideoRef }) => {
  const internalVideoRef = useRef(null);
  const videoRef = externalVideoRef || internalVideoRef;
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });

    // Unmute audio on any ambient click, touch, or keydown
    const handleAmbientUserInteraction = () => {
      const video = videoRef.current;
      if (video) {
        video.muted = false;
        video.volume = 1.0;
      }
    };

    const events = ['click', 'touchstart', 'keydown'];
    events.forEach(evt => window.addEventListener(evt, handleAmbientUserInteraction));

    return () => {
      events.forEach(evt => window.removeEventListener(evt, handleAmbientUserInteraction));
    };
  }, [videoRef]);

  const toggleVideo = (e) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (!video.paused && !video.ended) {
      video.pause();
    } else {
      if (video.ended) {
        video.currentTime = 0;
      }
      video.muted = false;
      video.volume = 1.0;
      video.play().catch((err) => {
        console.log("Play button error:", err);
      });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black font-sans">
      {/* Clear Background Video */}
      <video
        ref={videoRef}
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-90 transition-opacity duration-500"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Light Text Protection Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 z-10 pointer-events-none"></div>

      {/* Content Container */}
      <div className="relative z-20 px-4 sm:px-6 md:px-12 pb-8 sm:pb-12 pt-20 sm:pt-24 md:pb-[5%] max-w-7xl mx-auto h-full flex flex-col justify-between text-left w-full">
        
        {/* Top Bar / Quick Status */}
        <div className="flex justify-between items-center gap-2" data-aos="fade-down">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-semibold text-white shadow-lg max-w-full truncate">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0"></span>
            <span className="truncate">Available for Java & MERN Full Stack Roles</span>
          </div>

          {/* Social Icons Desktop / Tablet */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://github.com/Thirumalai23013035"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-white/20 text-white backdrop-blur-md transition-colors border border-white/10"
              title="GitHub"
            >
              <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href="https://linkedin.com/in/thirumalai-v7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-white/20 text-white backdrop-blur-md transition-colors border border-white/10"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href="https://leetcode.com/u/thiru_07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 rounded-full bg-black/40 hover:bg-white/20 text-white backdrop-blur-md transition-colors border border-white/10"
              title="LeetCode"
            >
              <LeetCodeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Hero Main Banner */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 w-full">
          
          {/* Left Side: Text and Buttons */}
          <div className="flex flex-col items-start text-left max-w-3xl w-full">
            
            {/* Target Role Tag */}
            <div data-aos="fade-up" className="text-red-400 text-[11px] sm:text-xs md:text-sm font-extrabold uppercase tracking-widest mb-1.5 sm:mb-2 drop-shadow-md">
              Full Stack Developer (Java | MERN)
            </div>

            {/* Main Heading */}
            <h1 
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-3 sm:mb-4 drop-shadow-lg"
            >
              Hi, I’m <span className="inline-block whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-[#ff2a2a]">THIRUMALAI V</span>
            </h1>

            {/* Subheading */}
            <p 
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-gray-200 text-xs sm:text-sm md:text-base lg:text-lg font-medium mb-5 sm:mb-8 max-w-xl leading-relaxed drop-shadow-md bg-black/20 p-2 sm:p-2.5 rounded-lg backdrop-blur-xs border border-white/5"
            >
              Building enterprise-grade Java Spring Boot microservices, high-performance MERN stack platforms, and AI-powered verification systems.
            </p>

            {/* Buttons & Badges */}
            <div 
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-wrap items-center gap-2 sm:gap-3 w-full"
            >
              {/* View Work Button */}
              <a 
                href="#projects" 
                className="px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm rounded-full bg-[#ff2a2a] text-white font-bold hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-[0_0_25px_rgba(255,42,42,0.5)] flex items-center gap-1.5 sm:gap-2"
              >
                View My Work
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              
              {/* Contact Button */}
              <a 
                href="#contact" 
                className="px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm rounded-full bg-black/40 border border-white/30 text-white font-semibold hover:bg-black/70 transition-all duration-300 backdrop-blur-md"
              >
                Contact Me
              </a>

              {/* LeetCode Badge */}
              <a
                href="https://leetcode.com/u/thiru_07"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 sm:px-4 py-2.5 sm:py-3 text-[11px] sm:text-xs rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold hover:bg-amber-500/30 transition-all backdrop-blur-md"
              >
                ⚡ 433+ Solved
              </a>
            </div>
          </div>

          {/* Right Side: Play Video Controls */}
          <div 
            data-aos="zoom-in"
            data-aos-delay="400"
            className="flex flex-row md:flex-col items-center gap-3 sm:gap-4 shrink-0 self-end md:self-auto"
          >
            {/* Play/Pause Button */}
            <div 
              className="flex flex-row md:flex-col items-center gap-2 cursor-pointer group"
              onClick={toggleVideo}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border border-white/40 bg-black/50 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.7)]">
                {!isPlaying ? (
                  <Play className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white ml-0.5 sm:ml-1 fill-white" />
                ) : (
                  <Pause className="w-5 h-5 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white fill-white" />
                )}
              </div>
              <span className="text-white text-[9px] sm:text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity drop-shadow whitespace-nowrap">
                {!isPlaying ? "Play Intro Video" : "Pause Video"}
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
export default Hero;







import { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowUpRight, Play, Pause } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import heroVideo from '../assets/hero video/Developer_introduces_self_and_sk…_202606051918.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black font-sans">
      {/* Background Video */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40"
      >

        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 px-6 pb-12 pt-28 md:pb-[6%] md:px-12 max-w-7xl mx-auto h-full flex flex-col justify-between text-left w-full">
        
        {/* Top Spacer / Quick Location & Availability */}
        <div className="flex justify-between items-center" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Available for Java & MERN Full Stack Roles
          </div>

          {/* Social Icons Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://github.com/Thirumalai23013035"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/thirumalai-v7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://leetcode.com/u/thiru_07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
              title="LeetCode"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom Hero Main Banner */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 w-full">
          
          {/* Left Side: Text and Buttons */}
          <div className="flex flex-col items-start text-left max-w-3xl w-full">
            
            {/* Target Role Tag */}
            <div data-aos="fade-up" className="text-red-500 text-xs md:text-sm font-extrabold uppercase tracking-widest mb-2">
              Full Stack Developer (Java | MERN)
            </div>

            {/* Main Heading */}
            <h1 
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-4"
            >
              Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-[#ff2a2a]">THIRUMALAI V</span>
            </h1>

            {/* Subheading */}
            <p 
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-gray-300 text-sm md:text-base lg:text-lg font-medium mb-8 max-w-xl leading-relaxed"
            >
              Building enterprise-grade Java Spring Boot microservices, high-performance MERN stack platforms, and AI-powered verification systems.
            </p>

            {/* Buttons & Socials */}
            <div 
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-wrap items-center gap-3 w-full"
            >
              {/* View Work Button */}
              <a 
                href="#projects" 
                className="px-6 py-3 text-xs md:text-sm rounded-full bg-[#ff2a2a] text-white font-bold hover:bg-red-600 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,42,42,0.4)] flex items-center gap-2"
              >
                View My Work
                <ArrowUpRight className="w-4 h-4" />
              </a>
              
              {/* Contact Button */}
              <a 
                href="#contact" 
                className="px-6 py-3 text-xs md:text-sm rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-md"
              >
                Contact Me
              </a>

              {/* LeetCode Badge */}
              <a
                href="https://leetcode.com/u/thiru_07"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-xs rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold hover:bg-amber-500/20 transition-all"
              >
                ⚡ 433+ DSA Problems Solved
              </a>
            </div>
          </div>

          {/* Right Side: Play Video Reel Control */}
          <div 
            data-aos="zoom-in"
            data-aos-delay="400"
            className="flex flex-row md:flex-col items-center gap-3 cursor-pointer group shrink-0"
            onClick={toggleVideo}
          >
            <div className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/40 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.6)]">
              {!isPlaying ? (
                <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1 fill-white" />
              ) : (
                <Pause className="w-6 h-6 md:w-8 md:h-8 text-white fill-white" />
              )}
            </div>
            <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
              {!isPlaying ? "Play Intro Video" : "Pause Video"}
            </span>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;


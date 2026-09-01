import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

const Footer = () => {
  return (
    <footer className="bg-[#080808] text-[#d4d4d4] py-12 sm:py-16 px-4 sm:px-6 md:px-12 w-full font-sans text-xs tracking-wider flex flex-col justify-between min-h-[40vh] sm:min-h-[45vh] border-t border-white/10">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full font-medium max-w-7xl mx-auto">
        <div className="flex flex-col gap-1.5">
          <p className="text-white font-bold text-sm">THIRUMALAI V</p>
          <p className="text-gray-400">Full Stack Developer (Java | MERN)</p>
          <p className="text-gray-500 text-[11px]">Chennai, Tamil Nadu, India</p>
        </div>
        
        <div className="flex flex-col gap-1.5 md:items-center">
          <p className="text-gray-400">Target Role: Java & MERN Full Stack</p>
          <a href="#projects" className="text-[#ff2a2a] hover:underline font-bold mt-1">Explore Featured Projects →</a>
        </div>
        
        <div className="flex flex-col gap-2 sm:col-span-2 md:col-span-1 md:items-end">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Thirumalai23013035"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/thirumalai-v7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://leetcode.com/u/thiru_07"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-colors"
              title="LeetCode"
            >
              <LeetCodeIcon className="w-4 h-4" />
            </a>
          </div>

          <p className="text-gray-500 text-[11px] mt-1">{new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </div>

      {/* Middle Banner Text */}
      <div className="w-full flex justify-center items-center py-10 sm:py-16 overflow-hidden">
        <h2 className="text-[16vw] md:text-[14vw] leading-none font-black tracking-tighter uppercase select-none text-white/5 w-full text-center">
          THIRUMALAI
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 w-full items-center md:items-end font-medium max-w-7xl mx-auto border-t border-white/5 pt-6 sm:pt-8">
        <div className="flex flex-col gap-2">
          <p className="text-gray-400 text-[11px] flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-[#ff2a2a] fill-[#ff2a2a]" /> React, Tailwind CSS & Framer Motion
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:thirumalaiofficial007@gmail.com" className="text-white hover:text-[#ff2a2a] transition-colors font-bold lowercase flex items-center gap-1.5 truncate">
            <Mail className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">thirumalaiofficial07@gmail.com</span>
          </a>
        </div>
        
        <div className="flex flex-col gap-1 sm:col-span-2 md:col-span-1 md:items-end">
          <a href="#home" className="text-gray-400 hover:text-white transition-colors text-xs font-semibold">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


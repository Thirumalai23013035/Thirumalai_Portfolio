import stackImage from '../assets/about/image.png';
import reactImage from '../assets/about/react.png';
import nodeImage from '../assets/about/node.png';
import mongoImage from '../assets/about/mongodb.png';


const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 sm:pt-24 pb-28 sm:pb-36 px-4 sm:px-6 md:px-12 w-full relative overflow-hidden font-sans text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-12 lg:gap-16 items-center md:items-start">
        
        {/* Left Side: ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-6 sm:mt-8 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-2.5 sm:w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-5 sm:w-6 h-10 sm:h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[250px] sm:max-w-[280px] rounded-2xl p-3.5 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative z-20 transform -rotate-2 hover:rotate-0 transition-transform duration-500 border border-white/20">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-14 sm:w-16 h-5 sm:h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-7 sm:w-8 h-1.5 sm:h-2 bg-black/50 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-white/10 mb-3 sm:mb-4">
                <img 
                  src={stackImage} 
                  alt="Thirumalai V Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Card Footer Badge Details */}
              <div className="text-center bg-black/40 p-2 sm:p-2.5 rounded-xl border border-white/10">
                <p className="text-[11px] sm:text-xs font-black text-white uppercase tracking-widest">THIRUMALAI V</p>
                <p className="text-[9px] sm:text-[10px] text-red-400 font-bold uppercase tracking-wider">Java & MERN Developer</p>
                <p className="text-[8px] sm:text-[9px] text-gray-400 font-medium truncate">Saveetha Engineering College</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white relative z-20 w-full">
          
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-black/20 text-[11px] sm:text-xs font-extrabold uppercase tracking-wider mb-3 sm:mb-4 text-white">
            <span>📍</span> Chennai, Tamil Nadu, India
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-4 sm:mb-6 tracking-tight">
            Hello, World!
          </h2>

          <p className="text-sm sm:text-base md:text-lg font-semibold mb-4 sm:mb-6 leading-relaxed text-white drop-shadow-sm">
            I'm <span className="text-black bg-white px-2 py-0.5 rounded font-black tracking-wide">THIRUMALAI V</span>, a dedicated Full Stack Developer specializing in both <span className="underline decoration-black decoration-2">Java Full Stack</span> (Spring Boot, Security, REST APIs) and <span className="underline decoration-black decoration-2">MERN Stack</span> (MongoDB, Express, React, Node.js).
          </p>

          <p className="text-xs sm:text-sm md:text-base font-medium mb-6 sm:mb-8 leading-relaxed text-red-100">
            Currently pursuing B.E. in Computer Science and Engineering at <strong className="text-white">Saveetha Engineering College</strong> (CGPA 8.5/10). I build secure backend architectures, responsive user interfaces, and AI-driven document verification systems.
          </p>

          {/* Key Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 text-center">
              <span className="block text-xl sm:text-2xl md:text-3xl font-black text-white">8.5 / 10</span>
              <span className="text-[10px] sm:text-[11px] font-bold text-red-200 uppercase tracking-wider">CGPA (B.E. CSE)</span>
            </div>
            <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 text-center">
              <span className="block text-xl sm:text-2xl md:text-3xl font-black text-white">433+</span>
              <span className="text-[10px] sm:text-[11px] font-bold text-red-200 uppercase tracking-wider">LeetCode Solved</span>
            </div>
            <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-xl p-3 sm:p-4 text-center col-span-2 sm:col-span-1">
              <span className="block text-xl sm:text-2xl md:text-3xl font-black text-white">94%</span>
              <span className="text-[10px] sm:text-[11px] font-bold text-red-200 uppercase tracking-wider">AI Model Accuracy</span>
            </div>
          </div>

          {/* Horizontal Skills Row */}
          <div>
            <p className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-black/80 mb-3">Core Technology Stack</p>
            <div className="flex items-center gap-4 sm:gap-6">
              <img 
                data-aos="zoom-in" data-aos-delay="300"
                src={reactImage} 
                alt="React" 
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl" 
              />
              <img 
                data-aos="zoom-in" data-aos-delay="450"
                src={nodeImage} 
                alt="Node.js" 
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl" 
              />
              <img 
                data-aos="zoom-in" data-aos-delay="600"
                src={mongoImage} 
                alt="MongoDB" 
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl" 
              />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#0d0d0d]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default About;


import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ isActive = true, onStart }) => {
  const handleClick = (e) => {
    if (e) e.stopPropagation();
    if (onStart) {
      onStart();
    }
  };

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex flex-col items-center justify-center cursor-pointer select-none"
          onClick={handleClick}
        >
          {/* Logo Container */}
          <motion.div 
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter"
          >
            {/* Background text */}
            <div className="text-red-900/30 uppercase">
              Thirumalai<span className="text-red-900/30">.</span>
            </div>

            {/* Foreground text */}
            <motion.div 
              className="absolute top-0 left-0 text-white overflow-hidden whitespace-nowrap uppercase"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.2, ease: "easeInOut", delay: 0.1 }}
            >
              Thirumalai<span className="text-black">.</span>
            </motion.div>
          </motion.div>

          {/* Interactive Start Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 flex flex-col items-center gap-3"
          >
            <button
              onClick={handleClick}
              className="px-8 py-3.5 rounded-full bg-white text-black font-black text-xs md:text-sm tracking-widest uppercase hover:bg-black hover:text-white border-2 border-white transition-all shadow-[0_0_35px_rgba(255,255,255,0.6)] flex items-center gap-3 transform hover:scale-105 active:scale-95"
            >
              <span>ENTER PORTFOLIO</span>
              <span className="text-lg animate-pulse">🔊</span>
            </button>
            <span className="text-white/90 text-xs font-semibold tracking-wider">
              Click anywhere to start video with sound
            </span>
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;






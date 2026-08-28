import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

const Contact = () => {
  const ref = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    permission: false
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', message: '', permission: false });
    }, 4000);
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 border-t border-gray-900 font-sans">
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12 opacity-10"
      >
        <h1 
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form & Info Container */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div 
          data-aos="fade-up"
          className="bg-[#ff2a2a] w-full md:w-[90%] lg:w-[82%] p-8 md:p-16 text-white flex flex-col justify-between"
        >
          {/* Header & Direct Contact Info Cards */}
          <div className="mb-12">
            <div className="text-xs font-bold tracking-[0.2em] mb-4 uppercase opacity-90">
              Get In Touch
            </div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 text-black tracking-tight">
              Let's Build Something Amazing Together.
            </h2>

            {/* Direct Contact Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <a 
                href="mailto:thirumalaiofficial007@gmail.com"
                className="bg-black/30 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-3 hover:bg-black/50 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-white/10 text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-[10px] text-red-200 font-bold uppercase tracking-wider">Email</span>
                  <span className="text-xs font-bold text-white truncate block">thirumalaiofficial007@gmail.com</span>
                </div>
              </a>

              <a 
                href="tel:+917339413624"
                className="bg-black/30 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-3 hover:bg-black/50 transition-colors"
              >
                <div className="p-2.5 rounded-xl bg-white/10 text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-red-200 font-bold uppercase tracking-wider">Phone</span>
                  <span className="text-xs font-bold text-white block">+91 7339413624</span>
                </div>
              </a>

              <div className="bg-black/30 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/10 text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-red-200 font-bold uppercase tracking-wider">Location</span>
                  <span className="text-xs font-bold text-white block">Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {submitted ? (
            <div className="bg-black/40 border border-white/30 rounded-2xl p-8 text-center my-8">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-black text-white mb-2">Message Sent Successfully!</h3>
              <p className="text-sm font-medium text-red-100">
                Thank you for reaching out, Thirumalai will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-12 w-full">
              <div className="flex flex-col md:flex-row gap-8 md:gap-16 w-full">
                {/* Left Column */}
                <div className="flex-1 flex flex-col gap-8">
                  <div className="relative">
                    <input 
                      type="text" 
                      id="firstName" 
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="First Name" 
                      className="w-full bg-transparent border-b border-white/50 pb-3 text-base md:text-lg focus:outline-none focus:border-black transition-colors placeholder-white/80 font-semibold rounded-none"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="lastName" 
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Last Name" 
                      className="w-full bg-transparent border-b border-white/50 pb-3 text-base md:text-lg focus:outline-none focus:border-black transition-colors placeholder-white/80 font-semibold rounded-none"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email Address" 
                      className="w-full bg-transparent border-b border-white/50 pb-3 text-base md:text-lg focus:outline-none focus:border-black transition-colors placeholder-white/80 font-semibold rounded-none"
                    />
                  </div>
                </div>

                {/* Right Column */}
                <div className="flex-1 flex flex-col">
                  <div className="relative h-full flex flex-col">
                    <textarea 
                      id="message" 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Your project inquiry or message..." 
                      className="w-full h-full min-h-[140px] bg-transparent border-b border-white/50 pb-3 text-base md:text-lg focus:outline-none focus:border-black transition-colors placeholder-white/80 font-semibold resize-none rounded-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between mt-4">
                
                {/* Social Profiles */}
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/Thirumalai23013035"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-black/30 border border-white/20 hover:bg-black text-white transition-all flex items-center gap-2 text-xs font-bold"
                  >
                    <GithubIcon className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/thirumalai-v7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-black/30 border border-white/20 hover:bg-black text-white transition-all flex items-center gap-2 text-xs font-bold"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    LinkedIn
                  </a>
                  <a
                    href="https://leetcode.com/u/thiru_07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-black/30 border border-white/20 hover:bg-black text-white transition-all flex items-center gap-2 text-xs font-bold"
                  >
                    <LeetCodeIcon className="w-4 h-4" />
                    LeetCode
                  </a>
                </div>


                <button 
                  type="submit" 
                  className="px-8 py-3.5 rounded-full bg-black text-white font-extrabold flex items-center justify-center gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group shadow-lg text-sm"
                >
                  Send Message
                  <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};

export default Contact;


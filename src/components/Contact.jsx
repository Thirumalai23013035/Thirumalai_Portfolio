import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

const Contact = () => {
  const ref = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/thirumalaiofficial07@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          message: formData.message,
          _subject: `⚡ Portfolio Inquiry from ${formData.firstName} ${formData.lastName}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();
      if (response.ok || data.success === 'true' || data.success === true) {
        setSubmitted(true);
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
      } else {
        // Fallback directly to mailto
        window.location.href = `mailto:thirumalaiofficial07@gmail.com?subject=${encodeURIComponent(`Portfolio Message from ${formData.firstName}`)}&body=${encodeURIComponent(`${formData.message}\n\nSender: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}`)}`;
        setSubmitted(true);
      }
    } catch (err) {
      // Network or CORS fallback
      window.location.href = `mailto:thirumalaiofficial07@gmail.com?subject=${encodeURIComponent(`Portfolio Message from ${formData.firstName}`)}&body=${encodeURIComponent(`${formData.message}\n\nSender: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}`)}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-20 sm:pt-28 pb-0 border-t border-gray-900 font-sans">
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
          className="bg-[#ff2a2a] w-full md:w-[92%] lg:w-[84%] p-5 sm:p-8 md:p-14 text-white flex flex-col justify-between"
        >
          {/* Header & Direct Contact Info Cards */}
          <div className="mb-8 sm:mb-12">
            <div className="text-[11px] sm:text-xs font-bold tracking-[0.2em] mb-3 sm:mb-4 uppercase opacity-90">
              Get In Touch
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 text-black tracking-tight leading-tight">
              Let's Build Something Amazing Together.
            </h2>

            {/* Direct Contact Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <a 
                href="mailto:thirumalaiofficial07@gmail.com"
                className="bg-black/30 backdrop-blur-md border border-white/20 p-3.5 sm:p-4 rounded-2xl flex items-center gap-3 hover:bg-black/50 transition-colors"
              >
                <div className="p-2 sm:p-2.5 rounded-xl bg-white/10 text-white shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-[9px] sm:text-[10px] text-red-200 font-bold uppercase tracking-wider">Email</span>
                  <span className="text-[11px] sm:text-xs font-bold text-white truncate block">thirumalaiofficial07@gmail.com</span>
                </div>
              </a>

              <a 
                href="tel:+91 phone"
                className="bg-black/30 backdrop-blur-md border border-white/20 p-3.5 sm:p-4 rounded-2xl flex items-center gap-3 hover:bg-black/50 transition-colors"
              >
                <div className="p-2 sm:p-2.5 rounded-xl bg-white/10 text-white shrink-0">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="block text-[9px] sm:text-[10px] text-red-200 font-bold uppercase tracking-wider">Phone</span>
                  <span className="text-[11px] sm:text-xs font-bold text-white block">+91 will update</span>
                </div>
              </a>

              <div className="bg-black/30 backdrop-blur-md border border-white/20 p-3.5 sm:p-4 rounded-2xl flex items-center gap-3">
                <div className="p-2 sm:p-2.5 rounded-xl bg-white/10 text-white shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <span className="block text-[9px] sm:text-[10px] text-red-200 font-bold uppercase tracking-wider">Location</span>
                  <span className="text-[11px] sm:text-xs font-bold text-white block">Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {submitted ? (
            <div className="bg-black/40 border border-white/30 rounded-2xl p-6 sm:p-8 text-center my-6 sm:my-8">
              <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-400 mx-auto mb-3 sm:mb-4 animate-bounce" />
              <h3 className="text-xl sm:text-2xl font-black text-white mb-2">Message Sent Successfully!</h3>
              <p className="text-xs sm:text-sm font-medium text-red-100 mb-4">
                Your message has been dispatched to <strong>thirumalaiofficial007@gmail.com</strong>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-gray-200 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 sm:gap-8 md:gap-12 w-full">
              <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-16 w-full">
                {/* Left Column */}
                <div className="flex-1 flex flex-col gap-6 sm:gap-8">
                  <div className="relative">
                    <input 
                      type="text" 
                      id="firstName" 
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="First Name" 
                      className="w-full bg-transparent border-b border-white/50 pb-2.5 sm:pb-3 text-sm sm:text-base md:text-lg focus:outline-none focus:border-black transition-colors placeholder-white/80 font-semibold rounded-none"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="text" 
                      id="lastName" 
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Last Name" 
                      className="w-full bg-transparent border-b border-white/50 pb-2.5 sm:pb-3 text-sm sm:text-base md:text-lg focus:outline-none focus:border-black transition-colors placeholder-white/80 font-semibold rounded-none"
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
                      className="w-full bg-transparent border-b border-white/50 pb-2.5 sm:pb-3 text-sm sm:text-base md:text-lg focus:outline-none focus:border-black transition-colors placeholder-white/80 font-semibold rounded-none"
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
                      className="w-full h-full min-h-[120px] sm:min-h-[140px] bg-transparent border-b border-white/50 pb-2.5 sm:pb-3 text-sm sm:text-base md:text-lg focus:outline-none focus:border-black transition-colors placeholder-white/80 font-semibold resize-none rounded-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-stretch sm:items-center justify-between mt-2 sm:mt-4">
                
                {/* Social Profiles */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                  <a
                    href="https://github.com/Thirumalai23013035"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-full bg-black/30 border border-white/20 hover:bg-black text-white transition-all flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold"
                  >
                    <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/thirumalai-v7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-full bg-black/30 border border-white/20 hover:bg-black text-white transition-all flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    LinkedIn
                  </a>
                  <a
                    href="https://leetcode.com/u/thiru_07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 sm:p-3 rounded-full bg-black/30 border border-white/20 hover:bg-black text-white transition-all flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold"
                  >
                    <LeetCodeIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    LeetCode
                  </a>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-black text-white font-extrabold flex items-center justify-center gap-2 sm:gap-3 hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 group shadow-lg text-xs sm:text-sm disabled:opacity-70 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <span>Sending...</span>
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
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





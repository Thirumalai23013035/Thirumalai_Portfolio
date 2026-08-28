import { useState } from 'react';
import { ExternalLink, Layers, ShieldCheck, ShoppingCart, Landmark, Sparkles, Check } from 'lucide-react';
import { GithubIcon } from './Icons';

const projectsData = [
  {
    id: 'shopsphere',
    title: 'ShopSphere – Full Stack E-Commerce Platform',
    category: 'MERN Stack',
    badge: 'Production-Ready MERN',
    icon: ShoppingCart,
    tagline: 'Complete e-commerce ecosystem with JWT auth, payment gateway, Cloudinary image uploads & Redux Toolkit.',
    description: 'Built a production-ready MERN stack e-commerce application equipped with secure role-based authorization, RESTful APIs, and responsive mobile-first UI.',
    highlights: [
      'JWT Authentication & Role-Based Authorization (Admin/User)',
      'Product CRUD, Search, Filtering, Category Sorting & Pagination',
      'Image Management using Multer & Cloudinary Integration',
      'Interactive Shopping Cart, Wishlist & Order Management',
      'Seamless Payment Gateway Integration & Clean Architecture'
    ],
    techStack: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'Cloudinary', 'JWT'],
    githubUrl: 'https://github.com/Thirumalai23013035',
    liveUrl: '#',
    accentColor: 'from-red-600 to-amber-600'
  },
  {
    id: 'docguard',
    title: 'DocGuard – AI Powered Document Verification System',
    category: 'Python & AI / ML',
    badge: '94% Verification Accuracy',
    icon: ShieldCheck,
    tagline: 'Automated AI verification system detecting forged IDs, certificates & invoices with GPU acceleration.',
    description: 'Developed an AI document authentication engine utilizing Python, Computer Vision, and OCR models to reduce manual document verification effort by nearly 80%.',
    highlights: [
      'Detects forged IDs, certificates, and invoices with 94% accuracy',
      'Automated pipeline with real-time folder monitoring',
      'GPU acceleration support for high-throughput document processing',
      'Computer Vision & Tesseract OCR pipeline integration',
      'Reduced manual audit load by ~80%'
    ],
    techStack: ['Python', 'Computer Vision', 'OCR (Tesseract)', 'Machine Learning', 'OpenCV', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/Thirumalai23013035',
    liveUrl: '#',
    accentColor: 'from-[#ff2a2a] to-purple-600'
  },
  {
    id: 'fincore',
    title: 'FinCore – Banking Application (Java Full Stack)',
    category: 'Java Full Stack',
    badge: 'Enterprise Security & MVC',
    icon: Landmark,
    tagline: 'Secure Java Spring Boot banking engine with Spring Security, iTextPDF statements & OpenAPI docs.',
    description: 'Engineered a secure full-stack Banking Management System using Java Spring Boot microservice architecture, Spring Security JWT authentication, and MySQL.',
    highlights: [
      'Account Management, Secure Fund Transfers & Transaction History',
      'Spring Security with JWT Token Authentication & BCrypt hashing',
      'PDF Statement Generation utilizing iTextPDF library',
      'Interactive API documentation with Swagger / OpenAPI',
      'Layered MVC architecture with Spring Data JPA & MySQL'
    ],
    techStack: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'JPA/Hibernate', 'iTextPDF', 'Swagger/OpenAPI'],
    githubUrl: 'https://github.com/Thirumalai23013035',
    liveUrl: '#',
    accentColor: 'from-blue-600 to-red-600'
  }
];

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const categories = ['All', 'MERN Stack', 'Java Full Stack', 'Python & AI / ML'];

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="bg-[#050505] text-white py-20 sm:py-28 px-4 sm:px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-white/10">
      {/* Background Decor */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4 sm:gap-6" data-aos="fade-up">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
              <Layers className="w-3.5 h-3.5" />
              Featured Deliverables
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Featured <span className="text-[#ff2a2a]">Projects</span>
            </h2>
          </div>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-md font-medium">
            Production-grade applications built with Spring Boot, MERN Stack, and Machine Learning models.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                selectedFilter === cat
                  ? 'bg-white text-black font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                  : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Showcase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, idx) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                className="group bg-[#111111] border border-white/10 hover:border-[#ff2a2a]/60 rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)] flex flex-col justify-between"
              >
                <div>
                  {/* Top Gradient Banner & Header */}
                  <div className={`p-5 sm:p-6 bg-gradient-to-r ${project.accentColor} relative overflow-hidden`}>
                    <div className="absolute -right-4 -bottom-4 text-white/10 transform rotate-12 group-hover:scale-110 transition-transform">
                      <Icon size={100} />
                    </div>
                    <div className="relative z-10 flex justify-between items-start">
                      <span className="bg-black/60 backdrop-blur-md text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2.5 sm:px-3 py-1 rounded-full border border-white/20">
                        {project.badge}
                      </span>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="relative z-10 text-xl sm:text-2xl font-black text-white mt-6 sm:mt-8 leading-tight">
                      {project.title.split('–')[0]}
                    </h3>
                    <p className="relative z-10 text-white/80 text-[11px] sm:text-xs font-semibold mt-1">
                      {project.category}
                    </p>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 md:p-8 flex flex-col gap-5 sm:gap-6">
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-medium">
                      {project.description}
                    </p>

                    {/* Key Highlights */}
                    <div>
                      <h4 className="text-[11px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider mb-2.5 sm:mb-3">
                        Key Features & Capabilities
                      </h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {project.highlights.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-[11px] sm:text-xs text-gray-300 leading-snug">
                            <Check className="w-3.5 h-3.5 text-[#ff2a2a] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div>
                      <h4 className="text-[9px] sm:text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-1 sm:gap-1.5">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-white/5 border border-white/10 text-gray-300 text-[10px] sm:text-[11px] font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-5 sm:p-6 pt-0 flex items-center gap-2.5 sm:gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white text-[11px] sm:text-xs font-bold flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    GitHub Repo
                  </a>

                  <a
                    href={project.liveUrl}
                    className="p-2.5 sm:p-3 rounded-xl bg-[#ff2a2a] hover:bg-red-600 text-white flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(255,42,42,0.4)]"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* LeetCode & Problem Solving Banner */}
        <div className="mt-12 sm:mt-16 bg-[#121212] border border-white/10 rounded-3xl p-5 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-5 sm:gap-6" data-aos="fade-up">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Sparkles className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                433+ DSA Problems Solved on LeetCode
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm">
                Top 52% globally (Rating 1,477) across Java, C++, and Python problem sets.
              </p>
            </div>
          </div>
          <a
            href="https://leetcode.com/u/thiru_07"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto text-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-amber-500 text-black font-extrabold text-xs uppercase tracking-wider hover:bg-amber-400 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] shrink-0"
          >
            View LeetCode Profile
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;

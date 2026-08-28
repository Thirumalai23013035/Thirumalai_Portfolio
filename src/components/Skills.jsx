import { useState } from 'react';
import { Code2, Server, Layout, Database, Terminal, Cpu, CheckCircle2, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    id: 'all',
    name: 'All Skills',
    icon: Sparkles
  },
  {
    id: 'languages',
    name: 'Languages',
    icon: Code2,
    skills: [
      { name: 'Java', level: 'Advanced', description: 'Core Java, OOP, Collections, Multithreading' },
      { name: 'JavaScript', level: 'Advanced', description: 'ES6+, Async/Await, DOM, Modern JS' },
      { name: 'Python', level: 'Intermediate', description: 'Automation, ML Data Pipelines, Scripting' },
      { name: 'C++', level: 'Intermediate', description: 'Data Structures, Algorithmic Optimization' },
      { name: 'SQL', level: 'Advanced', description: 'Relational Database Queries, Indexing, Joins' },
      { name: 'C', level: 'Basic', description: 'Low-level concepts & memory fundamentals' }
    ]
  },
  {
    id: 'backend',
    name: 'Backend & Frameworks',
    icon: Server,
    skills: [
      { name: 'Spring Boot', level: 'Advanced', description: 'REST APIs, Microservices, Spring Data JPA' },
      { name: 'Spring Security', level: 'Advanced', description: 'JWT Authentication, Role-based Access' },
      { name: 'Node.js', level: 'Advanced', description: 'Event-driven Async Architecture, Express' },
      { name: 'Express.js', level: 'Advanced', description: 'Middleware, REST API Routing, Auth' },
      { name: 'REST APIs', level: 'Advanced', description: 'JSON, API Design, OpenAPI/Swagger Docs' },
      { name: 'JPA / Hibernate', level: 'Advanced', description: 'ORM Mapping, Query Optimization, Entities' }
    ]
  },
  {
    id: 'frontend',
    name: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'React.js', level: 'Advanced', description: 'Hooks, Context API, Redux Toolkit, Components' },
      { name: 'Tailwind CSS', level: 'Advanced', description: 'Responsive Layouts, Glassmorphism, UI System' },
      { name: 'HTML5 & CSS3', level: 'Advanced', description: 'Semantic Markup, Flexbox, CSS Grid, Animations' },
      { name: 'Responsive UI', level: 'Advanced', description: 'Mobile-first design, Cross-browser compatibility' },
      { name: 'Redux Toolkit', level: 'Advanced', description: 'Global State Management & Async Thunks' }
    ]
  },
  {
    id: 'datascience',
    name: 'AI & Data Science',
    icon: Cpu,
    skills: [
      { name: 'NumPy', level: 'Intermediate', description: 'Array Operations & Numerical Processing' },
      { name: 'Pandas', level: 'Intermediate', description: 'Data Manipulation & Analysis' },
      { name: 'Matplotlib / Seaborn', level: 'Intermediate', description: 'Data Visualization & Insights' },
      { name: 'Machine Learning', level: 'Intermediate', description: 'Computer Vision, OCR & Document Verification' }
    ]
  },
  {
    id: 'databases',
    name: 'Databases & Tools',
    icon: Database,
    skills: [
      { name: 'MySQL', level: 'Advanced', description: 'Relational Schemas, Constraints, Transactions' },
      { name: 'MongoDB', level: 'Advanced', description: 'NoSQL Aggregations, Collections, Mongoose' },
      { name: 'Git & GitHub', level: 'Advanced', description: 'Version Control, Branching, Pull Requests' },
      { name: 'Swagger / OpenAPI', level: 'Advanced', description: 'Interactive API Documentation' },
      { name: 'Postman', level: 'Advanced', description: 'API Testing, Collections, Automated Tests' },
      { name: 'Power BI', level: 'Intermediate', description: 'Dashboard KPI Visualization & Business Analytics' },
      { name: 'IntelliJ IDEA & VS Code', level: 'Advanced', description: 'Primary IDEs for Java & Web Dev' }
    ]
  }
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const getAllSkills = () => {
    return skillCategories
      .filter((cat) => cat.id !== 'all')
      .flatMap((cat) => cat.skills.map((skill) => ({ ...skill, category: cat.name })));
  };

  const getDisplayedSkills = () => {
    if (activeTab === 'all') {
      return getAllSkills();
    }
    const cat = skillCategories.find((c) => c.id === activeTab);
    return cat ? cat.skills.map((s) => ({ ...s, category: cat.name })) : [];
  };

  const displayedSkills = getDisplayedSkills();

  return (
    <section id="skills" className="bg-[#0d0d0d] text-white py-20 sm:py-28 px-4 sm:px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-white/10">
      {/* Background glow effects */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-red-800/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
            <Terminal className="w-3.5 h-3.5" />
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-4 sm:mb-6">
            Skills & <span className="text-[#ff2a2a]">Technologies</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
            Hands-on experience in full-stack Java development, modern MERN stack applications, database design, and machine learning pipelines.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12" data-aos="fade-up" data-aos-delay="100">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#ff2a2a] text-white shadow-[0_0_20px_rgba(255,42,42,0.4)] scale-105'
                    : 'bg-white/5 text-gray-300 border border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              data-aos="fade-up"
              data-aos-delay={index * 50}
              className="group relative bg-[#141414] border border-white/10 hover:border-[#ff2a2a]/50 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,42,42,0.15)] flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-400 bg-red-950/40 border border-red-800/30 px-2.5 py-0.5 rounded-full">
                    {skill.category}
                  </span>
                  <span className="text-[10px] text-gray-400 font-semibold px-2 py-0.5 rounded bg-white/5">
                    {skill.level}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#ff2a2a]" />
                  {skill.name}
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Architectural Competencies */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-red-950/30 via-[#181818] to-red-950/30 border border-red-500/20 rounded-3xl p-6 sm:p-8 text-center" data-aos="fade-up">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4">
            Core Concepts & Engineering Practices
          </h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {['Java Full Stack', 'MERN Stack', 'Object-Oriented Programming (OOP)', 'Data Structures & Algorithms', 'RESTful Microservices', 'MVC Architecture', 'DBMS & Relational Modeling', 'Version Control (Git/GitHub)'].map((concept, i) => (
              <span key={i} className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-white/5 border border-white/10 text-[11px] sm:text-xs md:text-sm font-semibold text-gray-200">
                ⚡ {concept}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;

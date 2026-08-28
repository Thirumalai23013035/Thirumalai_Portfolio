import { Briefcase, GraduationCap, Award, Trophy, Calendar, MapPin, CheckCircle } from 'lucide-react';

const experienceData = [
  {
    role: 'Inplant Trainee',
    company: 'Retech Solutions',
    location: 'Chennai, Tamil Nadu',
    period: '05/2024 – 06/2024',
    type: 'Industry Internship',
    description: [
      'Completed industry-oriented training focused on Data Analytics workflows, Software Development practices, Business Intelligence tools, and data visualization.',
      'Designed and developed a Power BI dashboard to analyze Call Center KPIs, visualize operational performance, generate actionable business insights, and support data-driven decision making.'
    ],
    skills: ['Power BI', 'Data Analytics', 'KPI Analysis', 'Data Visualization', 'Software Development']
  }
];

const educationData = [
  {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Saveetha Engineering College',
    location: 'Chennai, Tamil Nadu',
    period: '2023 – 2027',
    score: 'CGPA: 8.5 / 10',
    details: 'Focusing on Core Computer Science, Object Oriented Programming, Data Structures & Algorithms, Database Systems, Web Architectures, and Machine Learning.'
  },
  {
    degree: 'Higher Secondary Education (HSC)',
    institution: 'Vidhya Vikas Matriculation Higher Secondary School',
    location: 'Tamil Nadu',
    period: '2022 – 2023',
    score: 'Score: 90%',
    details: 'Completed Higher Secondary with 90% distinction in Computer Science & Science discipline.'
  }
];

const certifications = [
  {
    title: 'Oracle Database SQL Certified Specialist',
    issuer: 'Oracle',
    year: '2026',
    badge: 'SQL & Database Architecture'
  },
  {
    title: 'Quantitative Research Job Simulation',
    issuer: 'J.P. Morgan',
    year: '2025',
    badge: 'Financial Data Analytics'
  },
  {
    title: 'Full Stack Web Development Certification',
    issuer: 'NSDC (National Skill Development Corp)',
    year: '2025',
    badge: 'Full Stack Web Architecture'
  }
];

const achievements = [
  {
    title: '1st Prize – College Technical Event',
    description: 'Won 1st Prize in a college-level technical event combining algorithmic coding and mathematical problem-solving, competing against students across departments.',
    year: 'College Competition'
  },
  {
    title: '1st Prize – UI/UX Design Contest',
    description: 'Won 1st Prize in a UI/UX design contest, creating the interactive frontend implementation for the winning submission.',
    year: 'Design & Frontend Contest'
  },
  {
    title: '433+ DSA Problems Solved on LeetCode',
    description: 'Ranked in Top 52% globally with a contest rating of 1,477 across Java, C++, and Python problem categories.',
    year: 'Competitive Coding'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#0a0a0a] text-white py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans border-t border-white/10">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            Career & Growth
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Experience & <span className="text-[#ff2a2a]">Education</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed mt-4">
            My professional journey, academic record, industry certifications, and competition achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Work Experience & Education */}
          <div className="flex flex-col gap-12">
            
            {/* Work Experience */}
            <div data-aos="fade-right">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#ff2a2a]/20 border border-[#ff2a2a]/40 flex items-center justify-center text-[#ff2a2a]">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white">Work Experience</h3>
              </div>

              {experienceData.map((exp, index) => (
                <div
                  key={index}
                  className="bg-[#141414] border border-white/10 hover:border-[#ff2a2a]/50 rounded-2xl p-6 md:p-8 transition-all duration-300 relative"
                >
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold">
                      {exp.type}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#ff2a2a]" />
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="text-xl font-black text-white">{exp.role}</h4>
                  <div className="flex items-center gap-2 text-red-400 font-semibold text-sm mb-4">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-gray-400 text-xs">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-300 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-[#ff2a2a] shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-2.5 py-1 rounded bg-white/5 text-[11px] font-semibold text-gray-400">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div data-aos="fade-right" data-aos-delay="150">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-[#141414] border border-white/10 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                      <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold">
                        {edu.score}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm font-semibold mb-1">{edu.institution}</p>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span>{edu.location}</span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {edu.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Certifications & Achievements */}
          <div className="flex flex-col gap-12">
            
            {/* Certifications */}
            <div data-aos="fade-left">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white">Certifications</h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="bg-[#141414] border border-white/10 hover:border-amber-500/40 rounded-2xl p-5 flex items-center justify-between transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded">
                          {cert.badge}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white">{cert.title}</h4>
                      <p className="text-xs text-gray-400">{cert.issuer}</p>
                    </div>
                    <span className="text-xs font-extrabold text-amber-400 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
                      {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div data-aos="fade-left" data-aos-delay="150">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                  <Trophy className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-bold text-white">Achievements & Honors</h3>
              </div>

              <div className="space-y-4">
                {achievements.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#141414] border border-white/10 hover:border-purple-500/40 rounded-2xl p-6 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <Trophy className="w-4 h-4 text-purple-400 shrink-0" />
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-bold text-purple-300 bg-purple-950 px-2 py-0.5 rounded">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Strengths Grid */}
            <div className="bg-gradient-to-br from-[#161616] to-[#0d0d0d] border border-white/10 rounded-3xl p-6" data-aos="fade-left" data-aos-delay="250">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
                Key Strengths & Personal Attributes
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Problem Solving',
                  'Analytical Thinking',
                  'Team Collaboration',
                  'Time Management',
                  'Adaptability',
                  'Technical Communication',
                  'Self-Learning'
                ].map((strength, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-gray-200">
                    ✦ {strength}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;

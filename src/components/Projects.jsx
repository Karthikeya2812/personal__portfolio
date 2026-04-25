import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const projects = [
  {
    id: 'traffic',
    date: 'December 2025',
    title: 'Smart AI-Based Traffic Control & Management',
    desc: 'AI-driven adaptive traffic signal system using YOLO-based real-time vehicle detection to dynamically analyze traffic density and congestion patterns.',
    highlights: [
      'Edge-level video processing pipeline',
      'Centralized decision-control engine',
      'Simulation-based performance evaluation',
      'Vehicle detection & density analysis',
      'Intelligent signal prioritization logic'
    ],
    tags: ['Python', 'OpenCV', 'YOLO', 'Machine Learning', 'System Architecture'],
    github: 'https://github.com/Karthikeya2812/-Smart-Adaptive-Traffic-Signal-Management-System',
  },
  {
    id: 'poultry',
    date: 'Sep’ 25 – Nov’ 25',
    title: 'AI-Based Biosecurity for Poultry Farm',
    desc: 'Developed a Django-based web application to monitor and manage poultry farm biosecurity using AI-driven insights and real-time data tracking to support proactive decision-making.',
    highlights: [
      'AI-driven biosecurity monitoring',
      'Real-time data tracking',
      'Proactive risk detection',
      'Responsive Django architecture'
    ],
    tags: ['Python', 'Django', 'HTML/CSS', 'Bootstrap', 'AI Insights'],
    github: 'https://github.com/Karthikeya2812/Poultry-Farm',
  },
  {
    id: 'sales',
    date: 'Mar’ 25 – May’ 25',
    title: 'Sales Tracker Frontend',
    desc: 'Built a responsive Sales Tracking Web Application using React.js, enabling full CRUD functionality with Local Storage and dynamic real-time data visualization through interactive charts.',
    highlights: [
      'Full CRUD functionality',
      'Local Storage state management',
      'Dynamic real-time charts',
      '100% offline functionality'
    ],
    tags: ['ReactJS', 'Tailwind CSS', 'Local Storage', 'Charts'],
    github: 'https://github.com/Karthikeya2812/Sales-Tracker',
  },
  {
    id: 'grocery',
    date: 'Feb’ 24 – Apr’ 24',
    title: 'Grocery Store E-Commerce Platform',
    desc: 'Engineered a full-stack e-commerce platform delivering a dynamic user interface for seamless product browsing, cart management, and secure checkout using robust backend services.',
    highlights: [
      'Seamless product browsing',
      'Secure cart checkout',
      'Robust Node/Express backend',
      'Personalized recommendations'
    ],
    tags: ['ReactJS', 'Node.js', 'Express', 'MongoDB', 'Bootstrap'],
    github: 'https://github.com/Karthikeya2812/Grocery_Store-.',
  },
]

export default function Projects() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="projects" className="py-28 relative">
      <div className="absolute inset-0 bg-grid opacity-25" />
      {/* Yellow glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-neon-yellow/4 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="section-label">What I've Built</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
            Featured{' '}
            <span className="text-neon-yellow [text-shadow:0_0_20px_rgba(250,255,0,0.4)]">
              Projects
            </span>
          </h2>
        </motion.div>

        {/* Project Cards List */}
        <div className="flex flex-col gap-10">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ y: -4, boxShadow: "0 10px 40px -10px rgba(250,255,0,0.15)" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="glass-card rounded-3xl p-6 lg:p-10 flex flex-col lg:flex-row gap-8 w-full items-stretch transition-all duration-300 group"
            >
              {/* Left Side: Content */}
              <div className="flex-1 flex flex-col">
                {/* Date */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-neon-yellow/10 flex items-center justify-center text-neon-yellow border border-neon-yellow/20">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-gray-400 text-sm font-mono font-medium tracking-wide">{proj.date}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-neon-yellow transition-colors duration-300">
                  {proj.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 leading-relaxed mb-8 text-sm sm:text-base pr-0 lg:pr-8">
                  {proj.desc}
                </p>
                
                {/* Key Highlights */}
                <div className="mt-auto">
                  <h4 className="text-white font-bold mb-4 text-sm sm:text-base">Key Highlights:</h4>
                  <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4 pr-0 lg:pr-8">
                    {proj.highlights.map(h => (
                      <li key={h} className="flex items-start gap-3 text-sm text-gray-400">
                         <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon-yellow shrink-0 shadow-neon-sm"></span>
                         <span className="leading-snug">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Side: Tech Stack & Link */}
              <div className="lg:w-80 shrink-0 bg-dark-900/60 rounded-2xl border border-white/5 p-6 sm:p-8 flex flex-col">
                <h4 className="text-white font-bold mb-5">Tech Stack</h4>
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {proj.tags.map(t => (
                    <span 
                      key={t} 
                      className="px-3.5 py-1.5 rounded-lg border border-neon-yellow/15 text-gray-400 hover:text-neon-yellow hover:bg-neon-yellow/5 transition-colors text-xs font-mono font-medium bg-dark-950/50"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto border-t border-white/5 pt-6">
                  <a 
                    href={proj.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl border border-white/10 hover:border-neon-yellow hover:bg-neon-yellow/10 hover:text-neon-yellow text-gray-300 transition-all font-bold text-sm shadow-sm"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

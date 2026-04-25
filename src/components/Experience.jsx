import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const experiences = [
  {
    id: 'outlier',
    role: 'AI Model Evaluation Specialist',
    org: 'Outlier (Freelance)',
    period: 'Oct’ 24 – Feb’ 25',
    type: 'Freelance',
    highlights: [
      'Annotated and evaluated text data for training large language models.',
      'Reviewed AI-generated responses for accuracy, reasoning, and quality.',
      'Flagged misleading, incomplete, or hallucinated responses to help reduce model error rates.',
      'Contributed to projects focused on improving reasoning quality and factual accuracy of AI answers.',
    ],
    tags: ['Data QA', 'Analytical Skills', 'LLM Evaluation', 'AI Training'],
  },
  {
    id: 'flame',
    role: 'MERN Stack Trainee',
    org: 'Flame’24–W3 Elites',
    period: 'Dec’ 24 – Feb’ 25',
    type: 'Training',
    highlights: [
      'Gained hands-on expertise in full-stack web applications including real-world projects like an e-commerce platform and task manager.',
      'Analyzed server-side development principles using the Node.js runtime.',
      'Focused on the Express.js framework for routing, middleware implementation, and crafting RESTful API endpoints.',
    ],
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs'],
  },
  {
    id: 'hackathon',
    role: 'Participant',
    org: 'Smart India Hackathon',
    period: 'Extracurricular',
    type: 'Event',
    highlights: [
      'Participated in the Smart India Hackathon, tackling real-world problems under intense time constraints.',
      'Showcased strong problem-solving and innovation skills.',
      'Collaborated closely with team members to deliver a functional prototype.',
    ],
    tags: ['Innovation', 'Problem Solving', 'Teamwork'],
  },
  {
    id: 'nss',
    role: 'Volunteer',
    org: 'National Service Scheme (NSS)',
    period: '2024 – 2025',
    type: 'Social Service',
    highlights: [
      'Served actively as an NSS volunteer.',
      'Organized and conducted literacy camps for underprivileged children.',
      'Engaged in various social service activities promoting community welfare.',
    ],
    tags: ['Leadership', 'Social Service', 'Community'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      {/* Stars Background Picture */}
      <div className="absolute inset-0 z-0">
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-dark-950/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-transparent to-dark-950" />
      </div>
      
      <div className="absolute inset-0 bg-grid opacity-20 z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">My Journey</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
            Training &amp;{' '}
            <span className="text-neon-yellow [text-shadow:0_0_20px_rgba(250,255,0,0.4)]">
              Activities
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-yellow/50 via-neon-yellow/20 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className={`relative flex md:items-center gap-8 mb-12 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col pl-16 md:pl-0`}
            >
              {/* Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-6 md:top-1/2 md:-translate-y-1/2 w-5 h-5 rounded-full bg-neon-yellow shadow-neon-sm border-4 border-dark-900 z-10" />

              {/* Card */}
              <div className={`md:w-[calc(50%-2rem)] w-full ${i % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                <motion.div 
                  whileHover={{ scale: 1.02, y: -4, boxShadow: "0 10px 40px -10px rgba(250,255,0,0.15)" }}
                  className="glass-card rounded-2xl p-7 transition-colors duration-300 cursor-default"
                >
                  {/* Header row */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white leading-tight">{exp.role}</h3>
                      <p className="text-neon-yellow/80 text-sm font-medium mt-1">{exp.org}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <span className="px-3 py-1 rounded-full bg-neon-yellow/10 border border-neon-yellow/25 text-neon-yellow text-xs font-semibold whitespace-nowrap">
                        {exp.period}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-dark-700 text-gray-400 text-xs border border-white/10">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-gray-400">
                        <span className="text-neon-yellow mt-0.5 shrink-0">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-neon-yellow/8 border border-neon-yellow/20 text-neon-yellow/80 text-xs font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Spacer on desktop */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

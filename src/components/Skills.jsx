import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const skillGroups = [
  {
    title: 'Languages',
    skills: ['Java', 'JavaScript', 'Python'],
    span: 'lg:col-span-1'
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['ReactJS', 'NodeJS', 'Express', 'HTML / CSS', 'Bootstrap', 'Django', 'PHP'],
    span: 'lg:col-span-2'
  },
  {
    title: 'Tools & Platforms',
    skills: ['MySQL', 'MongoDB', 'Git', 'GitHub', 'Figma', 'Render'],
    span: 'lg:col-span-1 md:col-span-2'
  },
  {
    title: 'Core CS Fundamentals',
    skills: ['DBMS', 'Operating Systems', 'Computer Networks', 'SQL', 'OOPs'],
    span: 'lg:col-span-1 md:col-span-1'
  },
  {
    title: 'Soft Skills',
    skills: ['Time Management', 'Flexibility', 'Project Management', 'Quick Learner', 'Adaptability'],
    span: 'lg:col-span-1 md:col-span-2'
  },
]

export default function Skills() {
  const [ref, inView] = useInView(0.1)

  return (
    <section id="skills" className="py-28 relative bg-dark-900/30">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Technical Expertise</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
            Skills &amp; <span className="text-neon-yellow [text-shadow:0_0_20px_rgba(250,255,0,0.4)]">Technologies</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ y: -6, boxShadow: "0 10px 40px -10px rgba(250,255,0,0.15)" }}
              transition={{ duration: 0.6, delay: gi * 0.12 }}
              className={`glass-card rounded-2xl p-7 transition-all duration-300 ${group.span || ''}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-0.5 bg-neon-yellow/50" />
                <h3 className="text-xl font-bold text-white">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 rounded-xl bg-dark-800 border border-white/5 text-gray-300 text-sm font-medium hover:border-neon-yellow/40 hover:text-neon-yellow hover:bg-neon-yellow/5 transition-all duration-300 cursor-default shadow-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 overflow-hidden"
        >
          <div className="flex gap-4 animate-marquee w-max">
            {[
              'Java','ReactJS','NodeJS','Python','Express','Django','MongoDB',
              'MySQL','Bootstrap','Figma','Git','GitHub','Render','SQL',
              'Java','ReactJS','NodeJS','Python','Express','Django','MongoDB',
              'MySQL','Bootstrap','Figma','Git','GitHub','Render','SQL',
            ].map((tech, i) => (
              <span
                key={i}
                className="px-5 py-2.5 rounded-full bg-dark-800 border border-neon-yellow/15 text-gray-400 text-sm font-mono whitespace-nowrap hover:text-neon-yellow hover:border-neon-yellow/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

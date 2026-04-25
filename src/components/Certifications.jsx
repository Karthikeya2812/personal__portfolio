import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const certs = [
  {
    id: 'ux',
    icon: '🎨',
    title: 'UX Design',
    issuer: 'Coursera',
    sub: 'Professional Certificate Program',
    year: 'Dec 2024',
  },
  {
    id: 'cloud',
    icon: '☁️',
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    sub: 'National Programme on Technology Enhanced Learning',
    year: 'Oct 2024',
  },
  {
    id: 'node',
    icon: '🟢',
    title: 'Server-side JavaScript with Node.js',
    issuer: 'Coursera',
    sub: 'Advanced Node.js and Express',
    year: 'Mar 2024',
  },
  {
    id: 'dsa',
    icon: '🧩',
    title: 'Data Structures Algorithms using C/C++',
    issuer: 'Udemy',
    sub: 'Mastery in DS & Algorithms',
    year: 'Nov 2023',
  },
]

export default function Certifications() {
  const [ref, inView] = useInView(0.15)

  return (
    <section id="certifications" className="py-28 relative">
      <div className="absolute inset-0 bg-grid opacity-25" />

      <div className="max-w-7xl mx-auto px-6 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Validated Knowledge</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
            My{' '}
            <span className="text-neon-yellow [text-shadow:0_0_20px_rgba(250,255,0,0.4)]">
              Certifications
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 40px -10px rgba(250,255,0,0.15)" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-7 flex gap-5 items-start group cursor-default"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300 shrink-0">
                {cert.icon}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-neon-yellow transition-colors duration-300">
                    {cert.title}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-neon-yellow/15 border border-neon-yellow/30 text-neon-yellow text-[10px] font-bold uppercase tracking-wider hidden sm:inline-block">
                    ✓ Verified
                  </span>
                </div>
                <p className="text-neon-yellow/70 text-sm font-semibold">{cert.issuer}</p>
                <p className="text-gray-500 text-xs mt-0.5">{cert.sub}</p>
                <p className="text-gray-600 text-xs mt-2 font-mono">{cert.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

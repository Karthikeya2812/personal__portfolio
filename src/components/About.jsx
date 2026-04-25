import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from '../hooks/useInView'

const cards = [
  {
    icon: '🎓',
    title: 'Education',
    body: (
      <>
        B.Tech in Computer Science &amp; Engineering at{' '}
        <span className="text-white font-semibold">Lovely Professional University</span>{' '}
        (CGPA: 7.38). Intermediate at SR Edu Center (92.5%) and Matriculation at Aryabhatta Concept School (10 CGPA).
      </>
    ),
  },
  {
    icon: '⚡',
    title: 'Expertise',
    body: (
      <>
        Specialized in full-stack web development using the{' '}
        <span className="text-white font-semibold">MERN Stack</span> and{' '}
        <span className="text-white font-semibold">Django</span>. Experienced in building responsive UIs and robust RESTful APIs.
      </>
    ),
  },
  {
    icon: '🚀',
    title: 'Mission',
    body: (
      <>
        Leveraging modern frameworks and{' '}
        <span className="text-white font-semibold">AI-driven insights</span> to engineer secure, scalable solutions that enhance user engagement and solve real-world problems.
      </>
    ),
  },
]

export default function About() {
  const [refInView, inView] = useInView(0.15)
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax transform for the grid
  const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="py-28 relative bg-transparent"
    >
      {/* Dark gradient to blend smoothly from Hero section and keep text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950 via-dark-950/40 to-dark-950/90 z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay z-0 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={refInView}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Who I Am</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
            Passionate About{' '}
            <span className="text-neon-yellow [text-shadow:0_0_20px_rgba(250,255,0,0.4)]">
              Building
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div style={{ y: yParallax }} className="grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              whileHover={{ y: -8, boxShadow: "0 10px 40px -10px rgba(250,255,0,0.2)" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card rounded-2xl p-8 group cursor-default"
            >
              <div className="text-4xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {c.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-yellow transition-colors duration-300">
                {c.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">{c.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

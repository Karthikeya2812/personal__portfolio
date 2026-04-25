import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const techTags = [
  { label: 'React.js',      cls: 'top-0 left-0 animate-float' },
  { label: 'Node.js',       cls: 'bottom-8 left-0 animate-float-2' },
  { label: 'Django',        cls: 'top-8 right-0 animate-float-3' },
  { label: 'MongoDB',       cls: 'bottom-0 right-0 animate-float' },
  { label: 'Python',        cls: 'top-1/2 -left-16 -translate-y-1/2 animate-float-2' },
  { label: 'Express',       cls: 'top-1/2 -right-12 -translate-y-1/2 animate-float-3' },
]

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax transforms
  const yText = useTransform(scrollYProgress, [0, 1], [0, 200])
  const yRings = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-cover bg-center sm:bg-[70%_center] lg:bg-center bg-no-repeat bg-[url('/backgroundimage.jpeg')] sm:bg-[url('/backgroundimage3.jpeg')]"
    >
      {/* Dark gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-dark-950/90 via-dark-950/60 to-dark-950/20 z-0 pointer-events-none" />
      
      {/* Subtle bottom gradient to blend into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent z-0 pointer-events-none" />

      {/* BG Grid */}
      <div className="absolute inset-0 bg-grid opacity-30 mix-blend-overlay z-0" />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-yellow/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-neon-yellow/4 blur-[100px] pointer-events-none z-0" />

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — Content */}
        <motion.div style={{ y: yText, opacity }} variants={container} initial="hidden" animate="show" className="space-y-8 flex flex-col items-center text-center lg:items-start lg:text-left">
          {/* Badges */}
          <motion.div variants={item} className="flex flex-wrap justify-center lg:justify-start gap-3">
            <span className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-neon-yellow/10 border border-neon-yellow/25 text-neon-yellow">
              <span className="w-2 h-2 rounded-full bg-neon-yellow animate-pulse" />
              Available for Opportunities
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-semibold bg-dark-700 border border-white/10 text-gray-300">
              🎓 B.Tech CSE · LPU
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={item} className="flex flex-col items-center lg:items-start">
            <p className="font-mono text-neon-yellow text-sm font-semibold tracking-widest uppercase mb-3">
              Hello, I'm
            </p>
            <h1 className="font-black text-5xl sm:text-6xl lg:text-7xl leading-none tracking-tight">
              <span className="text-white">Sai </span>
              <span className="text-neon-yellow [text-shadow:0_0_30px_rgba(250,255,0,0.5)]">Karthikeya</span>
            </h1>
          </motion.div>

          {/* Role */}
          <motion.div variants={item}>
            <p className="text-lg sm:text-xl font-semibold text-gray-300">
              Full Stack Developer &amp;{' '}
              <span className="text-neon-yellow">Problem Solver</span>
            </p>
          </motion.div>

          {/* Description */}
          <motion.p variants={item} className="text-gray-400 text-base leading-relaxed max-w-lg mx-auto lg:mx-0">
            Building responsive web applications and scalable platforms. CSE undergraduate at{' '}
            <span className="text-white font-medium">Lovely Professional University</span> passionate
            about creating robust solutions with modern technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={item} className="flex flex-wrap justify-center lg:justify-start gap-4 w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-7 py-3 rounded-xl bg-neon-yellow text-black font-bold text-sm hover:shadow-neon transition-shadow duration-200"
            >
              View Projects
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1VAsHVQoQ4DeEX6kvO7xsyiNivWtamsRE/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-7 py-3 rounded-xl bg-dark-700 border border-neon-yellow/30 text-white font-semibold text-sm hover:border-neon-yellow hover:text-neon-yellow hover:bg-neon-yellow/5 transition-colors duration-200 block"
            >
              Download Resume
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-7 py-3 rounded-xl border border-white/15 text-gray-300 font-semibold text-sm hover:border-white/40 hover:text-white transition-colors duration-200"
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right — Avatar/Tech */}
        <motion.div 
          style={{ y: yRings, opacity }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative hidden lg:flex justify-center items-center h-[500px]"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            {/* Outer spinning ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-neon-yellow/20 animate-spin-slow" />
            {/* Inner spinning ring */}
            <div className="absolute inset-6 rounded-full border border-neon-yellow/30 animate-[spin-reverse_12s_linear_infinite]" />

            {/* Transparent Center Ring */}
            <div className="absolute inset-10 rounded-full border border-neon-yellow/20 shadow-[inset_0_0_20px_rgba(250,255,0,0.1)]" />

            {/* Orbiting dot 1 */}
            <div className="absolute inset-0 rounded-full animate-spin-slow">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neon-yellow shadow-neon-sm" />
            </div>
            {/* Orbiting dot 2 */}
            <div className="absolute inset-6 rounded-full animate-[spin-reverse_8s_linear_infinite]">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neon-yellow/60" />
            </div>
          </div>

          {/* Floating tech tags */}
          {techTags.map((t, i) => (
            <motion.div
              key={t.label}
              drag
              dragConstraints={{ top: -20, left: -20, right: 20, bottom: 20 }}
              whileHover={{ scale: 1.1, cursor: "grab" }}
              whileTap={{ scale: 0.95, cursor: "grabbing" }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1, type: 'spring' }}
              className={`absolute ${t.cls} px-3 py-1.5 rounded-full bg-dark-800/90 border border-neon-yellow/30 text-neon-yellow text-xs font-mono font-semibold backdrop-blur-sm shadow-neon-sm`}
            >
              {t.label}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs">
        <div className="w-5 h-8 rounded-full border-2 border-gray-600 flex justify-center pt-1.5">
          <div className="w-1 h-1.5 rounded-full bg-neon-yellow animate-bounce" />
        </div>
        <span className="font-mono tracking-widest uppercase text-[10px]">Scroll</span>
      </div>
    </section>
  )
}

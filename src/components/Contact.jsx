import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const contactItems = [
  { id: 'email',    icon: '✉️', label: 'Email',    value: 'kkuragayala2004@gmail.com', href: 'mailto:kkuragayala2004@gmail.com' },
  { id: 'phone',    icon: '📞', label: 'Phone',    value: '+91 8125440210',             href: 'tel:+918125440210' },
  { id: 'linkedin', icon: '💼', label: 'LinkedIn', value: 'in/saikarthikeya-kuragayala', href: 'https://linkedin.com/in/saikarthikeya-kuragayala/' },
  { id: 'github',   icon: '🐙', label: 'GitHub',   value: 'github.com/Karthikeya2812',      href: 'https://github.com/Karthikeya2812' },
]

export default function Contact() {
  const [ref, inView] = useInView(0.1)
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const formData = new FormData(e.target);
    formData.append("access_key", "a9ff5198-4c8b-42ec-b496-d9063381425c");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      
      if (data.success) {
        setSubmitted(true)
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 4000)
      } else {
        alert("Something went wrong. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("Error sending message. Please try again.")
    }
  }

  return (
    <section id="contact" className="py-28 relative bg-dark-900/30">
      <div className="absolute inset-0 bg-grid opacity-20" />
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-neon-yellow/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-black text-white">
            Let's{' '}
            <span className="text-neon-yellow [text-shadow:0_0_20px_rgba(250,255,0,0.4)]">
              Connect
            </span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm max-w-md mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            {contactItems.map((item, i) => (
              <motion.a
                key={item.id}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                whileHover={{ scale: 1.05, x: 10, boxShadow: "0 10px 40px -10px rgba(250,255,0,0.15)" }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-4 glass-card rounded-2xl p-5 group transition-all duration-300"
              >
                <div className="text-2xl w-12 h-12 rounded-xl bg-dark-700 border border-neon-yellow/20 flex items-center justify-center group-hover:border-neon-yellow/50 group-hover:bg-neon-yellow/10 transition-all duration-300 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">{item.label}</p>
                  <p className="text-white font-semibold text-sm group-hover:text-neon-yellow transition-colors duration-300">
                    {item.value}
                  </p>
                </div>
                <span className="ml-auto text-neon-yellow/0 group-hover:text-neon-yellow/60 transition-all duration-300 text-lg">→</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 space-y-5"
          >
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-neon-yellow/10 border border-neon-yellow/40 text-neon-yellow text-sm font-semibold text-center"
              >
                ✅ Message sent! I'll get back to you soon.
              </motion.div>
            )}

            {[
              { name: 'name',    label: 'Your Name',    type: 'text',  placeholder: 'John Doe' },
              { name: 'email',   label: 'Your Email',   type: 'email', placeholder: 'john@example.com' },
              { name: 'subject', label: 'Subject',      type: 'text',  placeholder: 'Project Collaboration' },
            ].map(field => (
              <div key={field.name}>
                <label className="block text-xs font-semibold text-gray-400 mb-2 tracking-wide uppercase">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-neon-yellow/50 focus:bg-neon-yellow/5 transition-all duration-200"
                />
              </div>
            ))}

            <div>
              <label className="block text-xs font-semibold text-gray-400 mb-2 tracking-wide uppercase">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell me about your project..."
                required
                className="w-full px-4 py-3 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-neon-yellow/50 focus:bg-neon-yellow/5 transition-all duration-200 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(250,255,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3.5 rounded-xl bg-neon-yellow text-black font-bold text-sm flex items-center justify-center gap-2 transition-shadow duration-200"
            >
              <span>Send Message</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

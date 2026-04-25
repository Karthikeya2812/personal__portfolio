export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-neon-yellow/10 bg-dark-900/50 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <button onClick={scrollTop} className="flex items-center gap-2 group">
            <span className="font-black text-xl text-white group-hover:text-neon-yellow transition-colors duration-300">Karthikeya.</span>
            <span className="font-mono text-neon-yellow text-sm font-semibold">&lt;/&gt;</span>
          </button>

          <p className="text-gray-600 text-sm text-center">
            Crafted with{' '}
            <span className="text-neon-yellow">⚡</span>
            {' '}&amp; passion · © {new Date().getFullYear()} Kuragayala Sai Karthikeya
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {[
              { label: 'GitHub',   href: 'https://github.com' },
              { label: 'LinkedIn', href: 'https://linkedin.com' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-neon-yellow text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Back to top */}
        <div className="flex justify-center mt-8">
          <button
            onClick={scrollTop}
            className="flex flex-col items-center gap-1.5 text-gray-600 hover:text-neon-yellow text-xs font-mono transition-colors duration-200 group"
          >
            <div className="w-8 h-8 rounded-full border border-gray-700 group-hover:border-neon-yellow/50 flex items-center justify-center transition-colors duration-200">
              ↑
            </div>
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  )
}

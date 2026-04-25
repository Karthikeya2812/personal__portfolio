/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          yellow: "#FAFF00",
          dim:    "#C8CC00",
          glow:   "#FAFF0033",
        },
        dark: {
          950: "#050505",
          900: "#0A0A0A",
          800: "#111111",
          700: "#1A1A1A",
          600: "#222222",
          500: "#2A2A2A",
        },
      },
      fontFamily: {
        sans:  ["Inter", "sans-serif"],
        mono:  ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        neon:   "0 0 20px rgba(250,255,0,0.4), 0 0 60px rgba(250,255,0,0.15)",
        "neon-sm": "0 0 10px rgba(250,255,0,0.3)",
        "neon-lg": "0 0 40px rgba(250,255,0,0.5), 0 0 80px rgba(250,255,0,0.2)",
        card:   "0 4px 32px rgba(0,0,0,0.6)",
      },
      animation: {
        "spin-slow":    "spin 8s linear infinite",
        "spin-reverse": "spin-reverse 12s linear infinite",
        "pulse-neon":   "pulse-neon 2s ease-in-out infinite",
        float:          "float 3s ease-in-out infinite",
        "float-2":      "float 4s ease-in-out infinite 1s",
        "float-3":      "float 3.5s ease-in-out infinite 0.5s",
        marquee:        "marquee 25s linear infinite",
      },
      keyframes: {
        "spin-reverse": { from: { transform: "rotate(360deg)" }, to: { transform: "rotate(0deg)" } },
        "pulse-neon":   {
          "0%,100%": { boxShadow: "0 0 10px rgba(250,255,0,0.3)" },
          "50%":     { boxShadow: "0 0 30px rgba(250,255,0,0.7), 0 0 60px rgba(250,255,0,0.3)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-10px)" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(250,255,0,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(250,255,0,0.03) 1px,transparent 1px)",
      },
      backgroundSize: {
        grid: "60px 60px",
      },
    },
  },
  plugins: [],
};

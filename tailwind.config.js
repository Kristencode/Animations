/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./dist/**/*.{html,js}",
    "./node_modules/animate.css/animate.min.css",
  ],
  theme: {
    extend: {
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        slideLeft: {
          "0%": { transform: "translateX(-50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        slideRight: {
          "0%": { transform: "translateX(50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        bounceIn: {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
          "100%": { transform: "scale(1)" }
        },
        zoomIn: {
          "0%": { transform: "scale(0.5)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        },
        rotateIn: {
          "0%": { transform: "rotate(-10deg)", opacity: "0" },
          "100%": { transform: "rotate(0)", opacity: "1" }
        }
      },
      animation: {
        "slide-up": "slideUp 1.5s ease-in-out infinite",
        "slide-left": "slideLeft 1.5s ease-in-out infinite",
        "slide-right": "slideRight 1.5s ease-in-out infinite",
        "fade-in": "fadeIn 2s ease-in-out infinite",
        "bounce-in": "bounceIn 1.2s ease-in-out infinite",
        "zoom-in": "zoomIn 1.5s ease-in-out infinite",
        "rotate-in": "rotateIn 1.2s ease-in-out infinite"
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};

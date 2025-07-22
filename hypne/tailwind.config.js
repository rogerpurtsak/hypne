export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {

      keyframes: {
        bounceY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-40px)' },
        },

        fallArc: {
          '0%': {
            transform: 'translate(0, 0)',
            opacity: '0',
          },
          '10%': {
            opacity: '1',
            transform: 'translate(-200px, -80px)',
          },
          '30%': {
            transform: 'translate(-400px, -160px)',
          },
          '50%': {
            transform: 'translate(-600px, -200px)',
          },
          '70%': {
            transform: 'translate(-800px, -120px)',
          },
          '85%': {
            transform: 'translate(-950px, 50px)',
          },
          '100%': {
            transform: 'translate(-1000px, 300px)',
            opacity: '1',
          },
        },

      },
        animation: {
          fallArc: 'fallArc 1.6s ease-in-out forwards',
      },
        colors: {
          button: '#0F7DA0',
      },
        fontFamily: {
          outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
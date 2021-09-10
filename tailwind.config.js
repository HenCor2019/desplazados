module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        flip: {
          '0%': {
            transform: 'perspective(400px) rotateY(90deg)'
          },
          '40%': {
            transform: 'perspective(400px) rotateY(-20deg)'
          },
          '60%': {
            transform: 'perspective(400px) rotateY(10deg)'
          },
          '80%': {
            transform: 'perspective(400px) rotateY(-5deg)'
          },
          '100%': {
            transform: 'perspective(400px) rotateY(0deg)'
          }
        },

        appearance: {
          '0%': {
            opacity: 0
          },

          '25%': {
            opacity: 0.25
          },

          '50%': {
            opacity: 0.5
          },

          '75%': {
            opacity: 0.75
          },

          '100%': {
            opacity: 1
          }
        }
      },
      animation: {
        flip: 'flip 1s linear 0s 1',
        appearance: 'appearance 0.2s 0s 1'
      },
      fontFamily: {
        sans: ['Another Typewriter', 'sans-serif'],
        acumin: ['Acumin Variable Concept', 'sans-serif'],
        crayon: ['Crayon Hand Regular', 'sans-serif']
      },
      // ./images/Home/TopPaper.png
      screens: {
        'lg-1': '1280px',
        '2xl-1': '1920px',
        'sm-h-1': { raw: '(min-height: 700px)' },
        'sm-h': { raw: '(min-height: 640px)' },
        'md-h': { raw: '(min-height: 768px)' },
        'lg-h': { raw: '(min-height: 1024px)' },
        'xl-h': { raw: '(min-height: 1280px)' },
        '2xl-h': { raw: '(min-height: 1536px)' }
      },
      colors: {
        'time':'#b18422',
        'homeText': '#2a2c2b',
        'background': '#e8e8e7',
        'gray-200': '#c5c5c5',
        'black-700': '#444242',
        'gray-500': '#9a999e',
      },
      width: {
        160: '40rem',
        '70/100': '70%',
        '55/100': '55%',
        '3/8': '37.5%'
      },
      height: {
        '15/100': '15%',
        '13/100w': '13vh',
        '87/100w': '87vh'
      },
      inset: {
        '40/100': '40%',
        '15/100': '15%',
        '20/100': '20%'
      },
      minWidth: {
        '10/100': '10%',
        '15/100': '15%',
        '1/4': '25%',
        '3/4': '75%',
        section: '550px',
        'house-width': '300px',
        'support-image': '250px'
      },
      minHeight: {
        20: '100px'
      },
      flex: {
        rigid: '1 0'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

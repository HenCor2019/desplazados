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
      fontSize: {
        'ultra-xs': '.65rem',
        'title': '1.7rem',
      },
      gridTemplateRows: {
        infographic: '50px 1fr'
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
        '2xl-h': { raw: '(min-height: 1536px)' },
        'lg-2': { raw: '(min-width: 1025px)' },
        'xl-2': { raw: '(min-width: 1800px)' },
      },
      borderWidth: {
       '3': '3px',
      },      
      spacing: {
        '9/50': '1.125rem',
       },
      colors: {
        time: '#b18422',
        homeText: '#2a2c2b',
        background: '#e8e8e7',
        'gray-200': '#c5c5c5',
        'brownie-gray': '#dddcdb',
        'black-700': '#444242',
        'brownie-gray': '#dddcdb',
        'gray-500': '#9a999e',
        'gray-gallery': '#6b6b6b',
        cause: '#1fa737'
      },
      width: {
        160: '40rem',
        '70/100': '70%',
        '55/100': '55%',
        '3/8': '37.5%'
      },
      height: {
        '15/100': '15%',
        '90/100': '90%',
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
        'section': '550px',
        'house-width': '300px',
        'support-image': '250px',
        'dreams-note': '95px'
      },
      minHeight: {
        20: '100px',
        'half-screen': '50vh'
      },
      maxHeight: {
        nav: '12rem',
      },
      flex: {
        rigid: '1 0',
        gallery: '2 1'
      },
      flexShrink: {
        '3': 3,
        '2': 2,
      },
      gridTemplateColumns: {
        causesGallery: '33fr 22fr 5fr 18fr 22fr',
        dreamsGallery: '20fr 5fr 30fr 5fr 40fr'
      },
      gridTemplateRows: {
        causesGallery: '34% 11% 11% 15% 24%',
        dreamsGallery: '2fr 3fr 1fr 2fr 2fr'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

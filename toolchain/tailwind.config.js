
export default {
  content: [
    './index.html',
    './src/**/*.{css,scss,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      animation: {
      },
      colors: {
      },
      border: {
        '1': '1px'
      },
      screens: {
        'mobile-s': '320px',
        'mobile-m': '375px',
        'mobile-l': '425px',
        'tablet': '768px',
        'laptop': '1024px',
        'laptop-l': '1200px'
      },
      flex: {
        '2': '2 1 0%',
        '3': '3 1 0%'
      },
      fontFamily: {
        elza: ['DIN', 'sans-serif'],
        roboto: ['Inter', 'sans-serif']
      },
      boxShadow: {
      },
      height: {
      },
      maxHeight: {
      },
      strokeWidth: {
      },
      width: {
        'mobile-s': '320px',
        'mobile-m': '375px',
        'mobile-l': '425px',
        'tablet': '768px',
        'laptop': '1024px',
        'laptop-l': '1200px'
      }
    }
  }
}

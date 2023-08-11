
import plugin from 'tailwindcss/plugin.js'
import { tablerIcons } from './tailwind-plugins/tabler-icons.js'

const linearClamp = (min, max) => {
  min = min / 16
  max = max / 16

  const minWidth = 425 / 16 // minimum width of mobile
  const maxWidth = 768 / 16 // maximum width of laptop

  const slope = (max - min) / (maxWidth - minWidth)
  const intercept = min - slope * minWidth
  const value = slope * 100

  return `clamp(${min}rem, ${intercept}rem + ${value}vw, ${max}rem)`
}

export default {
  plugins: [
    plugin(tablerIcons())
  ],
  content: [
    './index.html',
    './src/**/*.{css,scss,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      animation: {
      },
      colors: {
        'vt-green': 'var(--vt-c-green)',
        'vt-green-light': 'var(--vt-c-green-light)',
        'vt-green-lighter': 'var(--vt-c-green-lighter)',
        'vt-green-dark': 'var(--vt-c-green-dark)',
        'vt-green-darker': 'var(--vt-c-green-darker)',
        'vt-blue': 'var(--vt-c-blue)',
        'vt-blue-light': 'var(--vt-c-blue-light)',
        'vt-blue-lighter': 'var(--vt-c-blue-lighter)',
        'vt-blue-dark': 'var(--vt-c-blue-dark)',
        'vt-blue-darker': 'var(--vt-c-blue-darker)',
        'vt-yellow': 'var(--vt-c-yellow)',
        'vt-yellow-light': 'var(--vt-c-yellow-light)',
        'vt-yellow-lighter': 'var(--vt-c-yellow-lighter)',
        'vt-yellow-dark': 'var(--vt-c-yellow-dark)',
        'vt-yellow-darker': 'var(--vt-c-yellow-darker)',
        'vt-red': 'var(--vt-c-red)',
        'vt-red-light': 'var(--vt-c-red-light)',
        'vt-red-lighter': 'var(--vt-c-red-lighter)',
        'vt-red-dark': 'var(--vt-c-red-dark)',
        'vt-red-darker': 'var(--vt-c-red-darker)',
        'vt-purple': 'var(--vt-c-purple)',
        'vt-purple-light': 'var(--vt-c-purple-light)',
        'vt-purple-lighter': 'var(--vt-c-purple-lighter)',
        'vt-purple-dark': 'var(--vt-c-purple-dark)',
        'vt-purple-darker': 'var(--vt-c-purple-darker)'
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


import fs from 'node:fs'
import path from 'node:path'
import { paramCase } from 'change-case'

import { getIconTemplate } from '../lib/tabler-icons.js'

const svgPath = path.join(process.cwd(), './node_modules/@tabler/icons/icons')

export const tablerIcons = () => {
  const defaultWidth = 1
  const widths = [defaultWidth, 2]

  const handleIcon = (icon, colors, utilities) => {
    const camelCaseName = icon.name.replace('.svg', '')
    const template = getIconTemplate(camelCaseName)
    const name = paramCase(camelCaseName)

    // console.log('camelCaseName', camelCaseName)
    // console.log('colors', colors)

    // compile all the colors to this data structure
    // {
    //   '#000': 'black',
    //   '#fff': 'white',
    //   'red-500': '#f56565',
    //   'green-500': '#48bb78',
    //   'blue-500': '#4299e1'
    // }

    Object.entries(colors).forEach(([key, value]) => {
      widths.forEach(width => {
        const widthClass = width === defaultWidth ? '' : `-${width}`
        const className = `.bg-${name}-${key}${widthClass}`

        utilities[className] = {
          background: template(width, value)
        }
      })
    })
  }

  return ({ addUtilities, theme }) => {
    const utilities = {}
    const colors = theme('colors')

    const compiledColors = Object.entries(colors).reduce((acc, [key, value]) => {
      if (typeof value === 'string') {
        acc[key] = value
      } else {
        Object.entries(value).forEach(([shade, hex]) => {
          acc[`${key}-${shade}`] = hex
        })
      }

      return acc
    }, {})

    console.log('compiledColors', compiledColors);

    fs.readdirSync(svgPath, { withFileTypes: true })
      .filter(dirent => dirent.isFile() && dirent.name.endsWith('.svg'))
      .forEach(icon => handleIcon(icon, compiledColors, utilities))

    addUtilities(utilities, ['responsive', 'hover'])
  }
}

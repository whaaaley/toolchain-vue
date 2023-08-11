
import fs from 'node:fs'
import path from 'node:path'
import crypto from 'node:crypto'
import url from 'node:url'

import { pascalCase } from 'change-case'
import { getIconTemplate } from '../lib/tabler-icons.js'

const svgPath = path.join(process.cwd(), './node_modules/@tabler/icons/icons')

const hashString = str => {
  return crypto.createHash('sha256').update(str).digest('hex')
}

const getCompletions = colors => {
  const hash = hashString(JSON.stringify(colors))

  const filePath = url.fileURLToPath(import.meta.url)
  const directoryPath = path.dirname(filePath)
  const completionPath = path.join(directoryPath, `.completions-${hash}.json`)

  try {
    return JSON.parse(fs.readFileSync(completionPath, 'utf8'))
  } catch {
    console.log('⏳ Building Tailwind completions for Tabler...')

    const reducePairs = (acc, icon) => {
      Object.keys(colors).forEach(color => {
        const key = icon + '-' + color
        acc[key] = key
      })

      return acc
    }

    const result = fs.readdirSync(svgPath, { withFileTypes: true })
      .filter(dirent => dirent.isFile() && dirent.name.endsWith('.svg'))
      .map(icon => icon.name.replace('.svg', ''))
      .reduce(reducePairs, {})

    fs.writeFileSync(filePath, JSON.stringify(result, null, 2))
    console.log('✨ Done building Twilwind completions for Tabler!')

    return result
  }
}

export const tablerIcons = () => {
  return ({ matchUtilities, theme }) => {
    const colors = theme('colors')

    const reduceColors = (acc, [key, value]) => {
      if (typeof value === 'string') {
        acc[key] = value
      } else {
        Object.entries(value).forEach(([shade, hex]) => {
          acc[key + '-' + shade] = hex
        })
      }

      return acc
    }

    const compiledColors = Object.entries(colors)
      .reduce(reduceColors, {})

      console.log('compiledColors', compiledColors);

    matchUtilities({
      'bg-icon': value => {
        const [name, color] = value.split('-')
        const template = getIconTemplate(pascalCase(name))

        return {
          backgroundImage: template(1, compiledColors[color])
        }
      }
    }, {
      values: getCompletions(compiledColors)
    })
  }
}

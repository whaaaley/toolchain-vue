
import sass from 'sass'
import { getIcon } from '../lib/tabler-icons.js'

export default {
  'tabler($name, $width, $color)': ([name, width, color]) => {
    name = name.assertString('name').text
    width = width.assertNumber('width').value
    color = color.assertColor('color').toString()

    const template = getIcon(name)

    return new sass.SassString(template(width, color), {
      quotes: false
    })
  }
}

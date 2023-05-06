
import { staticNode, staticText } from './static-nodes.js'

const marker = '<!-- static -->'
const EMPTY_OBJ = Object.freeze({})

export function jsxStatic (type, props, ...children) {
  props = props == null ? EMPTY_OBJ : props
  children = children.flat(Infinity)

  if (typeof type === 'function') {
    return type(props, children)
  }

  for (let i = 0; i < children.length; i++) {
    const child = children[i]
    children[i] = child.startsWith(marker) ? child : staticText(child)
  }

  return marker + staticNode(type, props, children).replaceAll(marker, '')
}

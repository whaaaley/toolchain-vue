import { expect, describe, it } from 'vitest'
import { getIconTemplate } from './tabler-icons.js'

describe('getIconTemplate', () => {
  it('returns a function', () => {
    const template = getIconTemplate('archive')
    expect(typeof template).toBe('function')
  })

  it('returns different templates for different icons', () => {
    const templateA = getIconTemplate('archive')
    const templateB = getIconTemplate('alert-triangle')
    expect(templateA(1, 'red')).not.toBe(templateB(1, 'red'))
  })

  it('caches templates', () => {
    const templateA = getIconTemplate('archive')
    const templateB = getIconTemplate('archive')
    expect(templateA(1, 'red')).toBe(templateB(1, 'red'))
  })

  it('applies width and color', () => {
    const template = getIconTemplate('alert-triangle')
    const svgDataUrl = template(2, 'red')
    expect(svgDataUrl).toContain("stroke-width='2'")
    expect(svgDataUrl).toContain("stroke='red'")
  })
})

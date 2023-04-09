
'use strict'

import style from './_main.scss'
import fonts from './_fonts.scss'
import script from './app.bundle.jsx'
import tailwind from './tailwind.css'

// Note: The JSX in this file is not compatible with Vue's version of JSX. This
// JSX is used only to render the initial HTML document.

function Page (props) {
  return <html lang='en'>
    <meta charset='utf-8'/>
    <title>{props.title}</title>
    <meta name='author' content={props.author}/>
    <meta name='description' content={props.description}/>
    <meta name='viewport' content={props.viewport}/>
    <link rel='icon' href='/logo.svg'/>
    <body>
      <noscript>Please enable JavaScript and try again.</noscript>
      <div id='app'></div>
      <script type='module'>{'<!-- boundary -->' + script}</script>
      <style>{'<!-- boundary -->' + style}</style>
      <style>{'<!-- boundary -->' + tailwind}</style>
      <style>{'<!-- boundary -->' + fonts}</style>
    </body>
  </html>
}

const html = Page({
  title: 'Toolchain',
  author: '',
  description: 'A toolchain for building web apps with Vue.',
  viewport: 'width=device-width,maximum-scale=5'
})

process.stdout.write('<!DOCTYPE html>' + html)

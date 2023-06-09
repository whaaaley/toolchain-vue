
'use strict'

import { writeFile } from 'node:fs/promises'
import { spawnSync } from 'node:child_process'
import { exit } from 'node:process'

import esbuild from 'esbuild'
import server from './server/index.js'
import config from './config.js'

import './lint.js'

async function build () {
  const bundle = await esbuild.build(config.main)
  const input = Buffer.from(bundle.outputFiles[0].contents.buffer)

  await writeFile('./deploy/public/index.html', spawnSync('node', { input }).stdout)
  console.log('🎉 Done Building!')

  // Note: There's something weird happening with async functions and child
  // processes. I don't know what it's about, but everything is done so it's
  // safe to exit.
  exit()
}

function start () {
  server({
    port: 3000,
    extensions: ['.js', '.jsx', '.sass', '.scss', '.ts', '.tsx'],
    watchDir: 'src'
  })
}

const targets = { build, start }
targets[process.argv[2]]()


import path from 'node:path'

import babel from './plugins/babel.js'
import javascript from './plugins/javascript.js'
import resolve from './plugins/resolve.js'
import sass from './plugins/sass.js'
import tailwind from './plugins/tailwind.js'

import helpers from './sass-functions/helpers.js'
import oklab from './sass-functions/oklab.js'
import tabler from './sass-functions/tabler.js'

import tailwindConfig from './tailwind.config.js'

const production = process.env.NODE_ENV === 'production'

const sassPluginOptions = {
  sass: {
    sourceMap: true,
    sourceMapIncludeSources: true,
    functions: {
      ...helpers,
      ...oklab,
      ...tabler
    }
  },
  cleancss: {
    level: 2
  }
}

const javascriptPluginOptions = {
  esbuild: {
    bundle: true,
    write: false,
    incremental: !production,
    sourcemap: production ? false : 'inline',
    format: 'esm',
    outdir: './deploy/public/',
    splitting: true,
    define: {
      'process.env.NODE_ENV': JSON.stringify(production ? 'production' : 'development'),
      '__VUE_OPTIONS_API__': true,
      '__VUE_PROD_DEVTOOLS__': false
    },
    inject: [
      './toolchain/jsx-helpers/jsx-pragma.js'
    ],
    plugins: [
      resolve({
        loadpaths: [
          path.join(process.cwd(), './src')
        ]
      }),
      sass({
        ...sassPluginOptions
      }),
      babel({
        plugins: [
          '@vue/babel-plugin-jsx'
        ]
      })
    ]
  },
  typescript: {
    compilerOptions: {
      allowJs: true,
      lib: [
        'DOM',
        'ESNext'
      ],
      target: 'ESNext'
    }
  },
  uglify: {
    toplevel: true,
    compress: {
      drop_console: true,
      passes: 3
    },
    mangle: {
      toplevel: true
    }
  }
}

export default {
  main: {
    bundle: true,
    incremental: !production,
    jsxFactory: 'jsxStatic',
    jsxFragment: 'jsxFragment',
    platform: 'node',
    write: false,
    entryPoints: [
      './src/index.jsx'
    ],
    inject: [
      './toolchain/jsx-helpers/jsx-pragma.js'
    ],
    loader: {
      '.bundle.jsx': 'text'
    },
    plugins: [
      javascript({
        ...javascriptPluginOptions
      }),
      sass({
        ...sassPluginOptions
      }),
      tailwind(tailwindConfig)
    ]
  }
}

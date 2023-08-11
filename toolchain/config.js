
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

const DEV = process.env.NODE_ENV === 'development'

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
    format: 'esm',
    incremental: DEV,
    outdir: './deploy/public/',
    sourcemap: DEV ? 'inline' : false,
    splitting: true,
    write: false,
    define: {
      'import.meta.env.DEV': JSON.stringify(DEV),
      '__VUE_OPTIONS_API__': true,
      '__VUE_PROD_DEVTOOLS__': false
    },
    inject: [
      './toolchain/jsx-helpers/jsx-pragma.js'
    ],
    plugins: [
      sass(sassPluginOptions),
      resolve({
        loadpaths: [
          path.join(process.cwd(), './src')
        ]
      }),
      babel({
        sourceMaps: DEV ? 'inline' : false,
        plugins: [
          ['@vue/babel-plugin-jsx', { optimize: true }]
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
    incremental: DEV,
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
      sass(sassPluginOptions),
      javascript(javascriptPluginOptions),
      tailwind({
        config: tailwindConfig,
        inlineSourcemap: true,
        loader: 'text'
      })
    ]
  }
}

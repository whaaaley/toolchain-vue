
# toolchain-vue

Project scaffold for Vue 3 with esbuild.

Features:
+ Vue 3, Vue Router, and Pinia
+ Optional Typescript
+ JSX or TSX
+ ESlint and Stylelint
+ SCSS and Tailwind
+ Automatic reload and persistent reactive state between reloads
+ Babel and Postcss plugins
+ Premade components
+ ...and all the usual esbuild features

## Why not Vite?

### Sourcemaps
It's 2023 and we still have terrible stack traces in frontend tooling. At the time of writing the Vite project has 60 open issues reguarding sourcemaps. Esbuild has amazing support for sourcemaps and it's incredibly simple to use.

### HMR
HMR is notoriously buggy and hard to get right. Rather than deal with that complexity, I've opted for a Vue specific solution that's rock solid. This scaffold includes a wrapper around `ref` and `reactive` that's only enabled in dev mode that persists state between reloads.

## Usage

```
$ npx degit whaaaley/toolchain-vue
```

## Pinned Dependencies

+ esbuild@0.14.54
+ stylelint@14.16.1
+ stylelint-config-clean-order@2.3.1
+ stylelint-config-standard-scss@6.1.0

## Todo

+ Upgrade to esbuild@0.17.x
+ Upgrade to stylelint@15.x
+ Use esbuild's file server and watcher instead
+ Use Prettier for all formatting (stylelint v15 removed formatting)

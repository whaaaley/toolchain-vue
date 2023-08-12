
import { computed, defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router'
import Counter from '@/components/Counter.jsx'

const GradientText = (props, { slots }) => {
  return <span class='bg-clip-text bg-gradient-to-r from-vt-blue to-vt-purple'>
    <span class='text-transparent'>{slots.default()}</span>
  </span>
}

const HeroText = () => {
  return <div class='leading-none'>
    <div class='text-center grid place-items-center'>
      <div class='text-hero font-bold'>
        <h1 class='mb-[0.25em]'>Frontend Tooling</h1>
        <h1 class='mb-[0.25em]'>For <GradientText>Vue Applications</GradientText></h1>
      </div>
      <div>
        <div class='text-tagline'>
          <p class='mt-[1em] mb-[1.75em]'>A environment with working sourcemaps.</p>
        </div>
      </div>
    </div>
  </div>
}

const Button = (props, { slots }) => {
  return <button class='bg-vt-blue px-4 py-2 rounded-lg'>
    <div class='flex gap-2 items-center'>{slots.default()}</div>
  </button>
}
// import cc from 'classcat'
// import { defineComponent } from '~/modules/pocket-superfine'
// import installStyles from './_install.scss'
//
// export default (parentProps, children) => {
//   return defineComponent(null, context => {
//     context.styles({ installStyles })
//
//     const state = context.reactive({
//       copied: false
//     })
//
//     function copy () {
//       state.copied = true
//
//       setTimeout(() => {
//         state.copied = false
//       }, 2000)
//
//       navigator.clipboard.writeText('npm i @onclick/pocket-superfine')
//     }
//
//     return props => {
//       return <div key='component-install' id='install'>
//         <div class='command'>
//           <span>$ </span>npm i @onclick/pocket-superfine
//         </div>
//         <button class={cc({ '-copied': state.copied })} aria-label='Copy Command' onclick={copy}>
//           {state.copied ? 'Copied!' : ''}
//         </button>
//       </div>
//     }
//   })
// }
// import { defineComponent, reactive } from 'vue';

const Install = defineComponent({
  name: 'Install',
  setup () {
    const state = reactive({
      copied: false
    })

    const copy = () => {
      state.copied = true

      setTimeout(() => {
        state.copied = false
      }, 2000)

      navigator.clipboard.writeText('npm i @onclick/pocket-superfine')
    }

    const style = computed(() => {
      const base = [
        'px-[1em] w-[3em]',
        'bg-slate-700',
        'rounded-r-lg',
        'text-transparent',
        'transition-all duration-200',
        'cursor-pointer',
        'flex items-center justify-end',
        'icon-copy'
      ]

      if (state.copied) {
        return [...base, 'bg-vt-blue', 'text-white', 'w-[7.5em]', 'px-[2.25em]', 'pr-[1em]']
      }

      return base
    })

    return () => <div class="text-body flex text-base mt-10">
      <div class="px-[1em] bg-slate-800 rounded-l-lg leading-[2.75em] text-light-300 font-mono">
        <span class="text-slate-500 font-semibold select-none">$ </span>npm i @onclick/pocket-superfine
      </div>
      <button class={style.value} aria-label="Copy Command" onClick={copy}>
        {state.copied ? 'Copied!' : ''}
      </button>
    </div>
  }
})

const Hero = defineComponent({
  name: 'Hero',
  setup () {
    const router = useRouter()

    const getStarted = () => {
      router.push({ name: 'Guide' })
    }

    const github = () => {
      router.push({ name: 'GitHub' })
    }

    return () => <header class='py-24 border-b-slate-800 border-b-2'>
      <HeroText/>
      <div class='text-body'>
        <div class='flex gap-4 justify-center'>
          <Button class='pr-10 icon-arrow-right' onClick={getStarted}>
            <span>Get Started</span>
          </Button>
          <Button class='!bg-slate-700' onClick={github}>GitHub</Button>
        </div>
      </div>
      <div class='flex justify-center'>
        <Install/>
      </div>
    </header>
  }
})

export default defineComponent({
  name: 'Home',
  setup () {
    const year = computed(() => {
      return new Date().getFullYear()
    })

    return () => <>
      <Hero />
      <div class='p-linear-md grid gap-12'>
        <div>
          <h1 class='text-tagline mb-[0.25em] text-slate-400'>
            <span>Sourcemaps</span>
          </h1>
          <div class='text-body'>
            <p>It's {year.value + ''} and we still have terrible stack traces in most frontend tooling. At the time of writing the Vite project has 60 open issues reguarding sourcemaps. Esbuild has amazing support for sourcemaps and it's incredibly simple to use.</p>
          </div>
        </div>
        <div>
          <h1 class='text-tagline mb-[0.25em] text-slate-400'>
            <span>Auto Reloading</span>
          </h1>
          <div class='text-body'>
            <p>HMR is notoriously buggy and hard to get right. Rather than deal with that complexity, I've opted for a Vue specific solution that's rock solid. This scaffold includes a wrapper around `ref` and `reactive`, only enabled in dev mode, that persists state between reloads.</p>
          </div>
          <div class='flex justify-center mt-6'>
            <Counter />
          </div>
        </div>
      </div>
    </>
  }
})

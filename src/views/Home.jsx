
import { defineComponent } from 'vue'
import Counter from '@/components/Counter.jsx'

const HeroText = defineComponent({
  name: 'HeroText',
  setup () {
    return () => <>
      <div class='flex'>
        <h1 class='bg-clip-text text-transparent bg-gradient-to-r from-vt-blue to-vt-purple'>
          <span class='text-6xl font-bold'>VueTC</span>
        </h1>
      </div>
      <div class='grid gap-4'>
        <p class='text-6xl font-medium'>Frontend Tooling<br/>For Web Applications</p>
        <p class='text-2xl opacity-50'>Get ready for a development environment that's<br/>built for complex applications.</p>
      </div>
    </>
  }
})

const Hero = defineComponent({
  name: 'Hero',
  setup () {
    return () => <header class='bg-gray-900 text-white py-32'>
      <div class='container mx-auto'>
        <HeroText/>
        <div class='flex gap-4'>
          <a class='bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600' href='/guide/'>
            Get Started
          </a>
          <a class='bg-transparent text-blue-500 px-5 py-3 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white' href='/guide/why'>
            Why Vite?
          </a>
        </div>
      </div>
    </header>
  }
})

export default defineComponent({
  name: 'Home',
  setup () {
    return () => {
      return <div>
        <Hero/>
        {/* <div class='pl-10 tabler-alien m-8'>
          There's an alien near me!
        </div>
        <h1>I am the home page.</h1>
         */}
        <Counter/>
      </div>
    }
  }
})

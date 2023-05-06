
import { defineComponent } from 'vue'
import Counter from '@/components/Counter.jsx'

export default defineComponent({
  name: 'Home',
  setup () {
    return () => {
      return <div>
        <div class='pl-10 tabler-alien m-8'>
          There's an alien near me!
        </div>
        <h1>I am the home page.</h1>
        <Counter/>
      </div>
    }
  }
})

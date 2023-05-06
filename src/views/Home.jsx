
import { defineComponent } from 'vue'
import Counter from '@/components/Counter.jsx'

export default defineComponent({
  name: 'Home',
  setup () {
    return () => {
      return <div>
        <h1>I am the home page.</h1>
        <Counter/>
      </div>
    }
  }
})

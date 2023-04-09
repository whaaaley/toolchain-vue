
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  setup () {
    return () => {
      return <div>
        <h1>I am the home page.</h1>
      </div>
    }
  }
})


import { defineComponent } from 'vue'

export default defineComponent({
  name: 'About',
  setup () {
    return () => {
      return <div>
        <h1>I am the about page.</h1>
      </div>
    }
  }
})

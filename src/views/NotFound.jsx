
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFound',
  setup () {
    return () => {
      return <div>
        <h1>Not Found</h1>
      </div>
    }
  }
})

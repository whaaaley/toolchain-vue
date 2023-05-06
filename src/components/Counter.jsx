
import { defineComponent } from 'vue'
import { reactive } from '~/helpers/persist.js'

export default defineComponent({
  name: 'Counter',
  setup () {
    const data = reactive({
      count: 0
    })

    const minus = () => {
      data.count--
    }

    const plus = () => {
      data.count++
      console.log('hello')
    }

    return () => {
      return <div class='flex gap-4'>
        <button onClick={minus}>Minus</button>
        <div>{data.count}</div>
        <button onClick={plus}>Plus</button>
      </div>
    }
  }
})

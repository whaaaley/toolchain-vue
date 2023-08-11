
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
    }

    const reload = () => {
      location.reload()
    }

    return () => {
      return <div class='flex'>
        <div class='flex gap-4 bg-slate-900 p-3 rounded-lg'>
          <button class='bg-vt-green px-4 py-2 rounded-md' onClick={minus}>
            <div class='bg-icon-PencilIcon-white w-10 h-10'>_</div>
          </button>
          <div class='text-3xl'>{data.count}</div>
          <button class='bg-vt-green px-4 py-2 rounded-md' onClick={plus}>Plus</button>
          <button class='bg-vt-green px-4 py-2 rounded-md' onClick={reload}>Reload</button>
        </div>
      </div>
    }
  }
})

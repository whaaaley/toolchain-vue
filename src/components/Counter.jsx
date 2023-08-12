
import { defineComponent } from 'vue'
import { reactive } from '~/helpers/persist.js'

const Btn = (props, { slots }) => {
  return <button class='bg-vt-blue px-3 rounded-md'>
    {slots.default()}
  </button>
}

const Icon = props => {
  return <div class='w-6 h-6'></div>
}

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
        <div class='flex gap-4 bg-slate-800 p-3 rounded-lg'>
          <Btn onClick={minus}>
            <Icon class='bg-circle-minus'/>
          </Btn>
          <div class='text-3xl'>{data.count}</div>
          <Btn onClick={plus}>
            <Icon class='bg-circle-plus'/>
          </Btn>
          <Btn onClick={reload}>Reload</Btn>
        </div>
      </div>
    }
  }
})

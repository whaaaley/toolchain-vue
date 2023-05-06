
import { reactive, watch } from 'vue'

let counter = 0

function getId () {
  counter++
  return counter.toString()
}

function reactiveWrapper (data) {
  const state = reactive(data)

  if (import.meta.env.DEV) {
    const id = getId()

    async function load () {
      const saved = sessionStorage.getItem('toolchain-persist')

      if (saved) {
        const parsed = JSON.parse(saved)[id]

        for (const key in parsed) {
          state[key] = parsed[key]
        }
      }
    }

    async function save () {
      const persist = JSON.stringify({ [id]: state })
      sessionStorage.setItem('toolchain-persist', persist)
    }

    load()
    watch(state, save)
  }

  return state
}

export { reactiveWrapper as reactive }

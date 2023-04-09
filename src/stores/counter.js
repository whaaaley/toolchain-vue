
import { reactive } from 'vue'
import { defineStore } from 'pinia'

export default defineStore('counter', () => {
  const state = reactive({
    count: 0
  })

  const increment = () => {
    state.count++
  }

  const decrement = () => {
    state.count--
  }

  return {
    state,
    increment,
    decrement
  }
})

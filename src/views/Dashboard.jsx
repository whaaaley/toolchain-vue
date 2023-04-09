
import { defineComponent } from 'vue'
import { useRoute, RouterView, RouterLink } from 'vue-router'

export default defineComponent({
  name: 'Dashboard',
  setup () {
    const route = useRoute()

    return () => {
      return <div class='bg-slate-800 text-white h-screen'>
        <div class='bg-slate-700 h-14 flex items-center justify-between px-4'>
          <div>
            <div class='font-medium text-xl'>
              Toolchain
            </div>
          </div>
          <div class='flex gap-4'>
            <RouterLink to={{ name: 'Home' }}>Home</RouterLink>
            <RouterLink to={{ name: 'About' }}>About</RouterLink>
          </div>
        </div>
        <div class='flex justify-center items-center p-8'>
          <div class='bg-slate-700 p-4 rounded-lg w-tablet'>
            <h1 class='font-medium text-xl'>{route.name}</h1>
            <RouterView/>
          </div>
        </div>
      </div>
    }
  }
})

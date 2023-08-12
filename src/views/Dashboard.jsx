
import { defineComponent } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

export default defineComponent({
  name: 'Dashboard',
  setup () {
    return () => {
      return <div class='bg-slate-900 text-white'>
        <div class='h-16 flex items-center justify-between px-4 border-b-slate-800 border-b-2'>
          <div>
            <div class='font-medium text-xl'>Vue / esbuild</div>
          </div>
          <div class='flex gap-4 text-body'>
            <RouterLink to={{ name: 'Home' }}>Home</RouterLink>
            <RouterLink to={{ name: 'Shop' }}>Shop</RouterLink>
            <RouterLink to={{ name: 'About' }}>About</RouterLink>
          </div>
        </div>
        <div>
          <RouterView/>
        </div>
      </div>
    }
  }
})

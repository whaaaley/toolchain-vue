
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    product: {
      type: Object,
      required: true
    },
    addToCart: {
      type: Function,
      required: true
    }
  },
  setup (props) {
    return () => {
      const product = props.product

      return (
        <div class="bg-slate-700 shadow-lg rounded-lg overflow-hidden">
          <div class="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${product.image})` }}></div>
          <div class="p-4">
            <h2 class="text-2xl font-bold mb-2">{product.name}</h2>
            <p class="mb-4">{product.description}</p>
            <div class="flex justify-between items-center">
              <div class="font-bold text-xl">${product.price}</div>
              <button class="bg-blue-500 text-white rounded-md px-4 py-2" onClick={() => props.addToCart(product.id)}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      )
    }
  }
})


import { defineComponent, onMounted, ref, reactive } from 'vue'
import { shopStore } from '@/stores/shop.js'
import ProductCard from '@/components/ProductCard.jsx'

export default defineComponent({
  setup () {
    const store = shopStore()

    const data = reactive({
      loading: false
    })

    const products = ref([])
    const PAGE_SIZE = 6
    let currentSize = PAGE_SIZE

    onMounted(async () => {
      data.loading = true

      await store.listProducts()

      data.loading = false
    })

    // Adding a product to the cart
    const addToCart = productId => {
      store.addToCart(productId)
    }

    // Load more products
    const loadMore = () => {
      currentSize += PAGE_SIZE
    }

    return () => {
      const hasMoreProducts = currentSize < store.state.products.length

      return (
        <div class="container mx-auto mt-10">
          <h1 class="text-4xl font-bold mb-4">Shop</h1>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            {store.state.products.slice(0, currentSize).map(product => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
          {hasMoreProducts && (
          <div class="flex justify-center my-8">
            <button
              class="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600"
              onClick={() => loadMore()}
            >
              View More
            </button>
          </div>
          )}
        </div>
      )
    }
  }
})

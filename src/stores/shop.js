
import { reactive, computed } from 'vue'
import { faker } from '@faker-js/faker'
import { defineStore } from 'pinia'

const useShop = () => {
  const state = reactive({
    products: [],
    cart: []
  })

  const listProducts = async () => {
    // Generate a random number of products between 10 and 20
    const amount = faker.datatype.number({
      min: 10,
      max: 20
    })

    // Generate product data for each product
    state.products = new Array(amount)
      .fill()
      .map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        image: null
      }))

    // Fetch product images asynchronously
    for (let i = 0; i < state.products.length; i++) {
      try {
        const imageUrl = 'https://source.unsplash.com/random/800x600/?product&' + Date.now()
        const response = await fetch(imageUrl)

        if (response.ok) {
          state.products[i].image = response.url
        }
      } catch (error) {
        console.error(error)
      }
    }
  }

  const addToCart = productId => {
    // Check if the product is already in the cart
    const existingProduct = state.cart.find(item => item.id === productId)

    if (existingProduct) {
      existingProduct.quantity++
    } else {
      // Add the product to the cart
      const product = state.products.find(item => item.id === productId)

      state.cart.push({
        id: productId,
        name: product.name,
        price: product.price,
        quantity: 1
      })
    }
  }

  const cartTotal = computed(() => {
    return state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
  })

  return {
    state,
    listProducts,
    addToCart,
    cartTotal
  }
}

const shopStore = defineStore('shop', useShop)

export { useShop, shopStore }

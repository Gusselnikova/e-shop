import {defineStore} from "pinia"
import {computed, ref, shallowRef} from "vue"

import CartItem from "./types/CartItem"
import CartApiServiceAsSingleton from "@/infrastructure/cart/CartApiServiceAsSingleton";

export const useCartStore = defineStore(
  "cart",
  () => {
    const isLoaded = ref(false)
    const items = shallowRef<CartItem[]>([])
    const error = shallowRef(null)

    const isEmpty = computed((): boolean => isLoaded && !items.value.length)

    async function pull(): Promise<void> {
      try {
        isLoaded.value = false
        items.value = await CartApiServiceAsSingleton.pull()
      } finally {
        isLoaded.value = true
      }
    }

    async function clear(): Promise<void> {
      items.value = []
    }

    async function addToCart(sku: CartItem["sku"], qty: number): Promise<void> {
      try {
        isLoaded.value = false
        items.value = await CartApiServiceAsSingleton.addToCart(sku, qty)
      } finally {
        isLoaded.value = true
      }
    }

    return {
      items,
      isEmpty,
      isLoaded,
      error,
      addToCart,
      clear,
    }
  },
)
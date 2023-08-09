import CartApiServiceInterface from "@/application/cart/types/CartApiServiceInterface"
import CartItem from "@/application/cart/types/CartItem"
import CartItemMock from "@/mocks/cart-item.json"

export default class CartApiService implements CartApiServiceInterface {
  async pull(): Promise<CartItem[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([CartItemMock])
      }, 1000)
    })
  }

  async addToCart(sku: CartItem["sku"], qty: number): Promise<CartItem[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([CartItemMock])
      }, 1000)
    })
  }
}
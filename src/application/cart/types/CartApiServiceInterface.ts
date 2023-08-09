import CartItem from './CartItem'

export default interface CartApiServiceInterface {
  pull: () => Promise<CartItem[]>

  addToCart(sku: CartItem['sku'], qty: number): Promise<CartItem[]>
}
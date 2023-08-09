interface CartItemProduct {
  name: string
  slug: string
  image: string
}

export default interface CartItem {
  product: CartItemProduct
  qty: number
  price: number
  sku: string
}
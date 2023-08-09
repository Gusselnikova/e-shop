interface OrderItem {
  image: string
  slug: string
  name: string
  price: number
  qty_ordered: number
  sku: string
}

export default interface Order {
  id: string
  items: OrderItem[]
  total_price: number
}
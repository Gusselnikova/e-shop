import Order from "./Order"

export default interface OrderApiServiceInterface {
  create: () => Promise<Order['id']>
  get: (id: Order['id']) => Promise<Order>
}
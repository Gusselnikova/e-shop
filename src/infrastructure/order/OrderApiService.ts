import OrderApiServiceInterface from "@/interfaces/order/OrderApiServiceInterface"
import Order from "@/interfaces/order/Order"
import OrderMock from "@/mocks/order.json"

export default class OrderApiService implements OrderApiServiceInterface {
  create(): Promise<Order['id']> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(OrderMock['id'])
      }, 1000)
    })
  }

  get(id: Order['id']): Promise<Order> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(OrderMock)
      }, 1000)
    })
  }
}
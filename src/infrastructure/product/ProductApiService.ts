import ProductMock from "@/mocks/product.json"
import Product from "@/interfaces/product/Product"
import ProductApiServiceInterface from "@/interfaces/product/ProductApiServiceInterface"

export default class ProductApiService implements ProductApiServiceInterface {
  get(slug: string): Promise<Product> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ProductMock)
      }, 1000)
    })
  }
}
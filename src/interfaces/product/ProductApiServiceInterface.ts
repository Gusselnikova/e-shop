import Product from "./Product"

export default interface ProductApiServiceInterface {
  get: (sku: string) => Promise<Product>
}

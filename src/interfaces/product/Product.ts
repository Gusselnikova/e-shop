interface ProductSpecifications {
  label: string,
  value: string
}

export default interface Product {
  sku: string,
  name: string,
  description: string,
  image: string,
  price: number,
  qty: number,
  slug: string,
  specifications: ProductSpecifications[]
}
export interface ProductResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

// everything marked as optional as API stability is unknown
// TS will now warn when trying to use a property that may not exist
export interface Product {
  'id'?: number
  'title'?: string
  'description'?: string
  'price'?: number
  'discountPercentage'?: number
  'rating'?: number
  'stock'?: number
  'brand'?: string
  'category'?: string
  'thumbnail'?: string
  'images'?: string[]
}

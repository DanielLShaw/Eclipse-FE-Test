import { type ProductResponse } from '../types/product.types'

async function typedFetch<T>(url: string): Promise<T> {
  return await fetch(url)
    .then(async response => {
      if (!response.ok) {
        throw new Error(response.statusText)
      }
      return await (response.json() as Promise<T>)
    })
}

export default async function getAllProducts(): Promise<ProductResponse> {
  return await typedFetch<ProductResponse>('https://dummyjson.com/products')
}

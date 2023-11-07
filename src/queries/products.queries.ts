import { type ProductResponse } from '../types/product.types'

function typedFetch<T>(url: string): Promise<T> {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json() as Promise<T>
        })
}

export default async function getAllProducts(): Promise<ProductResponse> {
    return await typedFetch<ProductResponse>('https://dummyjson.com/products')
}

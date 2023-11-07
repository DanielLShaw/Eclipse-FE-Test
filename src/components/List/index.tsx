import { useQuery } from '@tanstack/react-query'
import getAllProducts from '../../queries/products.queries'
import { type ReactNode } from 'react'

export default function List(): ReactNode {
  // grab products
  const { data: rawResponse } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
    staleTime: 3 * 60 * 1000
  })

  // filter out brand = Apple
  const filteredProducts = rawResponse?.products?.filter(
    product => product.brand !== 'Apple')

  // sort highest rating desc

  const sortedProducts = filteredProducts?.sort(
    (a, b) => {
      return (b?.rating ?? 0) - (a?.rating ?? 0)
    })

  // choose first 10
  const displayedProducts = sortedProducts?.slice(0, 9)

  return <pre>{JSON.stringify(displayedProducts, null, 2)}</pre>
}

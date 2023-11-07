import { useQuery } from '@tanstack/react-query'
import getAllProducts from '../../queries/products.queries'
import { type ReactNode } from 'react'

export default function List(): ReactNode {
  // grab products
  const { data: rawResponse, dataUpdatedAt, isStale } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
    staleTime: 3 * 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false
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

  return <div>
    <pre>Last Updated {new Date(dataUpdatedAt).toISOString()}</pre>
    <pre>Stale? {isStale ? 'Y' : 'N'}</pre>

    <pre>{JSON.stringify(displayedProducts, null, 2)}</pre>
  </div>
}

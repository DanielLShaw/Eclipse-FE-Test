import { useQuery } from '@tanstack/react-query'
import getAllProducts from '../../queries/products.queries'

export default function List() {

    // grab products
    const { data: rawResponse } = useQuery({ queryKey: ['products'], queryFn: getAllProducts })

    // filter out brand = Apple
    const filteredProducts = rawResponse?.products?.filter(product => product.brand !== "Apple")

    // sort highest rating desc

    const sortedProducts = filteredProducts?.sort((a, b) => { return (b?.rating ?? 0) - (a?.rating ?? 0) })

    // choose first 10
    const displayedProducts = sortedProducts?.slice(0, 9);

    return <pre>{JSON.stringify(displayedProducts, null, 2)}</pre>
}

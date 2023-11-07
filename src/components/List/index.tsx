import { useQuery } from '@tanstack/react-query'
import getAllProducts from '../../queries/products.queries'

export default function List() {
    const { data } = useQuery({ queryKey: ['products'], queryFn: getAllProducts })
    return <pre>{JSON.stringify(data, null, 2)}</pre>
}

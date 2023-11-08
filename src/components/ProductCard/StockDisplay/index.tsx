import { type Product } from "../../../types/product.types";

interface StockDisplayProps {
  stock: Product["stock"];
}

export default function StockDisplay({ stock }: StockDisplayProps) {
  return <span>Stock Display</span>;
}

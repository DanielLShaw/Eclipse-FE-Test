import { Product } from "../../types/product.types";
import MobileProductCard from "./MobileProductCard";

export default function ProductCard({
  item,
  deliveryCutoffTime,
}: {
  item: Product;
  deliveryCutoffTime: number;
}) {
  return (
    <MobileProductCard item={item} deliveryCutoffTime={deliveryCutoffTime} />
  );
}

import { Product } from "../../types/product.types";
import MobileProductCard from "./MobileProductCard";

export default function ProductCard({
  item,
  deliveryCutoffTime,
  recommended,
}: {
  item: Product;
  deliveryCutoffTime: number;
  recommended: boolean;
}) {
  return (
    <MobileProductCard
      item={item}
      deliveryCutoffTime={deliveryCutoffTime}
      recommended={recommended}
    />
  );
}

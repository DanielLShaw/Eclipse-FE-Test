import { Product } from "../../types/product.types";
import MobileProductCard from "./MobileProductCard";

export default function ProductCard({ item }: { item: Product }) {
  return <MobileProductCard item={item} />;
}

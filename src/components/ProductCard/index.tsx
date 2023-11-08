import { useMediaQuery } from "react-responsive";
import { Product } from "../../types/product.types";
import MobileProductCard from "./MobileProductCard";
import DesktopProductCard from "./DesktopProductCard";

export default function ProductCard({
  item,
  deliveryCutoffTime,
  recommended,
}: {
  item: Product;
  deliveryCutoffTime: number;
  recommended: boolean;
}) {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 800px)",
  });

  const CardDisplay = isDesktopOrLaptop
    ? DesktopProductCard
    : MobileProductCard;

  return (
    <CardDisplay
      item={item}
      deliveryCutoffTime={deliveryCutoffTime}
      recommended={recommended}
    />
  );
}

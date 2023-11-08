interface PriceDisplayProps {
  nowPrice: number;
  discountPercentage: number;
}

export default function PriceDisplay({
  nowPrice,
  discountPercentage,
}: PriceDisplayProps) {
  return <span>Price Display</span>;
}

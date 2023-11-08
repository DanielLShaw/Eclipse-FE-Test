import { Product } from "../../../types/product.types";

interface RatingProps {
  rating: Product["rating"];
  reviews?: number;
}

export default function Rating({ rating, reviews }: RatingProps) {
  return (
    <div>
      <span>{rating}/ 5</span>
      <span>{reviews ?? "XX"} Reviews</span>
    </div>
  );
}

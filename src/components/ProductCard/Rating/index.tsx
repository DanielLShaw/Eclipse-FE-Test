import { Product } from "../../../types/product.types";
import styled from "styled-components";
import { CSSProperties } from "react";

interface RatingProps {
  rating: Product["rating"];
  reviews?: number;
}

const Wrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

// based off: https://css-tricks.com/five-methods-for-five-star-ratings/
const Stars = styled.div`
  --star-color: var(--Yellow);
  --star-background: lightgrey;

  --percent: calc(var(--rating-value, 0) / var(--rating-max, 5) * 100%);

  display: inline-block;
  font-family: Times;
  font-size: 28px;
  line-height: 1;

  &::before {
    content: "★★★★★";
    letter-spacing: 0px;
    background: linear-gradient(
      90deg,
      var(--star-color) var(--percent),
      var(--star-background) var(--percent)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Reviews = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px;
`;

export default function Rating({ rating = 0, reviews = 0 }: RatingProps) {
  const starStyle = {
    "--rating-value": rating,
    "--rating-max": 5,
  } as CSSProperties;
  return (
    <Wrap className="rating">
      <Stars
        className="rating__stars"
        style={starStyle}
        title={`${rating}/5 rating`}
      />
      <Reviews className="rating__reviews">{reviews} Reviews</Reviews>
    </Wrap>
  );
}

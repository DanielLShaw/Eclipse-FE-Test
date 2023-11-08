import { type ReactNode } from "react";
import { faker } from "@faker-js/faker";

import { type Product } from "../../types/product.types";
import styled from "styled-components";
import Rating from "./Rating";
import { Image, Title } from "./Common";
import Features from "./Features";
import PriceDisplay from "./PriceDisplay";
import DeliveryCountdown from "./DeliveryCountdown";
import CTA from "./CTA";
import StockDisplay from "./StockDisplay";

const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;

  border-radius: 20px;
  background: white;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
  padding: 27px 20px;
`;

const Images = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  width: 100%;
`;

interface ProductCardProps {
  item: Product;
  deliveryCutoffTime: number;
}

export default function MobileProductCard({
  item,
  deliveryCutoffTime,
}: ProductCardProps): ReactNode {
  const {
    id,
    title = "Product title",
    discountPercentage = 0,
    images = [],
    price = 0,
    rating = 0,
    stock = 0,
    brand,
  } = item;

  const handleCTAClick = () => {
    console.log("Add to basket", { productId: id, price });
  };

  const features = Array(5)
    .fill("")
    .map(() => faker.lorem.words({ min: 2, max: 6 }));

  return (
    <ItemWrap data-id={id}>
      <Title>{title}</Title>
      <Rating rating={rating} />
      <Images>
        <Image
          src={images?.[0] ?? "/images/fallback.svg"}
          alt={`image for product ${title}`}
        />
        <Image
          src={"/images/fallback.svg"}
          alt={`${brand} logo for product ${title}`}
        />
      </Images>

      <Features features={features} />
      <PriceDisplay nowPrice={price} discountPercentage={discountPercentage} />
      <StockDisplay stock={stock} />
      <DeliveryCountdown cutOffTime={deliveryCutoffTime} />
      <CTA text="ADD TO BASKET" onClick={handleCTAClick} />
    </ItemWrap>
  );
}

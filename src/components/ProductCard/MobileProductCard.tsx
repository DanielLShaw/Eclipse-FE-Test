import { type ReactNode } from "react";
import { faker } from "@faker-js/faker";
import classNames from "classnames";

import { type Product } from "../../types/product.types";
import styled from "styled-components";
import Rating from "./Rating";
import { Title, CardWrap } from "./Common";
import Features from "./Features";
import PriceDisplay from "./PriceDisplay";
import DeliveryCountdown from "./DeliveryCountdown";
import CTA from "./CTA";
import StockDisplay from "./StockDisplay";
import Images from "./Images";

const ItemWrap = styled(CardWrap)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
`;

interface ProductCardProps {
  item: Product;
  deliveryCutoffTime: number;
  recommended: boolean;
}

export default function MobileProductCard({
  item,
  deliveryCutoffTime,
  recommended,
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
    <ItemWrap data-id={id} className={classNames("item", { recommended })}>
      <Title>{title}</Title>
      <Rating rating={rating} />
      <Images
        productSrc={images[0]}
        logoSrc={undefined}
        brandName={brand}
        productName={title}
      />

      <Features features={features} />
      <PriceDisplay nowPrice={price} discountPercentage={discountPercentage} />
      <StockDisplay stock={stock} />
      <DeliveryCountdown cutOffTime={deliveryCutoffTime} />
      <CTA text="ADD TO BASKET" onClick={handleCTAClick} />
    </ItemWrap>
  );
}

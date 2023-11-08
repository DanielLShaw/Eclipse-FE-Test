import { type ReactNode } from "react";
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
`;

interface ProductCardProps {
  item: Product;
}

export default function MobileProductCard({
  item,
}: ProductCardProps): ReactNode {
  const {
    id,
    title = "Product title",
    description = "",
    discountPercentage = 0,
    images = [],
    price = 0,
    rating = 0,
    stock = 0,
  } = item;

  const handleCTAClick = () => {
    console.log("Add to basket", { productId: id, price });
  };
  return (
    <ItemWrap data-id={id}>
      <Title>{title}</Title>
      <Rating rating={rating} />
      <Image src={"/images/fallback.svg"} alt={`image for product ${title}`} />
      <Features features={[]} />
      <PriceDisplay nowPrice={price} discountPercentage={discountPercentage} />
      <StockDisplay stock={stock} />
      <DeliveryCountdown />
      <CTA text="ADD TO BASKET" onClick={handleCTAClick} />
    </ItemWrap>
  );
}

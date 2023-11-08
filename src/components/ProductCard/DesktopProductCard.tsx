import { type ReactNode } from "react";
import { faker } from "@faker-js/faker";
import classNames from "classnames";

import { type Product } from "../../types/product.types";
import styled from "styled-components";
import Rating from "./Rating";
import { CardWrap, Title } from "./Common";
import Features from "./Features";
import PriceDisplay from "./PriceDisplay";
import DeliveryCountdown from "./DeliveryCountdown";
import CTA from "./CTA";
import StockDisplay from "./StockDisplay";
import Images from "./Images";

const ItemWrap = styled(CardWrap)`
  display: grid;
  grid-template-columns: 350px 1fr minmax(250px, 1fr);
  gap: 14px;
`;

const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledFeatures = styled(Features)`
  padding-top: 24px;
`;

const DeliveryFeatures = styled(Features)`
  .features__feature {
    gap: 19px;
  }
`;

const PriceAndStock = styled.div`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Delivery = styled.div`
  margin-bottom: 36px;
`;

interface ProductCardProps {
  item: Product;
  deliveryCutoffTime: number;
  recommended: boolean;
}

export default function DesktopProductCard({
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
      <Images
        productSrc={images[0]}
        logoSrc={undefined}
        brandName={brand}
        productName={title}
      />
      <CenterColumn>
        <Title>{title}</Title>
        <Rating rating={rating} />
        <StyledFeatures features={features} />
      </CenterColumn>
      <RightColumn>
        <PriceAndStock>
          <PriceDisplay
            nowPrice={price}
            discountPercentage={discountPercentage}
          />
          <StockDisplay stock={stock} />
        </PriceAndStock>
        <Delivery>
          <DeliveryCountdown cutOffTime={deliveryCutoffTime} />
          <DeliveryFeatures
            features={["Free UK Delivery", "PayPal credit available"]}
          />
        </Delivery>

        <CTA text="ADD TO BASKET" onClick={handleCTAClick} />
      </RightColumn>
    </ItemWrap>
  );
}
